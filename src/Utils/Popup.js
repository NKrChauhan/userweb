import React, { useState } from "react";

const Popup = ({ handleClose, show, child , childValue,submitCall }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  const [val,setVal] = useState(childValue)
  return (
    <div className={showHideClassName +" border modal-fullscreen-sm-down border-top-5 rounded-left jumbotron"} style={{'left':'35%','top':'20%','height':'30%','width':'40%'}}>
      <div className="justify-content-between row">
        <label for="field">{child}:</label>
            <input id="field" type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <footer className="my-3">
                <button className="btn btn-success mx-3" onClick={()=>submitCall(child,val)}>Save</button>
                <button className="modal-close btn btn-danger" onClick={handleClose}>
                close
                </button>
            </footer>
      </div>
    </div>
  );
};

export default Popup;
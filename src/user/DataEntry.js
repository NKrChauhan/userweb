import { useHistory } from "react-router-dom";
function DataEntry(props){
    const userdata = props.user
    const uid = 'user/'+userdata.id+'/'
    var history = useHistory();
    return <div id={props.index} className="card col-md-3 mx-2 my-1" style={{'width':'10rem'}} onClick={()=>{
        history.push(uid);
    }}>
        <img className="card-img-top" src={userdata.picture_lg} alt="userimage"/>
        <div className="card-body">
            <h5 className="card-title">{userdata.title_name +" "+userdata.f_name+" "+userdata.l_name} <i style={{'color':'teal'}}>aka</i> {userdata.s_name}</h5>
            <div style={{'color':'teal'}}>
            <p className="card-text">{userdata.email}</p>
            <p className="card-text">{userdata.team}</p>
            <p className="card-text">{userdata.job_title}</p>
            </div>
        </div>
    </div>
}

export default DataEntry;
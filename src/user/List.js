import {useState,useEffect} from 'react' 
import axios from 'axios'
import DataEntry from './DataEntry';
import Navbar from '../Utils/Navbar';

function List(){
    const [users,setUsers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        if(loaded === false){
            const uri = 'http://127.0.0.1:8000/api/list/';
            axios.get(uri).then((res)=>{
                setUsers(res.data);
                setLoaded(true)
            }).catch((error)=>{
                console.log(error)
            })         
            }
        },)
        
    return <div className="container-fluid">
    <Navbar/>
    <div className="row justify-content-center" style={{'margin-top':'100px'}}>
    {users.map((item, index) => {
        return (
            <DataEntry
              user={item}
              index={index}
            />
        );
      })}

    </div>
    </div>
}
export default List;
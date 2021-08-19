import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router"
import {Bar, Pie} from 'react-chartjs-2';
import Popup from "../Utils/Popup";
import { AxiosDj } from "../Utils/AxiosDj";

function Detail(){
    var { uid } = useParams();
    const [load,setload] = useState(false)
    const [popupvisible,setPopupvisiblity] = useState(false)
    const [edit,setEdit] = useState("")
    const [newvaluem,setNewVal] = useState("")
    const [user,setUser]= useState({
        id: '',
        f_name: "",
        l_name: "",
        s_name: "",
        title_name: "",
        email: "",
        contact: "",
        contact_ext: "",
        join_date: "",
        picture_lg: "",
        picture_md: "",
        picture_sm: "",
        team: "",
        job_title: "",
        logged_in: "",
        last_logged: ""
    
    })
    const douData = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'eating habits',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
    const barData = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'social life',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
    function change(e){
    setEdit(e)
    setNewVal(user[e])
    setPopupvisiblity(true)
    }
    useEffect(()=>{
        if(load === false){
            var uri = 'http://127.0.0.1:8000/api/detail/'+uid +'/'
            axios.get(uri).then((res)=>{
                setUser(res.data)
                setload(true)
            }).catch((e)=>{
                console.log(e)
            })
        }
    })
    function handleSubmit(e,v) {
        var uri = 'edit/'+uid+'/'
        var u = JSON.parse(JSON.stringify(user))
        u[e]=v
        AxiosDj.post(uri,u).then((res)=>{
            setUser(u)
            alert("successfully saved !")
        }).catch((e)=>{
            alert(e.message)
        })
        modalClose()
    }
    
    function modalClose() {
        setPopupvisiblity(false)
        setEdit("")
      }
    
    return <div className="row py-5 px-4" style={{'width':'100%'}}>
    <div className="col-md-9 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
                <div className="media justify-content-end profile-head">
                    <div className="profile mr-3"><img src={user.picture_md} alt="..." width="130" className="rounded mb-2 img-thumbnail"/></div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">{user.f_name+" "+user.l_name}</h4>
                        <p onClick={()=>change("team")} className="small mb-4"> <i className="fas fa-info mr-2"></i> {user.team} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                    </div>
                </div>
            </div>
            {popupvisible && <Popup show={popupvisible} handleClose={e => modalClose(e)} child={edit} childValue={newvaluem} submitCall={handleSubmit}/>}
            <div className="px-4 py-3">
                <h5 className="mb-0">About</h5>
                <div className="p-4 row rounded shadow-sm bg-light">
                    <div className="col-md-6 row">
                        <div className="col-md-6">
                            <p>Title Name:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("title_name")} className="font-italic mb-0">{user.title_name} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Short Name:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("s_name")} className="font-italic mb-0">{user.s_name} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Email:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("email")} className="font-italic mb-0">{user.email} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Join Date:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("join_date")} className="font-italic mb-0">{user.join_date} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                    </div>
                    <div className="col-md-6 row">
                        <div className="col-md-6">
                            <p>First Name:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("f_name")} className="font-italic mb-0">{user.f_name} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Last Name:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("l_name")} className="font-italic mb-0">{user.l_name} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Ext Contact:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("contact_ext")} className="font-italic mb-0">{user.contact_ext} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                        <div className="col-md-6">
                            <p>Contact no:</p>
                        </div>
                        <div className="col-md-6">
                            <p onClick={()=>change("contact")} className="font-italic mb-0">{user.contact} <i style={{'color':'teal','fontSize':'15px'}} class="far fa-edit"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-3">Some more info:</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Bar
                            data={barData}
                            options={{
                                title:{
                                display:true,
                                text:'Random Graph',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                            />
                    </div>
                    <div className="col-md-6">
                    <Pie
                        data={douData}
                        options={{
                            title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}
export default Detail;



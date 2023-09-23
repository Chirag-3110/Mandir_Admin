import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import TrashIcon from "@heroicons/react/24/outline/TrashIcon"
import { API_REQUEST } from "../../api"
import { USER_CONFIG } from "../../constants/User"
import { URSL } from "../../constants/URLS"
import { openModal } from "../common/modalSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New Event", bodyType : MODAL_BODY_TYPES.EVENT_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Transactions(){


    const [events, setEvents] = useState(RECENT_TRANSACTIONS)

    useEffect(()=>{
        getAllEvents()
    },[])
    const getAllEvents=async()=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const eventsApi=await API_REQUEST.getData(URSL.GET_EVENTS,token);
            if(eventsApi.data.status != 200)
                throw eventsApi
            setEvents(eventsApi.data.data)
        } catch (error) {
            toast("Cannot fetch events");
            console.log(error);
        }
    }
    const deletEvent=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.DELETE_STATUS_EVENT,{id:item.id},token)
            if(response.data.status !== 200)
                throw response

            setEvents(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_delete =  value.is_delete?0:1;
                    } 
                    return value;
                }),
            );
            toast(`Delete Status Updated Successfully`)
        } catch (error) {
            toast("Event not deleted")
            console.log(error);
        }
    }
    const udpateEventAcivity=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.UPDATE_ACTIVE_STATUS_EVENT,{id:item.id},token)
            if(response.data.status !== 200)
                throw response
            setEvents(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_active =  value.is_active?0:1;
                    } 
                    return value;
                }),
            );
            toast("Event Status Changed")
        } catch (error) {
            toast("Event Status not Changes")
            console.log(error);
        }
    }
    return(
        <>
            
            <TitleCard title="All Events" topMargin="mt-2" TopSideButtons={<TopSideButtons />} >

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Event Type</th>
                        <th>Activity</th>
                        <th>Delete Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            events.length>0 &&
                            events.map((item, index) => {
                                return(
                                    <tr key={index}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {/* <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div> */}
                                                <div className="font-bold">{item.name}</div>
                                            {/* </div> */}
                                        </div>
                                    </td>
                                    <td>{item.start_date}</td>
                                    <td>{item.end_date}</td>
                                    <td>{item.type?"LIVE":"ON-SITE"}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => udpateEventAcivity(item,index)}>
                                            <td style={{color:item.is_active?"green":"red"}}>{item.is_active?"ACTIVE":"InActive"}</td>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => deletEvent(item,index)}>
                                            <td style={{color:item.is_delete?"green":"red"}}>{item.is_delete?"DELETED":"DELETE"}</td>
                                        </button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
            <ToastContainer />
        </>
    )
}


export default Transactions
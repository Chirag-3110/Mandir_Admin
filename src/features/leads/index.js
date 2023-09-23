import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import { API_REQUEST } from "../../api"
import { URSL } from "../../constants/URLS"
import { useState } from "react"
import { USER_CONFIG } from "../../constants/User"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New User", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Leads(){

    const [allUsers,setAllUsers]=useState([]);

    useEffect(()=>{
        getAllUsers()
    },[])
    
    const getAllUsers=async()=>{
        try {
        const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL)
            const usersList=await API_REQUEST.getData(URSL.GET_USER,token)
            console.log(usersList,"ss")
            if(usersList.data.status==200){
                console.log(usersList.data.data)
                setAllUsers(usersList?.data?.data)
            }else{
                throw usersList
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.DELETE_USER,{id:item.id},token)
            if(response.data.status !== 200)
                throw response

            setAllUsers(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_delete =  value.is_delete?0:1;
                    } 
                    return value;
                }),
            );
            toast(`Delete Status Updated Successfully`)
        } catch (error) {
            toast("User not deleted")
            console.log(error);
        }
    }
    const updateuserActiveStatus=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.UPDATE_STAUS_USER,{id:item.id},token)
            if(response.data.status !== 200)
                throw response
            setAllUsers(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_active =  value.is_active?0:1;
                    } 
                    return value;
                }),
            );
            toast("User Active Status Changed")
        } catch (error) {
            toast("User Active Status not Changes")
            console.log(error);
        }
    }
    return(
        <>
            
            <TitleCard title="Current Users" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone</th>
                        <th>Activity</th>
                        <th>Delete Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.length>0 &&
                            allUsers.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {/* <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div> */}
                                            <div>
                                                <div className="font-bold">{l.full_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.phone}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => updateuserActiveStatus(l,k)}>
                                            <td style={{color:l.is_active?"green":"red"}}>{l.is_active?"ACTIVE":"InActive"}</td>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteUser(l,k)}>
                                            <td style={{color:l.is_delete?"green":"red"}}>{l.is_delete?"DELETED":"DELETE"}</td>
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


export default Leads
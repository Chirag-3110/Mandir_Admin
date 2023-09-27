import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from "../common/headerSlice"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URSL } from "../../constants/URLS"
import { USER_CONFIG } from "../../constants/User"
import {API_REQUEST} from '../../api/index';
import { openModal } from "../common/modalSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New News", bodyType : MODAL_BODY_TYPES.NEWS_ADD_MODAL,size:"lg"}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}


function Integration(){

    const dispatch = useDispatch()

    const [newsList, setnewsList] = useState([])
    useEffect(()=>{
        getNewsList();
    },[])
    const getNewsList=async()=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL)
            const news=await API_REQUEST.getData(URSL.GET_NEWS,token)
            console.log(news,"ss")
            if(news.data.status==200){
                console.log(news.data.data)
                setnewsList(news?.data?.data)
            }else{
                throw news
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteNews=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.DELETE_UPDATE_NEWS,{id:item.id},token)
            if(response.data.status !== 200)
                throw response

                setnewsList(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_delete =  value.is_delete?0:1;
                    } 
                    return value;
                }),
            );
            toast(`Delete Status Updated Successfully`)
        } catch (error) {
            toast("News not deleted")
            console.log(error);
        }
    }
    const updateNewsStatus=async(item,selectedIndex)=>{
        try {
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL);
            const response=await API_REQUEST.postData(URSL.UPDATE_NEWS_STATUS,{id:item.id},token)
            if(response.data.status !== 200)
                throw response
            setnewsList(items =>
                items.map((value, index) => {
                    if (index === selectedIndex) {
                        value.is_active =  value.is_active?0:1;
                    } 
                    return value;
                }),
            );
            toast("News Status Changed")
        } catch (error) {
            toast("News Status not Changes")
            console.log(error);
        }
    }
    return(
        <>
            <TitleCard title="All News" topMargin="mt-2" TopSideButtons={<TopSideButtons />} >
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Activity</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            newsList.length>0 &&
                            newsList.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{item.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-square btn-ghost" onClick={() => updateNewsStatus(item,index)}>
                                                <td style={{color:item.is_active?"green":"red"}}>{item.is_active?"ACTIVE":"InActive"}</td>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-square btn-ghost" onClick={() => deleteNews(item,index)}>
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

export default Integration
import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"
import { API_REQUEST } from "../../../api"
import { URSL } from "../../../constants/URLS"
import { USER_CONFIG } from "../../../constants/User"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailValidate from "../../../utils/validateEmail"

const INITIAL_LEAD_OBJ = {
    file: "",
}

function AddExcelFile({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewUser = async () => {
        try {
            // if(leadObj.file.trim() === "")  throw "File is required!";
            // else{
            //     const newLeadObj = {
            //         "full_name": leadObj.name,
            //         "phone": leadObj.phone,
            //         "email": leadObj.email,
            //         "address": leadObj.addres,
            //         "gotra": leadObj.gotra,
            //         "occupation": leadObj.occupation,
            //         "age": parseInt(leadObj.age),
            //         "gender": leadObj.gender
            //     }
            //     const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL)
            //     const addNewUser=await API_REQUEST.postData(URSL.ADD_NEW_USER,newLeadObj,token)
            //     if(addNewUser.data.status !==201)
            //         throw addNewUser
            //     // dispatch(addNewLead({newLeadObj}))`
            //     // dispatch(showNotification({message : "New Lead Added!", status : 1}))
            //     toast("New User Created");
            //     console.log(addNewUser)
            //     closeModal()
            // }
            console.log(leadObj)
        } catch (error) {
            toast(error.data.message);
            console.log(error);
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="file" defaultValue={leadObj.file} updateType="file" containerStyle="mt-4" labelTitle="File" updateFormValue={updateFormValue}/>


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewUser()}>Save</button>
            </div>
            
        </>
    )
}

export default AddExcelFile
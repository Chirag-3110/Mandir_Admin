import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"
import { API_REQUEST } from "../../../api"
import { URSL } from "../../../constants/URLS"
import { USER_CONFIG } from "../../../constants/User"

const INITIAL_LEAD_OBJ = {
    name : "",
    phone : "",
    age:"",
    gotra:"",
    addres:""
}

function AddUserModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewUser = async () => {
        if(leadObj.name.trim() === "")return setErrorMessage("Name is required!")
        else if(leadObj.phone.trim() === "")return setErrorMessage("phone is required!")
        else if(leadObj.age.trim() === "")return setErrorMessage("age is required!")
        else if(leadObj.gotra.trim() === "")return setErrorMessage("gotra is required!")
        else if(leadObj.addres.trim() === "")return setErrorMessage("address is required!")
        else{
            let newLeadObj = {
                name: leadObj.name,
                phone: leadObj.phone,
                age: leadObj.age,
                gotra: leadObj.gotra,
                addres: leadObj.addres,
            }
            const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL)
            const addNewUser=await API_REQUEST.postData(URSL.ADD_NEW_USER,newLeadObj,token);
            console.log(!addNewUser.error)
            // dispatch(addNewLead({newLeadObj}))`
            // dispatch(showNotification({message : "New Lead Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={leadObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue}/>
            <InputText type="text" defaultValue={leadObj.phone} updateType="phone" containerStyle="mt-4" labelTitle="Phone" updateFormValue={updateFormValue}/>
            <InputText type="text" defaultValue={leadObj.age} updateType="age" containerStyle="mt-4" labelTitle="Age" updateFormValue={updateFormValue}/>
            <InputText type="text" defaultValue={leadObj.gotra} updateType="gotra" containerStyle="mt-4" labelTitle="Gotra" updateFormValue={updateFormValue}/>
            <InputText type="text" defaultValue={leadObj.addres} updateType="addres" containerStyle="mt-4" labelTitle="Address" updateFormValue={updateFormValue}/>


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewUser()}>Save</button>
            </div>
        </>
    )
}

export default AddUserModalBody
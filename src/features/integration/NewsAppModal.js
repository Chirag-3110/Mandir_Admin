import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../components/Input/InputText'
import ErrorText from '../../components/Typography/ErrorText'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URSL } from "../../constants/URLS"
import { USER_CONFIG } from "../../constants/User";
import { API_REQUEST } from "../../api";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const INITIAL_EVENT_OBJ = {
    name : "",
    content : "",
    file:"",
}

function AddNewsModal({closeModal}){
    const form=useRef();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_EVENT_OBJ);
    const [value, setValue] = useState('');


    const saveNewEvent = async () => {
        try {
            console.log(value)
            const formdata=new FormData(form.current);
            if(leadObj.name.trim() === "")  throw "Name is required!";
            else if(leadObj.content.trim() === "")  throw "Address is required!";
            else if(leadObj.file.trim() === "")  throw "File is required!";
            else{
                formdata.append('title',leadObj.name)
                formdata.append('content',value)
                formdata.append('file',leadObj.file)
                const token=localStorage.getItem(USER_CONFIG.TOKEN_DETAIL)
                const newsRespone=await API_REQUEST.postData(URSL.ADD_NEWS,formdata,token,'multipart/form-data');
                if(newsRespone.data.status!==200)
                    throw newsRespone
                console.log(newsRespone,"ee")
                toast(newsRespone.data.message)
                closeModal()
            }
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

            <form ref={form}>
                <InputText type="text" defaultValue={leadObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue}/>
                <section>
                    <label className="label">
                        <span className={"label-text text-base-content "}>Content</span>
                    </label>
                <ReactQuill style={{height:150,marginBottom:50,borderRadius:50,borderColor:"grey"}} theme="snow" value={value} onChange={setValue} />
                </section>
                <InputText type="file" defaultValue={leadObj.file} updateType="file" containerStyle="mt-4" labelTitle="Upload File" updateFormValue={updateFormValue}/>

            </form>

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewEvent()}>Save</button>
            </div>
            {/* <ToastContainer /> */}
        </>
    )
}

export default AddNewsModal
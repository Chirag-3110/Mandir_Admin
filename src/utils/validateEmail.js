const EmailValidate=(email)=>{
    if(email.match(/^[^@]+@[^@]+\.[^@]+$/)){
        return false;
    }
    return true
}
export default EmailValidate
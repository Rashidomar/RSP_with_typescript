export const validator = (formData:any)=>{
    const errorMessages:any = {}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!formData.username.trim()){
        errorMessages.username = "Username is required"
    }else if(formData.username.length < 4){
        errorMessages.username = "Username must equal or more than four characters"
    }

    if(!formData.email.trim()){
        errorMessages.email = "Email is required"
    }else if(!emailPattern.test(formData.email)){
        errorMessages.email = "Email is not valid"
    }

    if(!formData.password.trim()){
        errorMessages.password = "Password is required"
    }else if(formData.password.length < 4){
        errorMessages.password = "Password must equal or more than four characters"
    }

    return errorMessages

}
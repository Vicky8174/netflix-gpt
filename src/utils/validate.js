const checkValidateData = (email,password ,name = "Holycow" )=>{

    const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassWordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ;
    const isNameValid  =  /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isEmailValid)  return "Email is not Valid";
    if(!isPassWordValid) return "Password is not valid";
    if(!isNameValid) return " name is not valid"

    return null 

}

export default checkValidateData ;
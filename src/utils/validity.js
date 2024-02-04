export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*()\-+.]).{6,20}$/.test(password);
    const isNameValid = /^[a-zA-Z0-9]+$/;

    if(!isEmailValid) return "Email Id invalid";
    if(!isPasswordValid) return "Password is invalid";
    if(!isNameValid) return "Name is invalid"

    return null 
}
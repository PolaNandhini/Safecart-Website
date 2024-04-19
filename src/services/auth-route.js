import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./storage/local.storage";

export function  AuthRoute(props){
    let userValid = false;
    //check user
    userValid = getLocalStorageItem("userData");
    if(userValid){  //if(uservalid !=  null ,&& uservalid != undefined)
          return props.children;
     }
     else{
        return <Navigate to='/signin'></Navigate>
     }    
}
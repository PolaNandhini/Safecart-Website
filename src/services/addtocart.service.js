import {read} from "./context.service";
const addtocartUrl="http://localhost:4000/addtocart/";


//function for get addtocart data
export function getAddtocart(){
    return read(addtocartUrl);
}

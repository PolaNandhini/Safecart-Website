import { read } from './context.service'


let userURL="http://localhost:4000/user_data"
export function getUser(){
    return read(userURL)  
}
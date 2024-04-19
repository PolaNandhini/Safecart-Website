import axios from "axios";

//function for get
export function read(url){
    return axios.get(url)
};
//function save
export function create(url,data){
    return axios.post(url,data)
};
//function for update
export function update(url,data){
    return axios.put(url,data)
};
//function for delete
export function deleteItem(url){
    return axios.delete(url)
};
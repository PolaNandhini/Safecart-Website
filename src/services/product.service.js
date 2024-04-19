import {read} from "./context.service";
const productUrl="http://localhost:4000/product_details/";
const productUrl1="http://localhost:4000/product_details1/";
const productUrl2="http://localhost:4000/product_details2/";
const productUrl3="http://localhost:4000/product_details3/";
//function for get product data
export function getProduct(){
    return read(productUrl);
}
//function for get product data1
export function getProduct1(){
    return read(productUrl1);
}
//function for get product data2
export function getProduct2(){
    return read(productUrl2);
}
//function for get product data3
export function getProduct3(){
    return read(productUrl3);
}
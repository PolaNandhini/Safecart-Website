import {read} from "./context.service";
const wishlistUrl="http://localhost:4000/wishlist/";


//function for get wishlist data
export function getWishlist(){
    return read(wishlistUrl);
}

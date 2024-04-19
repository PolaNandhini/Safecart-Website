import './app.router.css';
import {  Route,Routes } from "react-router-dom";
import { About } from './components/about/about.component';
import { Home } from './components/homepage/Home';
import { ProductsPage } from './components/productspage/productspage.component';
import { Contact } from './components/contact/contact.component';
import { SignIn } from './components/signin/signin.component';
import { SignUp } from './components/signup/signup.component';
import { BlogGridStyle } from './components/bloggridstyle/bloggridstyle.component';
import { BlogList } from './components/bloglist/bloglist.component';
import { TrackingOrder } from './components/trackingorder/trackingorder.component';
import { SEllerLogin } from './components/sellerlogin/sellerlogin.component';
import { Faq } from './components/faq/faq';
import { Terms } from './components/terms/terms';
import { PrivacyPolicy } from './components/privacypolicy/privacypolicy';
import { Homestyle01 } from './components/homestyle01/homestyle01';
import { FullShopPage } from './components/fullshoppage/fsp';
import { FlashSale } from './components/flashsale/flshsale';
import { HomeStyleTwo } from './components/homestyle02/homestyle02';
import { Becomeaseller } from './components/becomeaseller/becomeaseller';
import { Wishlist } from './components/wishlist/wishlist';
import { ViewDetails } from './components/viewdetails/viewdetails';
import { DashBoard } from './components/dashboard/dashboard';
import { Addtocart } from './components/addtocart/addtocart';
import { Hspdetails } from './components/hspdetails/hspdetails';
import { Editprofile } from './components/editprofile/editprofile';
import { Addproduct } from './components/addproduct/addproduct';
export function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/productlist" element={<ProductsPage></ProductsPage>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/signin" element={<SignIn></SignIn>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/bloggridstyle" element={<BlogGridStyle></BlogGridStyle>}></Route>
                <Route path="/bloglist" element={<BlogList></BlogList>}></Route>
                <Route path="/trackingorder" element={<TrackingOrder></TrackingOrder>}></Route>
                <Route path="/sellerlogin" element={<SEllerLogin></SEllerLogin>}></Route>
                <Route path="/faq" element={<Faq></Faq>}></Route>
                <Route path="/terms" element={<Terms></Terms>}></Route>
                <Route path="/privacypolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                <Route path="/homestyle01" element={<Homestyle01></Homestyle01>}></Route>
                <Route path="/fsp" element={<FullShopPage></FullShopPage>}></Route>
                <Route path="/flashsale" element={<FlashSale></FlashSale>}></Route>
                <Route path="/homestyle02" element={<HomeStyleTwo></HomeStyleTwo>}></Route>
                <Route path="/bas" element={<Becomeaseller></Becomeaseller>}></Route>
                <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
                <Route path="/viewdetails" element={<ViewDetails></ViewDetails>}></Route>
                <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
                <Route path="/addtocart" element={<Addtocart></Addtocart>}></Route>
                <Route path='/hspdetails' element={<Hspdetails></Hspdetails>}></Route>
                <Route path='/editprofile' element={<Editprofile></Editprofile>}></Route>
                <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
            </Routes>
        </>
    )
}
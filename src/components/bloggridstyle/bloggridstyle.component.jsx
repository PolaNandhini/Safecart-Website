import React from "react";
import "./bloggridstyle.component.css";
import bgs1 from '../../assets/images/bgs1.webp';
import bgs2 from '../../assets/images/bgs2.webp';
import bgs3 from '../../assets/images/bgs3.webp';
import bgs4 from '../../assets/images/bgs4.webp';
import bgs5 from '../../assets/images/bgs5.webp';
import { Calendar, Tag } from "react-bootstrap-icons";
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function BlogGridStyle() {
    return (
        <>
            <section className="mt-5">
                <div className=" bgsdiv ">
                    <div>
                        <h1>Blog</h1>
                        <p>Blog Grid Style</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="bgsimg">
                            <img src={bgs1} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Tue Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg1">
                            <img src={bgs2} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Wed Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Ecommerce
                            <h3>Was drawing natural fat respect husband</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg">
                            <img src={bgs4} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Fri Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Ecommerce
                            <h3>In mr began music weeks after at begin</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <div className="bgsimg">
                            <img src={bgs3} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Tue Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg1">
                            <img src={bgs2} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Wed Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg1">
                            <img src={bgs5} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Fri Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <div className="bgsimg">
                            <img src={bgs1} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Tue Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg1">
                            <img src={bgs2} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Wed Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bgsimg">
                            <img src={bgs3} alt="" />
                        </div>
                        <br />
                        <div className="bgstext">
                            <Calendar></Calendar> &nbsp;Fri Feb 2024&nbsp;&nbsp;&nbsp;
                            <Tag></Tag>&nbsp;Start Up Business
                            <h3>New organization are added seal there</h3>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                            <button className="btn btn-light">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}
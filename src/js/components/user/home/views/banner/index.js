import React from 'react';
import { StyleBannerComponent } from './styled';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const BannerComponent = () => {
    return (
        <StyleBannerComponent>
            <div className="banner">
                <img className="banner-image" src="images/banner3.webp" alt="" />
                <div className="banner-content">
                    <div className="title">
                        YEEZY BOOST 700 MGH SOLID GREY/CHALK WHITE/CORE BLACK
                    </div>
                    <div className="body">
                        MỞ BÁN TRÊN ỨNG DỤNG ADIDAS. TẢI ỨNG DỤNG, ĐĂNG KÝ, THAM GIA
                    </div>
                    <Link>
                        <button className="register">Đăng kí ngay <AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
            <div className="banner">
                <img className="banner-image" src="images/banner2.webp" alt="" />
                <div className="banner-content">
                    <div className="title">
                        YEEZY BOOST 350 V2 BONE
                    </div>
                    <div className="body">
                        MỞ BÁN TRÊN ỨNG DỤNG ADIDAS. TẢI ỨNG DỤNG, ĐĂNG KÝ, THAM GIA
                    </div>
                    <Link>
                        <button className="register">Đăng kí ngay <AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
        </StyleBannerComponent>
    );
};

export default BannerComponent;
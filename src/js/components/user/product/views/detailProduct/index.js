import React, { useRef } from 'react';
import { StyleDetailProductComponent } from './styled';
import { Carousel } from 'antd';
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
};


const DetailProductComponent = () => {
    const desc = useRef();

    const handleClickBtnDescription = () => {
        desc.current.scrollIntoView({ behavior: "smooth" });
    }

    const cmt = useRef();

    const handleClickBtnComment = () => {
        cmt.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <StyleDetailProductComponent>
            <div className="detail-header">
                <div className="breadcrumb">
                    <span className="breadcrumb-item">Trang chủ</span>
                    <span className="breadcrumb-item">/Nữ</span>
                    <span className="breadcrumb-item">/Giày Ultraboost</span>
                </div>
                <div className="product-name">Giày nữ ultraboost 22</div>
                <ReactStars classNames="rate-star"
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    value={3.5}
                    activeColor="#ffd700"
                />
            </div>
            <div className="detail-container">
                <div className="content">
                    <Carousel className="carousel">
                        <div>
                            <img className="image" src="/images/image1.webp" alt="" />
                        </div>
                        <div>
                            <img className="image" src="/images/image1.webp" alt="" />
                        </div>
                        <div>
                            <img className="image" src="/images/image1.webp" alt="" />
                        </div>
                        <div>
                            <img className="image" src="/images/image1.webp" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="sidebar-wrapper">
                    <div>
                        <button>Thêm vào giỏ hàng<AiOutlineArrowRight className="scale1_5" /></button>
                    </div>
                </div>
                <div className="product-information">
                    <div className="nav-bar">
                        <span className="nav" onClick={handleClickBtnDescription}>
                            <a className="nav-item">Mô Tả</a>
                        </span>
                        <span className="nav" onClick={handleClickBtnComment}>
                            <a className="nav-item">Bình luận</a>
                        </span>
                    </div>

                    <div className="product-information-space-line" ref={desc}></div>

                    <div className="description">
                        <div className="title">mô tả</div>
                        <div className="desc-detail">
                            GIÀY ULTRABOOST 22
                            KHẢ NĂNG HOÀN TRẢ NĂNG LƯỢNG TẠI MŨI GIÀY TĂNG 4% SO VỚI ULTRABOOST 21 VỚI ĐỘ ÔM CẢI THIỆN 360° CHO BÀN CHÂN NỮ GIỚI
                            Với dữ liệu từ 1,2 triệu bản quét hình dáng bàn chân, chúng tôi đã nâng cấp dòng giày Ultraboost tạo nên một phiên bản cải thiện độ ôm 360° cho bàn chân nữ giới. Chưa dừng lại ở đó. Chúng tôi đã cải tiến đế ngoài bằng cao su. Chúng tôi đã thử nghiệm hàng trăm bản mẫu. Chúng tôi nỗ lực không ngừng cho đến khi đạt được những cái thiện rõ rệt về hiệu năng. Thành quả là? Khả hoàn trả năng lượng tại mũi giày tăng 4% so với phiên bản Ultraboost 21 dành cho nữ giới. Thân giày adidas PRIMEKNIT với thiết kế phần gót thon gọn hơn để tránh tuột gót và phồng rộp. Đế giữa BOOST nâng đỡ êm ái với hệ thống Linear Energy Push. Thân giày làm từ loại sợi có chứa 50% chất liệu Parley Ocean Plastic — rác thải nhựa tái chế thu gom từ các vùng đảo xa, bãi biển, khu dân cư ven biển và đường bờ biển, nhằm ngăn chặn ô nhiễm đại dương.
                        </div>
                    </div>

                    <div className="product-information-space-line" ref={cmt}></div>

                    <div className="comment">
                        <div className="title">Bình luận và đánh giá</div>
                        <div className="your-rate">
                            <div className="rate-title">Đánh giá của bạn</div>
                            <ReactStars classNames="rate-star"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                value={3.5}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="cmt-detail">
                            <div className="comment-title">
                                Đánh giá của khách hàng
                            </div>
                            <div>
                                <span className="user-name">
                                    Thứ
                                </span>
                                <span><ReactStars classNames="number-star"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    value={3.5}
                                    activeColor="#ffd700"
                                />
                                </span>
                            </div>
                            <div className="user-comment">
                                I’m a marathon runner of 7+ years and have tried more than a handful of running shoes. The ultra boost are by far my favorite. I have been a loyal ultra boost runner since the 19 came out.
                            </div>
                            <div>
                                <span className="user-name">
                                    Thứ
                                </span>
                                <span><ReactStars classNames="number-star"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    value={3.5}
                                    activeColor="#ffd700"
                                />
                                </span>
                            </div>
                            <div className="user-comment">
                                I’m a marathon runner of 7+ years and have tried more than a handful of running shoes. The ultra boost are by far my favorite. I have been a loyal ultra boost runner since the 19 came out.
                            </div>
                            <div className="add-comment">
                                <textarea className="new-comment" />
                                <button className="add-new-comment">Thêm<AiOutlineArrowRight className="scale1_5" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleDetailProductComponent>
    );
};

export default DetailProductComponent;
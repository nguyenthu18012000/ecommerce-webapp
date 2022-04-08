import React, { useRef, useState } from 'react';
import { StyleDetailProductComponent } from './styled';
import { Carousel } from 'antd';
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import toastCustom from '../../../../../helpers/toast-custom';
import numberWithCommas from '../../../../../helpers/formatNumberWithCommas';
import TextareaAutosize from 'react-textarea-autosize';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import WebData from '../../../../../data/data';

const ratingChanged = (newRating) => {
    console.log(newRating);
};


const DetailProductComponent = () => {
    const [newComment, setNewComment] = useState("");
    const history = useHistory();

    let params = useParams();
    const id_product = params.id_product;

    const dataProducts = WebData.products;
    const dataProduct = dataProducts.filter(product => product.id == id_product)[0];

    const desc = useRef();
    const handleClickBtnDescription = () => {
        desc.current.scrollIntoView({ behavior: "smooth" });
    }

    const cmt = useRef();
    const handleClickBtnComment = () => {
        cmt.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleChangeInputComment = (e) => {
        setNewComment(e.target.value);
    }

    const handleClickBtnAddComment = (e) => {
        setNewComment("");
        toastCustom({
            mess: "thành công",
            type: "success",
        });
        console.log(newComment);
    }

    return (
        <StyleDetailProductComponent>
            <div className="detail-header">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" onClick={() => { history.push("/") }}>Trang chủ</span>
                    <span className="breadcrumb-item">/{dataProduct?.category}</span>
                    <span className="breadcrumb-item">/Giày Ultraboost</span>
                </div>
                <div className="product-name">{dataProduct?.name}</div>
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
                    <div className="product-price">
                        {numberWithCommas(dataProduct?.price)}đ
                    </div>
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
                            {dataProduct?.desc}
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
                                <TextareaAutosize className="new-comment" onChange={handleChangeInputComment} value={newComment} />
                                <button className="add-new-comment" onClick={handleClickBtnAddComment}>Thêm<AiOutlineArrowRight className="scale1_5" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleDetailProductComponent>
    );
};

export default DetailProductComponent;
import { Button, Carousel, Col, Input, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineRollback } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { useHistory, useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import numberWithCommas from '../../../../../helpers/formatNumberWithCommas';
import toastCustom from '../../../../../helpers/toast-custom';
import productService from '../../../../../services/user/product.service';
import imageService from '../../../../../services/admin/image.service';
import cartService from '../../../../../services/user/cart.service';
import { StyleDetailProductComponent } from './styled';
import commentService from '../../../../../services/user/comment.service';
import StarRating from '../../../../../components/common/base/react-star';
import storage from '../../../../../helpers/storage';
import { Modal } from 'antd';
import { FaShippingFast } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import ModalRedirectComponent from './views/modal-redirect';

const DetailProductComponent = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [dataComment, setDataComment] = useState([]);
    const [rateStar, setRateStar] = useState(0);
    const [avgStar, setAvgStar] = useState(0);
    const [images, setImages] = useState([]);
    const [dataProduct, setDataProduct] = useState({});
    const [price, setPrice] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();
    let params = useParams();
    const desc = useRef();
    const cmt = useRef();

    const id_product = params.id_product;
    const product = {
        quantity: 1,
        productId: id_product,
        currentPrice: price
    };

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleClickBtnDescription = () => {
        desc.current.scrollIntoView({ behavior: "smooth" });
    }
    const handleClickBtnComment = () => {
        cmt.current.scrollIntoView({ behavior: "smooth" });
    }
    const handleChangeInputComment = (e) => {
        setNewComment(e.target.value);
    }
    const handleClickBtnAddComment = () => {
        if (newComment !== "") {
            commentService.createNewComment(
                {
                    productId: id_product,
                    star: rateStar,
                    content: newComment
                },
                () => {
                    getDataCommentById();
                    setNewComment("");
                    // toastCustom({
                    //     mess: "Thành công",
                    //     type: "success",
                    // });
                },
                () => { }
            )
        } else {
            toastCustom({
                mess: "Bạn không thể để trống ",
                type: "warn",
            });
        }
    }
    const ratingChanged = (newRating) => {
        setRateStar(newRating);
    }
    const handleClickBtnAddProduct = () => {
        cartService.addProductToCart(
            { productOrder: product },
            (code) => {
                if (code === 200) {
                    toastCustom({
                        mess: "Sản phẩm đã được thêm vào giỏ hàng.",
                        type: "success",
                    });
                } else {
                    toastCustom({
                        mess: "Sản phẩm đã tồn tại trong giỏ hàng",
                        type: "info",
                    });
                }
            },
            () => { }
        )
    }
    const getDataProductById = () => {
        productService.getProductById(
            id_product,
            (data) => {
                setDataProduct(data);
                if (data?.promotions.length === 0) {
                    setPrice(data?.price);
                } else {
                    setPrice(data?.promotions[0]?.priceSale);
                }
                imageService.getImageByIds(
                    data?.images,
                    (images) => {
                        setImages(images);
                    },
                    () => { }
                )
            },
            () => { }
        );
    }
    const getDataCommentById = () => {
        commentService.getAllCommentByIdProduct(
            id_product,
            (data) => {
                setDataComment(data);
                calculateAverageStar(data);
            },
            () => { }
        );
    }
    const calculateAverageStar = (data) => {
        let length = data.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum += parseInt(data[i].star);
        }
        setAvgStar(sum / length);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getDataProductById();
        getDataCommentById();
        if (storage.getToken() != undefined) {
            setIsAuthenticate(true);
        } else {
            setIsAuthenticate(false);
        }
    }, []);

    return (
        <StyleDetailProductComponent>
            <div className="breadcrumb">
                <span
                    className="breadcrumb-item back"
                    onClick={() => history.goBack()}
                >
                    <AiOutlineRollback />Trở lại
                </span>
                <span
                    className="breadcrumb-item"
                    onClick={() => { history.push("/") }}
                >
                    Trang chủ
                </span>
                <span
                    className="breadcrumb-item"
                    onClick={() => { history.push(`/product?category=${dataProduct?.categoryId}`) }}
                >
                    /{dataProduct?.Category?.name}
                </span>
            </div>
            <div className="detail-container">
                <div className="web">
                    <Row>
                        <Col xs={24} md={16} sm={16} xl={16}>
                            <div className="content">
                                <Carousel className="carousel">
                                    {images.map((image, key = 0) => (
                                        <div key={key++}>
                                            <img className="image" src={image?.src} alt="" />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                        <Col xs={24} md={8} sm={8} xl={8}>
                            <StarRating className="product-star" star={avgStar} />
                            <div className="product-name">
                                {dataProduct?.name}
                            </div>
                            {
                                dataProduct?.promotions?.length === 0 ?
                                    <div className="product-price">
                                        {numberWithCommas(dataProduct?.price)}đ
                                    </div> :
                                    <div className="product-price">
                                        <span className="old-price">
                                            {numberWithCommas(dataProduct?.price)}đ
                                        </span>
                                        {
                                            dataProduct?.promotions ?
                                                <span className="new-price">
                                                    {numberWithCommas(dataProduct?.promotions[0]?.priceSale)}đ
                                                </span> :
                                                <span></span>
                                        }
                                    </div>
                            }
                            <div className="sidebar-wrapper">
                                {
                                    isAuthenticate ?
                                        <div>
                                            <button
                                                onClick={handleClickBtnAddProduct}
                                            >
                                                Thêm vào giỏ hàng
                                                <AiOutlineArrowRight className="scale1_5" />
                                            </button>
                                        </div> :
                                        <div>
                                            <button
                                                onClick={showModal}
                                            >
                                                Thêm vào giỏ hàng
                                                <AiOutlineArrowRight className="scale1_5" />
                                            </button>
                                        </div>
                                }
                                <div>
                                    <div className="more-info">
                                        <FaShippingFast className="scale1_5" />
                                        Hoàn trả hàng dễ dàng
                                    </div>
                                    <div className="more-info">
                                        <ImLoop className="scale1_5" />
                                        Không phù hợp? Bạn có thể hoàn trả hàng trong 7 ngày từ khi nhận sản phẩm
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mobile">
                    <div className="content">
                        <div className="detail-header">
                            <div className="product-name">
                                {dataProduct?.name}
                            </div>
                            {
                                dataProduct?.promotions?.length === 0 ?
                                    <div className="product-price">
                                        {numberWithCommas(dataProduct?.price)}đ
                                    </div> :
                                    <div className="product-price">
                                        <span className="old-price">
                                            {numberWithCommas(dataProduct?.price)}đ
                                        </span>
                                        {
                                            dataProduct?.promotions ?
                                                <span className="new-price">
                                                    {numberWithCommas(dataProduct?.promotions[0]?.priceSale)}đ
                                                </span> :
                                                <span></span>
                                        }
                                    </div>
                            }
                            <StarRating className="product-star" star={avgStar} />
                        </div>
                        <Carousel className="carousel">
                            {images.map((image, key = 0) => (
                                <div key={key++}>
                                    <img className="image" src={image?.src} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="sidebar-wrapper">
                        {
                            isAuthenticate ?
                                <div>
                                    <button
                                        onClick={handleClickBtnAddProduct}
                                    >
                                        Thêm vào giỏ hàng
                                        <AiOutlineArrowRight className="scale1_5" />
                                    </button>
                                </div> :
                                <div>
                                    <button
                                        onClick={showModal}
                                    >
                                        Thêm vào giỏ hàng
                                        <AiOutlineArrowRight className="scale1_5" />
                                    </button>
                                </div>
                        }
                        <div>
                            <div className="more-info">
                                <FaShippingFast className="scale1_5" />
                                Hoàn trả hàng dễ dàng
                            </div>
                            <div className="more-info">
                                <ImLoop className="scale1_5" />
                                Không phù hợp? Bạn có thể hoàn trả hàng trong 7 ngày từ khi nhận sản phẩm
                            </div>
                        </div>
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
                            {dataProduct?.descript}
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
                                isHalf={false}
                                value={rateStar}
                                activeColor="black"
                            />
                        </div>
                        <div className="cmt-detail">
                            <div className="comment-title">
                                Đánh giá của khách hàng
                            </div>
                            {
                                dataComment.length === 0 ?
                                    <div className="no-comment">
                                        Sản phẩm chưa có đánh giá
                                    </div> :
                                    <div></div>
                            }
                            {dataComment.map((comment, key = 0) => (
                                <div key={key++}>
                                    <div className="user">
                                        {
                                            comment?.User?.fullname ?
                                                <span className="user-name">{comment?.User?.fullname}</span> :
                                                <span className="user-name">Khách hàng ẩn danh</span>
                                        }
                                        <span className="number-star">
                                            <ReactStars classNames="number-star"
                                                count={5}
                                                size={24}
                                                isHalf={true}
                                                value={parseInt(comment.star)}
                                                activeColor="black"
                                                edit={false}
                                            />
                                        </span>
                                    </div>
                                    <div className="user-comment">
                                        {comment.content}
                                    </div>
                                </div>
                            ))}
                            {
                                isAuthenticate ?
                                    <div className="add-comment">
                                        <textarea
                                            className="new-comment"
                                            onChange={handleChangeInputComment}
                                            value={newComment}
                                        />
                                        <button
                                            className="add-new-comment"
                                            onClick={handleClickBtnAddComment}
                                        >
                                            Thêm
                                            <AiOutlineArrowRight className="scale1_5" />
                                        </button>
                                    </div> :
                                    <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Bạn chưa đăng nhập"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={500}
            >
                <ModalRedirectComponent />
            </Modal>
        </StyleDetailProductComponent >
    );
};

export default DetailProductComponent;
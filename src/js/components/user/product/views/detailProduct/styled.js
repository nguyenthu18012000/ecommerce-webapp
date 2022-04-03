import styled from "styled-components";

const StyleDetailProductComponent = styled.div`
    margin-left: 10%;
    margin-right: 10%;

    .detail-header {

        .breadcrumb {
            margin-top: 20px;

            .breadcrumb-item {
                font-size: 16px;
                letter-spacing: 1px;
            }
        }

        .product-name {
            font-size: 36px;
        }
    }
    .detail-container {
        
        .content {

            .image {
                width: 100%;
                max-height: 550px;
                object-fit: cover;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .sidebar-wrapper {
            button {
                cursor: pointer;
                margin-top: 10px;
                height: 50px;
                border: none;
                background-color: black;
                color: white;
                text-transform: uppercase;

                &:hover {
                    color: gray;
                }
            }
        }

        .product-information {
            position: relative;

            .product-information-space-line {
                padding-top: 60px;
            }

            .nav-bar {
                height: 50px;
                border-top: lightgray solid 1px;
                border-bottom: lightgray solid 1px;
                margin-top: 1%;
                margin-bottom: 1%;
                position: sticky;
                top: 0;
                background-color: white;
                /* padding-left: 40%;
                padding-right: 40%; */

                .nav {
                    width: 50%;
                    text-align: center;
                    display: inline-block;
                    margin-top: auto;
                    margin-bottom: auto;

                    .nav-item {
                        color: black;
                    }
                }
            }
            .title {
                font-size: 30px;
                line-height: 28px;
                text-transform: uppercase;
                margin-bottom: 15px;
            }

            .description {
            }

            .comment {

                .your-rate {

                    .rate-title {
                        text-align: center;
                        font-size: 20px;
                        margin-bottom: 10px;
                    }

                    .rate-star {
                        transform: scale(1.7);
                        display: inline-block;
                        margin: auto;
                    }
                }

                .cmt-detail {

                    .comment-title {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }

                    .user-name {
                        display: inline;
                        font-size: 15px;
                        font-weight: bold;
                        margin-left: 1.5%;
                    }

                    .number-star {
                        display: inline;
                        transform: scale(0.7);
                    }

                    .user-comment {
                        margin-left: 1.5%;
                        margin-right: 1.5%;
                        margin-bottom: 30px;
                    }

                    .add-comment {
                        margin-left: 1.5%;
                        margin-right: 1.5%;

                        .new-comment {
                            width: 100%;
                            resize: none;
                            margin-top: 10px;
                            margin-bottom: 10px;
                        }

                        .add-new-comment {
                            cursor: pointer;
                            margin-top: 10px;
                            height: 50px;
                            border: none;
                            background-color: black;
                            color: white;
                            text-transform: uppercase;

                            &:hover {
                                color: gray;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { StyleDetailProductComponent };

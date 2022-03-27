import styled from "styled-components";

const StyleDetailProductComponent = styled.div`
font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;
    .detail-header {

        .breadcrumb {

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
                width: 90%;
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

            .nav-bar {
                height: 50px;
                border-top: lightgray solid 1px;
                border-bottom: lightgray solid 1px;
                margin-top: 1%;
                margin-bottom: 1%;

                .nav {
                    width: 50%;
                    
                    .nav-item {
                        color: black;
                        width: 50%;
                    }
                }
            }
        }
    }
`;

export { StyleDetailProductComponent };

import styled from "styled-components";

const StyleProductComponent = styled.div`
    .new-arrival-item {
        /* margin-right: 5%; */
        border: 1px solid transparent;
        .product {

            .product-image {
                width: 100%;
                height: auto;
                margin-bottom: 2%;
            }

            .price {
                color: black;
                /* margin-top: -40px; */
            }

            .wishlist {
                color: black;
                float: right;
            }

            .detail {

                .product-name {
                    color: black;
                    font-size: 16px;
                    line-height: 20px;
                    text-transform: capitalize;
                }

                .product-category {
                    color: gray;
                    text-transform: capitalize;
                }
            }
        }

        &:hover {
            border: 1px solid black;
        }
    }
`;

export { StyleProductComponent }
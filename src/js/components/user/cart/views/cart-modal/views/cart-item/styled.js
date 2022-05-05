import styled from "styled-components";

const StyleCartPreviewItemComponent = styled.div`

    .cart-item {
        border: 1px black solid;
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;

        .item-image {

            .image {
                width: 100px;
                height: auto;
                max-height: 200px;
                cursor: pointer;
            }
        }

        .item-information {
            padding-top: 10px;

            .item-infor {
                display: inline-block;

                .item-name {
                    cursor: pointer;
                    font-size: 20px;

                    &:hover {
                        text-decoration: underline;
                    }
                }
                .item-price {
                    font-size: 16px;
                }

                .item-quantity {
                    font-size: 16px;
                }
            }

        }
    }
`;

export { StyleCartPreviewItemComponent }
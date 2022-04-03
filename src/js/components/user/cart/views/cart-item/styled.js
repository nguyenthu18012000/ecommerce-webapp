import styled from "styled-components";

const StyleCartItemComponent = styled.div`

    .cart-item {
        border: 1px black solid;
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;

        .item-image {

            .image {
                width: 200px;
                height: auto;
                max-height: 200px;

            }
        }

        .item-information {
            padding-top: 10px;

            .item-infor {
                display: block;

                .item-name {
                    font-size: 20px;
                }

                .item-price {
                    font-size: 16px;
                    float: right;
                }
            }

            .item-quantity {

                .number {
                    /* appearance: none; */
                    align-items: center;
                    border: 1px solid gray;
                    border-radius: 0;
                    justify-content: space-between;
                }
            }
        }

        .item-delete {
            cursor: pointer;
            border: none;
            background-color: white;
            transform: scale(1.5);
            position: absolute;
            top: 10px;
            right: 10px;
            border-radius: 2px;

            &:hover {
                background-color: gray;
                color: white;
            }
        }
    }
`;

export { StyleCartItemComponent }
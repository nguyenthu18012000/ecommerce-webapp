import styled from "styled-components";

const StyleCartItemComponent = styled.div`

    .cart-item {
        border: 1px lightgray solid;
        margin-top: 10px;
        margin-bottom: 15px;

        .item-image {

            .image {
                width: 200px;
                height: auto;
                max-height: 200px;

            }
        }

        .item-information {

            .item-infor {
                display: block;
            }
        }
    }
`;

export { StyleCartItemComponent }
import styled from "styled-components";

const StyleCartItemComponent = styled.div`

    .cart-item {
        border: 1px black solid;
        margin-top: 10px;
        margin-bottom: 15px;
        margin-right: 5%;

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
import styled from "styled-components";

const StyleBannerComponent = styled.div`
.banner {
    position: relative;
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;

    .banner-image {
        width: 100%;
    }

    .banner-content {
        position: absolute;
        bottom: 30%;
        left: 2%;
        width: 40%;

        .title {
            font-size: 42px;
            line-height: 38px;
            font-weight: 600;
        }

        .body {
            font-size: 18px;
        }

        .register {
            cursor: pointer;
            border: 0px;
            background-color: black;
            color: white;
            font-size: 16px;
            height: 50px;

            &:hover {
                color: gray;
            }
        }
    }
}
`;

export { StyleBannerComponent };
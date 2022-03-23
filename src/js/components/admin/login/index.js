import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { StyleLoginComponent } from './styled';
import { AiOutlineArrowRight,  } from "react-icons/ai";
import Validator from "hero-validate";

const LoginComponent = () => {

    const rules = {
        username: "required|min:6|max:20",
        password: "required|min:8|max:100",
    }

    Validator.setMessages({
        username: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
        password: {
            required: "Không được để trống",
            min: "Không được ngắn hơn :min kí tự",
            max: "Không được dài hơn :max kí tự",
        },
    });

    const [dataLogin, setDataLogin] = useState({
        "username": "",
        "password": "",
    });

    const handleChangeInput = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value,
        })
    }
    const result = Validator.validate(dataLogin, rules);

    const onSubmit = () => {
        console.log(dataLogin);
    };

    return (
        
        <StyleLoginComponent>
            <div>duong</div>
            <div className="register-container">
                <Row>
                    <Col span={12} xs={24} xl={12}>
                        <div className="form-register">
                            <div className="header-form">Đăng ký</div>
                            <form>
                                <div className="input-container">
                                    <label className="input-name">Tài khoản</label>
                                    <input type="text" name="username" onChange={handleChangeInput} placeholder="Nhập tài khoản..." required />
                                </div>
                                <div className="invalid-feedback">{result.errors?.username}</div>
                                <div className="input-container">
                                    <label className="input-name">Mật khẩu</label>
                                    <input type="password" name="password" onChange={handleChangeInput} placeholder="Nhập mật khẩu..." required />
                                </div>
                                <div className="invalid-feedback">{result.errors?.password}</div>
                                <div className="input-container">
                                    <button type="submit" onClick={onSubmit}>Đăng nhập<AiOutlineArrowRight /></button>
                                    {/* <span className="behind-button"></span> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleLoginComponent>
    );
};

export default LoginComponent;
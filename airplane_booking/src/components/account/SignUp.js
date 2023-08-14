import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../css/account/login_signup.css"
import "../../css/account/login_signup_2.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

export function SignUp() {
    return (
        <>
            <Formik
                initialValues={{

                }}
                validationSchema={yup.object({

                })}
                onSubmit={async (values, {setSubmitting}) => {

                } }
            >

            </Formik>
            {/*<h1 className="w3ls" style={{color: "rgb(6, 133, 170)"}}>*/}
            {/*    Đăng ký*/}
            {/*</h1>*/}
            {/*<div className="content-w3ls row">*/}
            {/*    <div className="content-agile1 text-center">*/}
            {/*        <h2 className="agileits1">VietnamAir</h2>*/}
            {/*    </div>*/}
            <h1 className="w3ls" style={{color: "rgb(6, 133, 170)"}}>
                ĐĂNG NHẬP
            </h1>
            <div className="content-w3ls">
                <div className="content-agile1">
                    <h2 className="agileits1" style={{padding: "25% 0"}}>
                        VietNamAir
                    </h2>
                </div>
                <div className="content-agile2 bg-white">
                    <form action="#" method="post">
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Email
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                                {/*                    <p style="color: red">Chưa nhập email</p>*/}
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="mail@gmail.com"
                                    required=""
                                />
                                <p className="err-mes">Chưa nhập email</p>
                                {/*                    <div style="margin: 0 auto 20px">*/}
                                {/*                        <p id="err-mes" style="color: red; padding-left: 18% ">Chưa nhập email</p>*/}
                                {/*                    </div>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Mật khẩu
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    className="lock"
                                    name="password"
                                    placeholder="Nhập"
                                    id="password1"
                                    required=""
                                />
                                <p className="err-mes">Chưa nhập mật khẩu</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Nhập lại mật khẩu
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    className="lock"
                                    name="confirm-password"
                                    placeholder="Nhập"
                                    id="password2"
                                    required=""
                                />
                                <p className="err-mes">Mật khẩu không trùng khớp</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Điện thoại
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Nhập"
                                    title="Chưa nhập họ và tên"
                                    required=""
                                />
                                <p className="err-mes">Chưa nhập số điện thoại</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Họ và tên
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Nhập"
                                    title="Please enter your First Name"
                                    required=""
                                />
                                <p className="err-mes">Chưa nhập họ và tên</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Ngày sinh
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="date"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    required=""
                                />
                                <p className="err-mes">Chưa chọn ngày sinh</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>Địa chỉ</span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Nhập"
                                    title="Please enter a valid email"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Giới tính
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <select
                                    className="form-select"
                                    id="email"
                                    name="gender"
                                    required=""
                                >
                                    <option value="">-- Chọn --</option>
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                    <option value="">Khác</option>
                                </select>
                                <p className="err-mes">Chưa chọn giới tính</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Hộ chiếu/CCCD
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i
                        className="fa-solid fa-star-of-life"
                        style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Nhập"
                                    title="Please enter a valid email"
                                    required=""
                                />
                                <p className="err-mes">Chưa nhập hộ chiếu / CCCD</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"
                                 style={{
                                     marginTop: "2%",
                                     paddingLeft: "8%",
                                     color: "rgb(6, 133, 170)",
                                     fontWeight: "bold"
                                 }}
                            >
                                {/*                     style="margin-top: 2%;padding-left: 10%; color: rgb(6, 133, 170); font-weight: bold"*/}
                                <span>
                Quốc tịch
                <sup style={{fontSize: 8}}>
                  <sup>
                    <i className="fa-solid fa-star-of-life"
                       style={{color: "#ff0019"}}
                    />
                  </sup>
                </sup>
              </span>
                            </div>
                            <div className="col-md-8">
                                <select
                                    className="form-select"
                                    id="email"
                                    name="gender"
                                    required=""
                                >
                                    <option value="">-- Chọn --</option>
                                    <option value="">Việt Nam</option>
                                    <option value="">USA</option>
                                    <option value="">Japan</option>
                                </select>
                                <p className="err-mes">Chưa chọn quốc tịch</p>
                            </div>
                        </div>
                        <input type="submit" className="register" defaultValue="Đăng ký"/>
                    </form>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary"  style={{margin: "1%"}}>
                            <i className="fab fa-facebook"/>
                        </button>
                        <button type="button" className="btn btn-danger">
                            <i className="fab fa-google"/>
                        </button>
                    </div>
                </div>
                <div className="clear"/>
            </div>
        </>
    )
}
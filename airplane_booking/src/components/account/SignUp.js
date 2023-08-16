import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../css/account/login_signup.css"
import "../../css/account/login_signup_2.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {max} from "moment";
import Swal from "sweetalert2";
// import CheckCode from './CheckCode';

export function SignUp() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    return (
        <>
            <Formik
                initialValues={{
                    nameCustomer: "",
                    genderCustomer: 2,
                    emailCustomer: "",
                    telCustomer: "",
                    addressCustomer: "",
                    imgCustomer: "",
                    nationalityCustomer: "",
                    idCardCustomer: "",
                    dateCustomer: "",
                    flagCustomer: 0,
                    password: "",
                    passwordAgain: ""
                }}
                validationSchema={yup.object({
                    nameCustomer: yup.string().required('Không được để trống trường này!')
                        .min(10, 'Họ và tên phải hơn 10 ký tự và dưới 50 ký tự.')
                        .max(50, 'Họ và tên phải hơn 10 ký tự và dưới 50 ký tự.'),
                    genderCustomer: yup.number().required('Không được để trống trường này!')
                        .min(0, 'Không được để trống trường này!')
                        .max(1, 'Không được để trống trường này!'),
                    emailCustomer: yup.string().required('Không được để trống trường này!')
                        .matches(/^\w+@\w+(.\w+)$/, "Nhập theo định dạng: xxx@xxx.xxx với x không phải là ký tự đặc biệt.")
                        .min(12, 'Email tối đa 50 ký tự, ít nhất 12 ký tự.')
                        .max(50, 'Email tối đa 50 ký tự, ít nhất 12 ký tự.'),
                    telCustomer: yup.string().required('Không được để trống trường này!')
                        .matches(/^(\+84|0)[1-9][0-9]{8}$/, "Nhập theo định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx với x là ký tự số."),
                    nationalityCustomer: yup.string().required('Không được để trống trường này!')
                       , // .min(1, 'Không được để trống trường này!')
                        // .max(10, 'Không được để trống trường này!'),
                    idCardCustomer: yup.string().required('Không được để trống tường này!')
                        .matches(/^([A-Z][0-9]{6,12})|([0-9]{12})$/, "Nhập theo định dạng (7 ký tự đối với hộ chiếu và 12 ký tự đối với CCCD)."),
                    dateCustomer: yup.date().required('Không được để trống trường này!')
                        .max(maxDate, 'Khách hàng phải trên 18 tuổi.')
                        .min(minDate, 'Khách hàng phải trên 18 tuổi và dưới 100 tuổi.'),
                    password: yup.string().required('Không được để trống trường này!')
                        .matches(/^(?=.*[A-Z])(?=.*[0-9]).{8,20}$/, "Mật khẩu phải từ 8 ký tự và ít hơn 20 ký tự, có chứa ký tự in hoa và ký tự số."),
                    passwordAgain: yup.string()
                        .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không đúng!')
                        .required('Không được để trống trường này!'),

                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    // setSubmitting(false);
                    console.log(values);
                    values = {
                    ...values,
                        genderCustomer: +values.genderCustomer
                    }
                    console.log(values);

                    try {
                        // Gửi yêu cầu đăng ký
                        const response = await axios.post(
                            "http://localhost:8080/api/account/signup",{
                                ...values,
                                genderCustomer: +values.genderCustomer
                            }

                        );
                        // Kiểm tra response
                        if (response.username != null) {
                            setUserName(response.data);
                        }
                        resetForm();
                        // Đăng ký thành công, chuyển hướng hoặc thực hiện hành động khác
                        // navigate(`/checkCode/${userName}`);
                        navigate(`/checkCode/${userName}`);
                        // <CheckCode propData = {userName}/>;
                    } catch (e) {
                        // Xử lý lỗi đăng ký
                        // toast.error(e.response.data);
                        await Swal.fire({
                            title: e.response.data,
                            text: 'Email đăng ký đã tồn tại !',
                            icon: "warning",
                            timer: 2000
                        })
                    } finally {
                        setSubmitting(false);
                        // console.log(userInfo);
                    }

                }}
            >
                <div>
                    <h1 className="w3ls" style={{color: "rgb(6, 133, 170)"}}>
                        ĐĂNG KÝ
                    </h1>
                    <div className="content-w3ls">
                        <div className="content-agile1">
                            <h2 className="agileits1" style={{padding: "25% 0"}}>
                                VietNamAir
                            </h2>
                        </div>
                        <div className="content-agile2 bg-white">
                            <Form>
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
                                        <Field
                                            type="email"
                                            id="email"
                                            name="emailCustomer"
                                            placeholder="mail@gmail.com"
                                            required=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="emailCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            type="password"
                                            className="lock"
                                            name="password"
                                            placeholder="Nhập"
                                            id="password1"
                                            required=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="password"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            type="password"
                                            className="lock"
                                            name="passwordAgain"
                                            placeholder="Nhập"
                                            id="password2"
                                            required=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="passwordAgain"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            type="text"
                                            id="firstname"
                                            name="telCustomer"
                                            placeholder="Nhập"
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="telCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
                                        {/*<ErrorMessage component="span" name="" className="err-mes"/>*/}
                                        {/*<p className="err-mes">Chưa nhập số điện thoại</p>*/}
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
                                        <Field
                                            type="text"
                                            id="firstname"
                                            name="nameCustomer"
                                            placeholder="Nhập"
                                            title="Vui lòng nhập họ và tên theo CCCD"
                                            required=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="nameCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
                                        {/*<ErrorMessage component="span" name="" className="err-mes"/>*/}
                                        {/*<p className="err-mes">Chưa nhập họ và tên</p>*/}
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
                                        <Field
                                            type="date"
                                            id="email"
                                            name="dateCustomer"
                                            placeholder=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="dateCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
                                        {/*<ErrorMessage component="span" name="Customer" className="err-mes"/>*/}
                                        {/*<p className="err-mes">Chưa chọn ngày sinh</p>*/}
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
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="email"
                                            name="genderCustomer"
                                            // required=""
                                        >
                                            <option value={2}>-- Chọn --</option>
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                            {/*<option value="3">Khác</option>*/}
                                        </Field>
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="genderCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            type="text"
                                            id="email"
                                            name="idCardCustomer"
                                            placeholder="Nhập"
                                            // title="Please enter a valid email"
                                            // required=""
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="idCardCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="email"
                                            name="nationalityCustomer"
                                            // required=""
                                        >
                                            <option value="Việt Nam">Việt Nam</option>
                                            <option value="USA">USA</option>
                                            <option value="Japan">Japan</option>
                                        </Field>
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="nationalityCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
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
                                        <Field
                                            type="text"
                                            id="email"
                                            name="addressCustomer"
                                            placeholder="Nhập"
                                        />
                                        <div className="row">
                                            <div className="col-1"/>
                                            <div className="col-10">
                                                <ErrorMessage component="span" name="addressCustomer"
                                                              className="err-mes"/>
                                            </div>
                                            <div className="col-1"/>
                                        </div>
                                        {/*<ErrorMessage component="span" name="" className="err-mes"/>*/}
                                    </div>
                                </div>
                                <div className="text-center" style={{marginBottom: "10px"}}>
                                    <button type="submit" className="btn"
                                            style={{
                                                marginTop: "3%",
                                                // paddingLeft: "15%",
                                                backgroundColor: "rgb(6, 133, 170)",
                                                color: "white",
                                                // fontWeight: "bold",
                                                fontSize: "18px"
                                            }}>
                                        Đăng Ký
                                    </button>
                                </div>
                            </Form>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary" style={{margin: "1%"}}>
                                    <i className="fab fa-facebook"/>
                                </button>
                                <button type="button" className="btn btn-danger">
                                    <i className="fab fa-google"/>
                                </button>
                            </div>
                        </div>
                        <div className="clear"/>
                    </div>
                </div>
            </Formik>

        </>
    )
}
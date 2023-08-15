import React from "react";
import "bootstrap/dist/css/bootstrap.css"

export function CheckCode() {
    return (
        <>
            <div className="row mt-lg-5">
                <div className="col-md-4"/>
                <div className="col-md-4 text-center">
                    <div className="row align-items-center mt-lg-5 bg-body" style={{borderRadius: "10px"}}>
                        <div className="header-text mb-4 mt-lg-3">
                            <h2>Xác nhận đăng ký</h2>
                        </div>
                        <p>Chúng tôi đã gửi mã xác nhận đến Email đăng ký của bạn, nhập mã xác nhận để kích hoạt tài
                            khoản!!!</p>
                        {/*<Formik*/}
                        {/*    initialValues={{*/}
                        {/*        verificationCode: ""*/}
                        {/*    }}*/}
                        {/*    validationSchema={Yup.object({*/}
                        {/*        verificationCode: Yup.number()*/}
                        {/*            .required('Không được để trống'),*/}


                        {/*    })}*/}
                        {/*    onSubmit={async (values, { setSubmitting }) => {*/}
                        {/*        try {*/}
                        {/*            values = {*/}
                        {/*                ...values,*/}
                        {/*                id: data*/}
                        {/*            }*/}
                        {/*            const response = await axios.post('http://localhost:8080/api/user/checkCode', values)*/}
                        {/*            console.log(response)*/}
                        {/*            navigate("/login/newPassword", { state: { data: response.data } })*/}
                        {/*        } catch (error) {*/}
                        {/*            console.log(error)*/}
                        {/*            toast.error(error.response.data.error);*/}
                        {/*        } finally {*/}
                        {/*            setSubmitting(false);*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*>*/}
                        <form action="">
                            <div className="row mt-lg-3">
                                <div className="col-3"/>
                                <div className="col-6">
                                    <fieldset className="form-group position-relative has-icon-left">
                                        <input
                                            name="verificationCode"
                                            type="text"
                                            id="txtUserName"
                                            className="form-control text-center"
                                            placeholder="Mã"
                                        />
                                        {/*<p name="verificationCode" component="span" className="error-r" />*/}

                                    </fieldset>
                                </div>
                                <div className="col-3"/>
                            </div>
                            <div className="text-center" style={{marginBottom: "10px"}}>
                                <button type="submit" className="btn"
                                        style={{
                                            margin: "5%",
                                            // paddingLeft: "15%",
                                            backgroundColor: "rgb(6, 133, 170)",
                                            color: "white",
                                            // fontWeight: "bold",
                                            fontSize: "18px"
                                        }}>
                                    Xác Nhận
                                </button>
                            </div>
                        </form>
                        {/*</Formik>*/}

                    </div>
                </div>
                <div className="col-md-4"/>
            </div>
        </>
    )
}
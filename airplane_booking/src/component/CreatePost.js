import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import * as postService from "../services/PostServices";
import "../css/post.css";

export function CreatePost() {
    const [employees, setEmployee] = useState([]);
    const [image, setImage] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        return () => image && URL.revokeObjectURL(image.preview);
    }, [image]);

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setImage(file);
        }
    };

    const fetchAllEmployee = async () => {
        const getAllEmployee = await postService.getAllEmployee();
        setEmployee(getAllEmployee);
    };

    useEffect(() => {
        fetchAllEmployee();
    }, []);

    return (
        <Formik
            initialValues={{
                title: "",
                employee: 1,
                datePost: new Date(),
                image: "",
                content: ""
            }}
            onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("image", image);

                try {
                    const response = await fetch("http://localhost:8080/api/post", {
                        method: "POST",
                        body: formData
                    });

                    if (response.ok) {
                        const data = await response.json();

                        const value = {
                            ...values,
                            employee: employees.find((e) => e.idEmployee == values.employee),
                            image: data.filePath
                        };

                        await postService.createPost(value);

                        navigate("/");
                    } else {
                        console.error("Upload failed.");
                    }
                } catch (error) {
                    console.error("Error uploading image:", error);
                }
            }}
        >
            <div className="container " style={{ marginBottom: "5rem" }}>
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6" style={{ borderRadius: "4px" }}>
                        <div
                            className="card"
                            style={{
                                marginTop: "4rem",
                                marginBottom: "4rem",
                                paddingLeft: "0px",
                                paddingTop: "0px",
                                paddingRight: "0px"
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "4px",
                                    textAlign: "center",
                                    backgroundColor: "#4FA3E3",
                                    height: "57px",
                                    color: "white"
                                }}
                            >
                                <h2 style={{ marginTop: "9px" }}>THÊM MỚI THÔNG TIN</h2>
                            </div>
                            <Form style={{ marginLeft: "40px", marginRight: "40px" }}>
                                <div className="mt-4 inputs">
                  <span>
                    Tiêu đề <span style={{ color: "red" }}>*</span>
                  </span>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                    />
                                </div>
                                <div className="mt-2 inputs">
                  <span>
                    Nhân viên <span style={{ color: "red" }}>*</span>
                  </span>
                                    <Field
                                        type="number"
                                        value="1"
                                        className="form-control"
                                        id="employee"
                                        name="employee"
                                        readOnly
                                    />
                                </div>
                                <div className="mt-2 inputs">
                  <span>
                    Ngày tạo <span style={{ color: "red" }}>*</span>
                  </span>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="datePost"
                                    />
                                </div>
                                <div className="mt-2 inputs">
                  <span>
                    Upload hình ảnh <span style={{ color: "red" }}>*</span>
                  </span>
                                    <div>
                                        <Field
                                            type="file"
                                            onChange={(e) => handlePreviewImage(e)}
                                            name="image"
                                        />
                                    </div>
                                    {image && <img src={image.preview} alt="" width="80%" />}
                                </div>
                                <div className="mt-4 inputs">
                  <span>
                    Nội dung <span style={{ color: "red" }}>*</span>
                  </span>
                                    <Field
                                        as="textarea"
                                        type="text"
                                        className="form-control"
                                        id="content"
                                        name="content"
                                    />
                                </div>
                                <div className="mt-4 btn-group">
                                    <div className="text-center m-auto">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            style={{ width: "100px" }}
                                        >
                                            <b className="text-center">Quay lại</b>
                                        </button>
                                    </div>
                                    <div className="text-center m-auto">
                                        <button
                                            type="submit"
                                            className="btn btn-warning "
                                            data-mdb-toggle="modal"
                                            data-mdb-target="#exampleModalToggle1"
                                        >
                                            <b className="text-center">Thêm mới</b>
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    );
}
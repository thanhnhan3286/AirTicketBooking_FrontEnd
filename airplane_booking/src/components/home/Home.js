import { React, useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { getAllDeparture } from '../../services/DepartureServices';
import { getAllDestination } from '../../services/DestinationServices';
import { getAllTypeSeat } from '../../services/TypeSeatServices';
import '../../css/home/Home.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'bootstrap';

export default function Home() {
    const [departures, setDepartures] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [typeSeats, setTypeSeats] = useState([]);
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [dateDeparture, setDateDeparture] = useState("");
    const [dateDestination, setDateDestination] = useState("");
    const [ticketType, setTicketType] = useState(0);
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const navigate = useNavigate();
    

    const handleSearchTicket = () => {
        navigate(`/list/${departure}, ${destination}, ${dateDeparture}, ${dateDestination}, ${ticketType}, ${adult}, ${children}`);
    }

    const getAllDepartureApi = async () => {
        const data = await getAllDeparture();
        setDepartures(data);
    }

    const getAllDestinationApi = async () => {
        const data = await getAllDestination();
        setDestinations(data);
    }

    const getAllTypeSeatApi = async () => {
        const data = await getAllTypeSeat();
        setTypeSeats(data);
    }

    useEffect(() => {
        getAllDepartureApi(); getAllDestinationApi(); getAllTypeSeatApi()
    }, []);
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.vietnamairlines.com/~/media/B316FB8463454B8780F71E2E32C7359E.ashx" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.vietnamairlines.com/~/media/73798957242E4F2AA34B73B9DDB94896.ashx" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.vietnamairlines.com/~/media/91BAD72CDD9647179F9922F154E48C5D.ashx" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row banner">
                <div className="col-2" />
                <div className="col-2">
                    <img className="rounded-circle" src="https://elmistibota.com/wp-content/uploads/2020/11/lam-passport-online-top.jpg" />
                    <h6>Quy định chung</h6>
                </div>
                <div className="col-2">
                    <img className="rounded-circle" src="https://i.pinimg.com/736x/2f/41/50/2f4150bb3504111adb674612ac8b1b89.jpg" />
                    <h6>Ưu đãi cực đã</h6>
                </div>
                <div className="col-2">
                    <img className="rounded-circle" src="https://i.pinimg.com/564x/d6/19/08/d61908e1da389de3fc4d9a87ec3f8787.jpg" />
                    <h6>Tin tức phổ biến</h6>
                </div>
                <div className="col-2">
                    <img className="rounded-circle" src="https://i.pinimg.com/564x/8e/59/5f/8e595f4bcfe87564134654f680be45e8.jpg" />
                    <h6>Mua thêm hành lý</h6>
                </div>
                <div className="col-2" />
            </div>
            <div className="row ">
                <div className="col-md-6 col-md-offset-1">
                    <h2 className="find">Tìm kiếm các chuyến bay</h2>
                    <div className="booking-form">
                        <Formik initialValues={{
                            flightType: '',
                            departure: '',
                            destination: '',
                            dateDeparture: '',
                            dateDestination: '',
                            adult: '',
                            children: '',
                            typeSeat: ''
                        }}
                            validationSchema={yup.object({
                                flightType: yup.string().required("Không được để trống trường này")

                            })}
                            onSubmit={ (values) => {
                                console.log(values.departure)
                                setDeparture(values.departure)
                                setDestination(values.destination)
                                setDateDeparture(values.dateDeparture)
                                setDateDestination(values.dateDestination)
                                setTicketType(values.flightType)
                                setAdult(values.adult)
                                setChildren(values.children)
                                // handleSearchTicket();
                            }}>
                            <Form>
                                <div className="form-group">
                                    <div className="form-checkbox">
                                        <label htmlFor="roundtrip">
                                            <Field type="radio" value='1' id="roundtrip" name="flightType" />
                                            <span />Khứ hồi
                                        </label>
                                        <label htmlFor="one-way">
                                            <Field type="radio" value='0' id="one-way" name="flightType" />
                                            <span />Một chiều
                                        </label>
                                        <ErrorMessage name='flightType' component='div' className='error' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Điểm khởi hành</span>
                                            <Field as='select' className="form-control"
                                                name='departure'>
                                                <option value=''>Sân bay, Thành phố</option>
                                                {
                                                    departures.map((dp) => {
                                                        return (
                                                            <option key={dp.idDeparture} value={dp.nameDeparture}>
                                                                {dp.nameDeparture}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Điểm đến</span>
                                            <Field as='select' className="form-control"
                                                name='destination'>
                                                <option>Sân bay, Thành phố</option>
                                                {
                                                    destinations.map((ds) => {
                                                        return (
                                                            <option key={ds.idDestination} value={ds.nameDestination}>
                                                                {ds.nameDestination}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Ngày đi</span>
                                            <Field className="form-control" type="date" name='dateDeparture' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Ngày về</span>
                                            <Field className="form-control" type="date" name='dateDestination' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="form-label">Người lớn</span>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="form-label">Trẻ em (0-12 tuổi)</span>
                                            <select className="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="form-label">Loại vé</span>
                                            <Field as='select' className='form-control' name='typeSeat'>
                                                <option value=''>Chọn</option>
                                                {
                                                    typeSeats.map((ts) => {
                                                        return (
                                                            <option key={ts.idTypeSeat} value={ts.nameTypeSeat}>
                                                                {ts.nameTypeSeat}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </Field>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <button type='submit' className="submit-btn">Tìm vé</button>
                                </div>
                            </Form>
                        </Formik>
                        {/* <form>
                            <div className="form-group">
                                <div className="form-checkbox">
                                    <label htmlFor="roundtrip">
                                        <input type="radio" id="roundtrip" name="flight-type" />
                                        <span />Khứ hồi
                                    </label>
                                    <label htmlFor="one-way">
                                        <input type="radio" id="one-way" name="flight-type" />
                                        <span />Một chiều
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Điểm khởi hành</span>
                                        <input className="form-control" type="text" placeholder="Sân bay, Thành phố" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Điểm đến</span>
                                        <input className="form-control" type="text" placeholder="Sân bay, Thành phố" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Ngày đi</span>
                                        <input className="form-control" type="date" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Ngày về</span>
                                        <input className="form-control" type="date" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <span className="form-label">Người lớn</span>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span className="select-arrow" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <span className="form-label">Trẻ em (0-12 tuổi)</span>
                                        <select className="form-control">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <span className="select-arrow" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <span className="form-label">Loại vé</span>
                                        <select className="form-control">
                                            <option>Chọn</option>
                                            <option>Phổ thông</option>
                                            <option>Thương gia</option>
                                        </select>
                                        <span className="select-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-btn">
                                <button className="submit-btn">Tìm vé</button>
                            </div>
                        </form> */}
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-1 bonus">
                    <h2 className="title">Khám phá những điểm đến thú vị</h2>
                    <div className="row">
                        <div className="col-6 row-cols-md-1 g-4 first-card">
                            <div className="col">
                                <div className="card text-white travel">
                                    <img src="https://dulichchat.com/wp-content/uploads/2021/01/du-lich-phu-quoc-dulichchat-25-1.jpg" className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title">Phú Quốc - Hòn ngọc quý</h4>
                                        <button>Khám phá</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col img-down">
                                <div className="card text-white travel">
                                    <img src="https://media.travel.com.vn/destination/tf_220726033156_024216.jpg" className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title">Đà Lạt - Mộng mơ</h4>
                                        <button>Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row-cols-md-1 g-4 second-card">
                            <div className="col">
                                <div className="card text-white travel">
                                    <img src="https://www.quangbinhtravel.vn/wp-content/uploads/2013/05/ca-chep-rong.jpg" className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title">Đà Nẵng - Năng động</h4>
                                        <button>Khám phá</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col img-down">
                                <div className="card text-white travel">
                                    <img src="https://static-images.vnncdn.net/files/publish/2022/7/27/ha-long-bay-1-852.jpg" className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title">Hạ Long - Hùng vĩ</h4>
                                        <button>Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

import style from "./LatestOfferCard.module.css"

import fuel from "../../assets/images/fuel.png"
import gearbox from "../../assets/images/gearbox.png"
import speedometer from "../../assets/images/speedometer.png"
import location from "../../assets/images/location.png"
import { Col, Row } from "react-bootstrap"

const LatestOfferCard = (props) => {
    return (
        <Col xs={12} md={6} lg={3} className='mb-4'>
            <div className={style['card-wrapper']}>
                <div className={style['img-wrapper']} >
                    <img src={props.src} alt="car-img" />
                </div>

                <div className={style['card-body']}>

                    <div className={style.year}>
                        <span className="">{props.year}</span>
                    </div>

                    <h4 className={style.name}>
                        <Link to="/catalog" className="">{props.name}</Link>
                    </h4>

                    <div className={style.price}>${props.price}</div>

                    <div className={style.location}>
                        <img src={location} alt='location' className={style['location-icon']} />
                        <p>{props.town}</p>
                    </div>

                </div>

                <div className={style['card-footer']}>

                    <div className={style['row-wrapper']}>

                        {/* <div className={style.row}> */}
                        <Row className=" align-items-center mx-0 justify-content-around ">

                            {/* <div className={style['dist-wrapper']}> */}
                            <Col xs={3} md={3} lg={4} className={`justify-content-center align-items-center py-2 px-1 ${style['dist-wrapper']} `}>
                                <Row className='align-items-center justify-content-center '><img src={speedometer} alt='speedometer' className={style['dist-img']} /></Row>
                                <Row className='align-items-center justify-content-center'><span className={style.dist}>{props.dist} km</span></Row>
                            </Col>
                            {/* </div> */}

                            {/* <div className={style['trans-wrapper']}> */}
                            <Col xs={3} md={3} lg={4} className={`justify-content-center  align-items-center  py-2 px-1 ${style['trans-wrapper']} `}>
                                <Row className='align-items-center justify-content-center'> <img src={gearbox} alt='gearbox' className={style['trans-img']} /></Row>
                                <Row className='align-items-center justify-content-center'>   <span className={style.trans}>{props.trans}</span></Row>
                            </Col>
                            {/* </div> */}

                            {/* <div className={style['fuel-wrapper']}> */}
                            <Col xs={3} md={3} lg={4} className={` justify-content-center align-items-center  py-2 px-1 ${style['fuel-wrapper']}`}>
                                <Row className='align-items-center justify-content-center'>  <img src={fuel} alt='fuelcan' className={style['fuel-img']} /></Row>
                                <Row className='align-items-center justify-content-center'> <span className={style.fuel}>{props.fuel}</span></Row>
                            </Col>
                            {/* </div> */}

                        </Row>
                        {/* </div> */}

                    </div>

                </div>
            </div >
        </Col>



    )
}

export default LatestOfferCard
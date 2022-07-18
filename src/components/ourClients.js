import React from 'react';
import { Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../modules/home/home.module.scss';
import '../modules/home/home.scss';

function OurClients() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Row className={styles.clientInnerContainer + " " + "ourClients"} id="ourClients">
            <img className={styles.bgImg} src={require('../assets/images/ourClients.png')} alt="our_Client" />
            <div className={styles.clientTitle}>OUR CLIENT</div>
            <div className={styles.carouselContainer}>
                <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >   
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/reliance.png')} alt="reliance" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/bajajInsurance.png')} alt="bajajInsurance" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/acko.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/goDigit.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/universal.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/shriram.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/royalSundaram.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/icici.png')} alt="goDigit" />
                    </div>
                    <div className={styles.carouselImgStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/magmaHDI.png')} alt="goDigit" />
                    </div>
                </Carousel>
            </div>
        </Row>
    );
}

export default OurClients;
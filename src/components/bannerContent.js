import React from 'react';
import { Button, Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function BannerContent() {
    return (
        <Row className={styles.bannerInnerContainer}>
            <img className={styles.bannerImg} src={require('../assets/images/banner.png')} alt="banner" />
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>We Investigate Insurance Claims</h1>
                <p className={styles.bannerPara}>Ensuring Time-bound Quality</p>
                <Button className={styles.bannerBtn}><a href="#contactUs">GET STARTED</a></Button>
            </div>
        </Row>
    );
}

export default BannerContent;
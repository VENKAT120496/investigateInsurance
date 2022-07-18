import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function AboutUs() {
    return (
        <Row className={styles.aboutUsinnerContainer}>
            <img className={styles.bgImg} src={require('../assets/images/aboutUs.png')} alt="about_Us" />
            <span className={styles.aboutUsTitle}>ABOUT US</span>
            <p className={styles.aboutUsContent}>Our valued professionals have 2 decades of extensive knowledge and industry expertise in monitoring & investigation of
                Life Insurance, General Insurance and Auto Insurance. At Ensure, we have an eye for detail when it comes to investigation
                procedure so that our clients can deal with claims without compromising on quality.</p>
        </Row>
    );
}

export default AboutUs;
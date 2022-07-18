import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function Services() {
    return (
        <Row className={styles.servicesInnerContainer} id="ourServices">
            <img className={styles.bgImg} src={require('../assets/images/ourServices.png')} alt="service" />
            <div className={styles.servicesTitle}>OUR SERVICES</div>
            <div className={styles.listContainer}>
                <Row className={styles.lifeInsurance}>
                    <Col className={styles.servicesContent}>
                        <p className={styles.servicesSubTitle}>Life Insurance Investigation</p>
                        <p className={styles.servicePara}>RCU services to help organizations discover, monitor and manage potential risks so they can have a more beneficial impact.</p>
                    </Col>
                    <Col className={styles.servicesImage}>
                        <img className={styles.investigateImg} src={require('../assets/images/lifeInsurance.png')} alt='life_Insurance' />
                    </Col>
                </Row>
                <Row className={styles.generalInsurance}>
                    <Col className={styles.servicesContent}>
                        <p className={styles.servicesSubTitle}>General Insurance Investigation</p>
                        <p className={styles.servicePara}>Investigation services for Personal Damage, Theft, MACT, PA & Health and Non-motor claims.</p>
                    </Col>
                    <Col className={styles.servicesImage}>
                        <img className={styles.investigateImg} src={require('../assets/images/generalInsurance.png')} alt='general_Insurance' />
                    </Col>
                </Row>
                <Row className={styles.backgroundVerify}>
                    <Col className={styles.servicesContent}>
                        <p className={styles.servicesSubTitle}>Background Verification</p>
                        <p className={styles.servicePara}>Unbiased and reliable Background Verification services to authenticate degree certifications and credentials, credit reports, financial and criminal information.</p>
                    </Col>
                    <Col className={styles.servicesImage}>
                        <img className={styles.bgvImg} src={require('../assets/images/bgv.png')} alt='bgv' />
                    </Col>
                </Row>
            </div>
        </Row>
    );
}

export default Services;
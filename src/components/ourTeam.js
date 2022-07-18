import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function OurTeam() {
    return (
        <Row className={styles.teamInnerContainer}>
            <img className={styles.bgImg} src={require('../assets/images/ourTeam.png')} alt="our_Team" />
            <div className={styles.teamTitle}>OUR TEAM</div>
            <Row className={styles.directorOneInfoContainer}>
                <Col className={styles.directorImgName}>
                    <img className={styles.directorImg} src={require('../assets/images/directorOne.png')} alt="director_one" />
                    <div className={styles.nameInfo}><span className={styles.dirName}>Vinod Kumar Nair  -</span><span className={styles.role}>&nbsp;Director</span></div>
                </Col>
                <Col className={styles.directorMainInfo}>
                    <p className={styles.dirInfo}>18 years in general insurance exposure encompassing varied aspects including motor claims,	motor underwriting, market intelligence/information collation for underwriting, business development of motor  insurances and management of network for motor claims.</p>
                    <p className={styles.dirInfo}>Expertise in managing large team of in house and external assessor settling more than 10000 claims in a month. Also managing red carpet clients and handled in house investigation team for theft recoveries to the tune of 22 crores per year.</p>
                    <p className={styles.dirInfo}>11 years in Automobile Industry experience in providing, Customer Service, Promotional Activities, Network expansion, Product Launch, Involved in development of software for enhancing productivity of team, reducing manual involvement and minimizing errors in claim process.</p>
                    <p className={styles.dirInfo}>Worked as Management representative in implementation of ISO 9001:2015 for process management and ISO 31000:2018 for on Enterprise Risk Management.</p>
                </Col>
            </Row>
            <Row className={styles.directorTwoInfoContainer}>
                <Col className={styles.directorImgName}>
                    <img className={styles.directorImg} src={require('../assets/images/directorTwo.png')} alt="director_two" />
                    <div className={styles.nameInfo}><span className={styles.dirName}>Sujaini Manohar  -</span><span className={styles.role}>&nbsp;Director</span></div>
                </Col>
                <Col className={styles.directorMainInfo}>
                    <p className={styles.dirInfo}>18 years in general insurance exposure encompassing varied aspects including motor claims,	motor underwriting, market intelligence/information collation for underwriting, business development of motor  insurances and management of network for motor claims.</p>
                    <p className={styles.dirInfo}>Expertise in managing large team of in house and external assessor settling more than 10000 claims in a month. Also managing red carpet clients and handled in house investigation team for theft recoveries to the tune of 22 crores per year.</p>
                    <p className={styles.dirInfo}>11 years in Automobile Industry experience in providing, Customer Service, Promotional Activities, Network expansion, Product Launch, Involved in development of software for enhancing productivity of team, reducing manual involvement and minimizing errors in claim process.</p>
                    <p className={styles.dirInfo}>Worked as Management representative in implementation of ISO 9001:2015 for process management and ISO 31000:2018 for on Enterprise Risk Management.</p>
                </Col>
            </Row>
        </Row>
    );
}

export default OurTeam;
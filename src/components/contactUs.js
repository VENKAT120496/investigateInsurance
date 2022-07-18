import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function ContactUs() {
    return (
        <Row className={styles.contactUsInnerContainer} id="contactUs">
            <img className={styles.bgImg} src={require('../assets/images/contactUs.png')} alt="contact_Us" />
            <div className={styles.contactUsTitle}>CONTACT US</div>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoLeft}>
                    <div className={styles.contactItem}><img src={require('../assets/images/contact.png')} alt="phone" /><span className={styles.phoneNumEmailLoc}>+91 44 35656676</span></div>
                    <div className={styles.contactItem}><img src={require('../assets/images/email.png')} alt="phone" /><span className={styles.phoneNumEmailLoc}>info@ensureinvestigator.in</span></div>
                </div>
                <div className={styles.contactInfoRight}>
                    <div className={styles.contactItem}><img src={require('../assets/images/location.png')} alt="phone" /><span className={styles.phoneNumEmailLoc}>
                        <span className={styles.locHeading}>Corporate Office:</span><br />
                        Door No. 341/250, Second Floor, Regency House, Anna Salai, Teynampet, Chennai - 600 006</span>
                    </div>
                    <div className={styles.contactItem}><span className={styles.phoneNumEmailLoc2}>
                        <span className={styles.locHeading}>Reg Office:</span><br />
                        Old No 45 , New No 103, Eldams Road, Teynampet, Chennai - 600018</span>
                    </div>
                </div>
            </div>
        </Row>
    );
}

export default ContactUs;
import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function Footer() {
    return (
        <Row className={styles.footerInnerContainer}>
            <div className={styles.footerIcons}>
                <img src={require('../assets/images/footerIcons.png')} alt="footer_Icons" />
            </div>
            <div className={styles.footerCopyRights}>
                <p className={styles.copyRight}>© Ensure Investigation Sevices Pvt. Ltd. 2022</p>
            </div>
        </Row>
    );
}

export default Footer;
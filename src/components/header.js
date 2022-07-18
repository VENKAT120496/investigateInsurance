import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../modules/home/home.module.scss';

function Header() {
    return (
        <Row className={styles.headerContainer}>
            <div className={styles.headerInnerContainer}>
                <div className={styles.headerLogo}>
                    <img className={styles.logo} src={require('../assets/images/logo.png')} alt="company_logo" />
                </div>
                <div className={styles.headerMenu}>
                    <span className={styles.menuList}><a href="#ourServices">Our Services</a></span>
                    <span className={styles.menuList}><a href="#ourClients">Our Clients</a></span>
                    <span className={styles.menuList}><a href="#contactUs">Contact Us</a></span>
                </div>
            </div>
        </Row>
    );
}

export default Header;
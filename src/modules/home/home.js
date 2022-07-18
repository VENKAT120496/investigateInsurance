import React from 'react';
import { Container } from 'react-bootstrap';
import AboutUs from '../../components/aboutUs';
import BannerContent from '../../components/bannerContent';
import ContactUs from '../../components/contactUs';
import Footer from '../../components/footer';
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import OurClients from '../../components/ourClients';
import OurTeam from '../../components/ourTeam';
import Services from '../../components/services';

function Home() {
    return (
        <div>
            <Header />
            <Container>
                <BannerContent />
                <AboutUs />
                <Services />
                <OurTeam />
                <OurClients />
                <Gallery />
                <ContactUs />
                <Footer />
            </Container>
        </div>
    );
}

export default Home;
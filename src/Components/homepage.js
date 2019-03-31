import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselPage from "../Components/carousel"


const Home = () => (
    <div>
        <div class="offerBar container">
            <span class="thin">NEW VIP OFFER</span>
            <span class="thick">50% off Site-Wide</span>
        </div>
        <CarouselPage />
    </div>

)

export default Home;

import React from 'react'
import Cards from '../components/Cards';
import GridSection from '../components/GridSection';
import Container from '../components/Container';
import Fixtures from '../components/Fixtures'
import Discover from '../components/Discover';
import Analytics from '../components/Analytics';
import BookDemo from '../components/BookDemo'
import Banner from '../components/Banner';
import ProductCard from '../components/Products'

function LandingPage() {
    return (
        <div>
            <Banner/>
            <Cards />
            <GridSection />
            <Container />
            <Analytics/>
            <Fixtures />
            <ProductCard/>
            <BookDemo/>
            <Discover />
        </div>
    )
}

export default LandingPage

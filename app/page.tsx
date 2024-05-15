'use client'

import LoadingScreen from "@/components/loadingScreen";
import styles from "./page.module.css";
import Header from "@/components/header";
import About from "@/components/about";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import Recommendations from "@/components/recommendations";
import ProductionJourney from "@/components/productionJourney";
import CircularityFacts from "@/components/circularityFacts";
import CircularityPossibilities from "@/components/circularityPossibilities";
import SustainabilityOverview from "@/components/sustainabilityOverview";
import Coupon from "@/components/coupon";
import Product from "@/components/product";
import Welcome from "@/components/welcome";
import { Suspense } from 'react'

export default function Home() {

    // const searchParams = useSearchParams();

    // const name = searchParams.get('name');
    // const email = searchParams.get('email');

    return (
        <main className={styles.main}>
        <Header />
        <LoadingScreen />
            <Suspense fallback={<h1>loading</h1>}>

                <Product/>
                <Welcome />
                <Coupon />
                <SustainabilityOverview />
                <CircularityPossibilities />
                <CircularityFacts />
                <ProductionJourney />
                <Recommendations />
                <Testimonials />
                <About />
            </Suspense>
        <Footer />
        </main>
    );
}

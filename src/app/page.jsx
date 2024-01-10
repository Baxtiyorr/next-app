import Navbar from "@/components/Navbar/Navbar";
import './home.css'
import Hero from "@/components/Hero/Hero";
import Liquid from "@/components/Liquid/Liquid";
import Barman from "@/components/BarMan/Barman";
import OpeningHours from "@/components/Opening-hours/OpeningHours";
import Coctails from "@/components/Cocotails/Coctails";
import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer/Footer";


export default function Home () {
    return(
        <>
        <header>
            <Navbar/>
            <Hero/>
        </header>
        <main>
            <Liquid/>
            <Barman/>
            <OpeningHours/>
            <Booking/>
        </main>
        <Footer/>
        </>
    )
}
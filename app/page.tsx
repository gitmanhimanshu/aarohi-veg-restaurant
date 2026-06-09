import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { WhyLoveUs } from '@/components/sections/WhyLoveUs';
import { PopularDishes } from '@/components/sections/PopularDishes';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { ReviewInsights } from '@/components/sections/ReviewInsights';
import { Location } from '@/components/sections/Location';
import { Reservation } from '@/components/sections/Reservation';
import { OrderOnline } from '@/components/sections/OrderOnline';
import { ReviewCTA } from '@/components/sections/ReviewCTA';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingActions } from '@/components/sections/FloatingActions';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyLoveUs />
        <PopularDishes />
        <Menu />
        <Gallery />
        <Reviews />
        <ReviewInsights />
        <OrderOnline />
        <Location />
        <Reservation />
        <ReviewCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

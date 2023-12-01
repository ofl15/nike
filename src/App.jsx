import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Nav from "./Components/Nav"
import CustomerReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className=''>
        <Hero/>
        <section className='padding'>
          <PopularProducts/>
        </section>
        <section className='padding'>
          <SuperQuality/>
        </section>
        <section className='padding-x py-10'>
          <Services/>
        </section>
        <section className='padding'>
          <SpecialOffer/>
        </section>
        <section className=' '>
          <CustomerReviews/>
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe/>
        </section>
        <section style={{backgroundColor:"black"}} className='padding-x padding-t pb-8'>
          <Footer/>
        </section>
      </section>
    </main>
  )
}

export default App
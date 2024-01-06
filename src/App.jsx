import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Learn from "./components/Learn/Learn"
import Navbar from "./components/Navbar/Navbar"
import Otherlogo from "./components/Otherlogo/Otherlogo"
import Service from "./components/Service/Service"
import Slider from "./components/Slider/Slider"
import Supplier from "./components/Supplier/Supplier"

function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Slider></Slider>
      <Service></Service>
      <Learn></Learn>
      <Otherlogo></Otherlogo>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App

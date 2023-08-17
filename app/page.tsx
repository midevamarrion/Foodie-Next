import Image from 'next/image'
import Footer from './Footer/footer'
import "tailwindcss/tailwind.css";
import NavBar from './NavBar';
import Home from './Home/home';
import Service from './Service/service'
import Offer from './Offer/offer'
import Menu from './Menu/menu';

export default function Page() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <Offer/>
      <Menu/>
      <Footer/>
    </div>
  )
}

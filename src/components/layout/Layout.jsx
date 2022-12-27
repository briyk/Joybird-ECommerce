import Routers from "../../routers/Routers"
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <>
               <Header/>
               <div>
                    <Routers/>
               </div>
               <Footer/>
    </>
  )
}

export default Layout
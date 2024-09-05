import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ Component }) => {

  return (
    <div>
      <Navbar />
      {<Component />}
      <Footer />
    </div>
  )
}


export default Layout;


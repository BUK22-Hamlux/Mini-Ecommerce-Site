import Navbar from "./components/layout/Navbar";
import Header from "./sections/Header";
import ProjectGrid from "./sections/ProductGrid";
import SocialLinks from "./sections/SocialLinks";
import Footer from "./components/layout/Footer";

function App(){
    return(
        <>
            <Navbar />
            <Header />
            <ProjectGrid />
            <SocialLinks />
            <Footer />
        </>
        
    )
}
export default App;
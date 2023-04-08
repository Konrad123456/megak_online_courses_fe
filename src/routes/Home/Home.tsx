import {HomeContainer} from "./Home.styles";
import {WhyWe} from "./components/WhyWe";
import {Footer} from "./components/Footer";

export const Home = () => {
    return <HomeContainer>
        <WhyWe />
        <Footer />
    </HomeContainer>
}
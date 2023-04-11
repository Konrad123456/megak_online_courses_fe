import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../features/auth/authSlice";
import {WhyWeContainer} from "./WhyWe.styles";
import Bulb from '../../../assets/imgs/bulb.webp';

export const WhyWe = () => {
    const user = useSelector(selectCurrentUser);

    return <WhyWeContainer>
        <div>
            <h2>Why Megak Coursera</h2>
            <p>
                If you are looking for possibilities to learn and increase you knowledge about science in IT, Math, Physic, Chemistry etc. You are in right place.
                We are new fast growing platform, mainly focus of Science area. Like a student you have unlimited access to all our courses. You have to just
                assign to course and start your journey.
            </p>
            <p>
                But if your goal is share your knowledge, you may be a instructor. We will be glad to welcome in our team. If this is your direction, create
                account and write to us your experience and tell us which area may you develop. After quick process of review, we will decided to admit you instructor permission.
            </p>
            {!user && <NavLink to={'/register'}>Register</NavLink>}
        </div>
        <img src={Bulb} alt="bulb" />
    </WhyWeContainer>
}
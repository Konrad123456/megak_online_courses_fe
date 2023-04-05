import Learning from '../../../assets/imgs/learning.jpg';
import {AsideImg, FormTitle, LogInAsideContainer} from "../LogIn.styles";
import BackGround from '../../../assets/imgs/background.jpg';

export const LogInAside = () => {
    return <LogInAsideContainer style={{backgroundImage: `url(${BackGround})`}}>
        <FormTitle>Start your adventure!</FormTitle>
        <AsideImg src={Learning} alt="learning"/>
        <p>Take your time, spend it smartly! Do something for you!</p>
    </LogInAsideContainer>
}
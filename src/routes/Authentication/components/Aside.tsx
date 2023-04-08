import Learning from '../../../assets/imgs/learning.jpg';
import BackGround from '../../../assets/imgs/background.jpg';
import {AsideImg, LogInAsideContainer} from "./Aside.styles";
import {Title} from "./Title";

export const Aside = () => {
    return <LogInAsideContainer style={{backgroundImage: `url(${BackGround})`}}>
        <Title title={'Start your adventure!'}/>
        <AsideImg src={Learning} alt="learning"/>
        <p>Take your time, spend it smartly! Do something for you!</p>
    </LogInAsideContainer>
}
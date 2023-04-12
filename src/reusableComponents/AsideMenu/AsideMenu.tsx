import React, {useState} from "react";
import {AsideMenuContainer, AsideMenuElement} from "./AsideMenu.styles";
import {NavLink} from "react-router-dom";
import {ReactComponent as Close} from "../../assets/icons/close.svg";
import {Button} from "../Button/Button";
import {useNavigate, useParams} from "react-router";
import {useDeleteLessonMutation} from "../../app/api/coursesApiSlice";

interface AsideMenuInterface {
    elements: {
      text: string,
      url: string;
    }[],
    edit?: boolean;
}

export const AsideMenu: React.FC<AsideMenuInterface> = ({elements, edit}) => {
    const navigation = useNavigate();
    const {courseId} = useParams();

    return <AsideMenuContainer>
        {edit && <Button label={'Add new lesson'} onClick={() => navigation('/courses/' + courseId + '/lesson/add-new')}></Button>}
        {elements.map(element => {
            return <AsideMenuElement>
                <span>{element.text}</span><NavLink to={element.url}>GO!</NavLink>
            </AsideMenuElement>
        })}
    </AsideMenuContainer>
}
import React, {useState} from "react";
import {AsideMenuContainer, AsideMenuElement} from "./AsideMenu.styles";
import {NavLink} from "react-router-dom";
import {ReactComponent as Close} from "../../assets/icons/close.svg";

interface AsideMenuInterface {
    elements: {
      text: string,
      url: string;
    }[]
}

export const AsideMenu: React.FC<AsideMenuInterface> = ({elements}) => {

    return <AsideMenuContainer>
        {elements.map(element => {
            return <AsideMenuElement>
                <span>{element.text}</span><NavLink to={element.url}>GO!</NavLink>
            </AsideMenuElement>
        })}
    </AsideMenuContainer>
}
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const MenuContainer = styled.div`
  position: relative;
`

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
`

export const ListMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1b1834;
`
export const ListElement = styled(NavLink)`
  padding: 5px 15px;
  width: 100%;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`
export const UserName = styled.a`
  padding: 5px 15px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`


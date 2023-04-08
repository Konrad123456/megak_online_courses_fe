import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 5px 2rem;
  background-color: #1b1834;
  color: white;
`

export const LogoText = styled.span`
  font-weight: bold;
`

export const LogInContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-self: end;
  border-left: 1px solid white;
  padding: 0 1rem 0 1rem;
`

export const NavigationsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  padding-right: 1rem;
  flex-grow: 1;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export const Logo = styled.img`
  max-height: 100%;
`
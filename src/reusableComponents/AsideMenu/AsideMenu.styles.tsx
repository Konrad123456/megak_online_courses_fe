import styled from "styled-components";

export const AsideMenuContainer = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-right: 1px solid black;
  & svg:first-child {
    position: absolute;
    right: 0;
    transform: translate(100%,0);
    &:hover {
      cursor: pointer;
    }
  }
`

export const AsideMenuElement = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`
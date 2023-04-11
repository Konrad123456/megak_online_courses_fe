import styled from "styled-components";

export const AsideMenuContainer = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-right: 1px solid black;
  background-color: #1b1834;
  color: white;
  & > div {
    padding: 1rem 0.5rem;
    border-bottom: 1px solid white;
    & a {
      margin-left: 0.25rem;
      text-decoration: none;
      color: #61dafb;
    }
  }
`

export const AsideMenuElement = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`
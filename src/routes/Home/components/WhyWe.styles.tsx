import styled from "styled-components";

export const WhyWeContainer = styled.div`
  padding: 10rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: justify;
  align-items: center;
  justify-items: center;
  
  & p {
    margin: 10px 0;
  }
  
  & img {
    border-radius: 20px;
    max-height: 40vh;
  }
  
  & a {
    display: block;
    margin: 20px 0;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    color: #282c34;
    border: 2px solid pink;
    border-radius: 10px;
    transition: 0.2s linear;
    &:hover {
      color: white;
      background-color: pink;
    }
  }
`


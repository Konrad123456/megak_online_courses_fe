import styled from 'styled-components';

export const LogInContainer = styled.div`
  background-color: #0d0f12;
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 95vh;
`

export const LogInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 2rem;
  color: white;
  height: 95%;
`

export const LogInAsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-size: cover;
  gap: 20px;
  color: white;
`

export const LogInFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 2rem;
  color: white;
  height: 5%;
  font-size: 0.75rem;
`

export const LogInInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 60%;
`

export const FormTitle = styled.h1`
  text-align: center;
  margin: 7rem 0 3rem 0;
`

export const AsideImg = styled.img`
  width: 40%;
  border-radius: 10%;
`
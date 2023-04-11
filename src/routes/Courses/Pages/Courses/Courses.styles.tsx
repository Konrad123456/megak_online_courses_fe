import styled from "styled-components";

export const CoursesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const CoursesTitle = styled.h1`
  text-align: center;
  padding: 2rem 0;
`

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`
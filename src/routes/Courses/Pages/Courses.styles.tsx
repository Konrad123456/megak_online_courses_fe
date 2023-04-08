import styled from "styled-components";

export const CoursesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const CoursesTitle = styled.h1`
  text-align: center;
  padding: 3rem 0;
`

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
`

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  padding: 2rem 3rem;
  margin: 0 2rem;
  border: 1px solid pink;
  border-radius: 10px;
`

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-height: 150px;
  }
`;
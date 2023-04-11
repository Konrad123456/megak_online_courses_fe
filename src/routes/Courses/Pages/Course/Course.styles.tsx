import styled from "styled-components";

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 2rem;
  & > img {
    margin: 2rem 0;
    align-self: center;
    max-height: 300px;
  }
`
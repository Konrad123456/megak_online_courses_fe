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
  align-items: start;
  & > img {
    align-self: center;
    max-height: 400px;
  }
`
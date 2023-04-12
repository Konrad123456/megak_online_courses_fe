import styled from "styled-components";

export const NewCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: auto;
  width: 60%;
  max-width: 1200px;
  background-color: #1b1834;
  color: white;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

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
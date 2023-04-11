import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Selector = styled.select`
  padding: 0.75rem 0.5rem;
  background-color: transparent;
  max-height: 200px;
  overflow-y: auto;
  color: white;
  border: 1px solid white;
`

export const SelectorOption = styled.option`
  padding: 0.75rem 0.5rem;
  background-color: transparent;
  color: white;
`
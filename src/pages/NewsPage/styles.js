import styled from "styled-components";

export const ContainerStyled = styled.nav`
  padding: 20px;
  background-color: ${(props) => (props.theme === true ? "#fff" : "#cbcbcb")};
`;

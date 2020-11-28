const { default: styled } = require("styled-components");

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  font-weight: 400;
  border-radius: 10px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  cursor: pointer;
`;

export default Button;

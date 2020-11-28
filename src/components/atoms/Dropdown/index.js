import styled from "styled-components";

const Dropdown = styled.select`
  width: 100%;
  height: 35px;
  background: ${(props) => (props.primary ? "#abd1c6" : "#004643")};
  color: ${(props) => (props.primary ? "#004643" : "#abd1c6")};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  option {
    color: #004643;
    background: #abd1c6;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Dropdown;

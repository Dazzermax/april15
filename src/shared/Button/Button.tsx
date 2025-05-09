import styled from 'styled-components';

// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }

type ButtonProps = {
  $primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export const GreenButton = styled(Button)`
  background: ${(props) => (props.$primary ? '#4fbf57' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#4fbf57')};
  border-color: #4fbf57;
`;

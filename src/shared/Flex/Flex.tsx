import styled from 'styled-components';

type FlexPropsType = {
  $direction?: 'column' | 'row';
  $gap?: number | string;
};

export const Flex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${(props) => (props.$direction === 'row' ? 'row' : 'column')};
  gap: ${(props) =>
    typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap};
`;

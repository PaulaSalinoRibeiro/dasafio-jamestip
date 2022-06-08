import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid yellow;

  h2 {
    color: ${({theme}) => theme.colors.text};
  }
`;
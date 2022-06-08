import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 24px;
  width: 80%;

  h2 {
    color: ${({theme}) => theme.colors.text};
    text-align: center;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 20px 0;
  width: 100%;

  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 30%;

    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.shape};
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
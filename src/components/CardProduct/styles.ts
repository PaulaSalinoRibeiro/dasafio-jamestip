import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  box-shadow: -7px -3px 18px -4px ${({theme}) => theme.colors.shadow};
  display: flex;
  flex-flow: column wrap;
  padding: 8px;
  margin-top:45px;
  margin-right: 24px;
  width: 150px;

  span {
    font-size: 12px;
    color: ${({theme}) => theme.colors.text};
  }

  p {
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_dark};
  }

  button {
    background: ${({theme}) => theme.colors.secondary};
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.shape};
    padding: 8px;
    margin: auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
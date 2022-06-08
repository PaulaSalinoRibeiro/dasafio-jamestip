import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({theme}) =>theme.colors.primary};

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 50%;
    margin: auto;
    background: ${({theme}) =>theme.colors.shape};
    border-radius: 5px;
    
    label {
      display: flex;
      border-radius: 5px;
      box-shadow: -7px -3px 18px -4px ${({theme}) => theme.colors.shadow};
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 12px;

      input {
        width: 60%;
      }
    }

    button {
      background-color: ${({theme}) => theme.colors.secondary};
      border: none;
      border-radius: 5px;
      color: ${({theme}) => theme.colors.shape};
      font-size: 16px;
      margin: auto;
      margin-top: 24px;
      padding: 6px;
      width: 30%;
    }

`;
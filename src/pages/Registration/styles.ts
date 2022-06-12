import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 40%;
  margin-top: 45px;

  form {
    display: flex;
    flex-direction: column;
    
    label {
      display: flex;
      border-radius: 5px;
      box-shadow: -7px -3px 18px -4px ${({theme}) => theme.colors.shadow};
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 12px;

      &:hover {
        box-shadow: 1px 1px 10px -4px ${({theme}) => theme.colors.primary};
      }

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

      &:disabled {
        background-color: ${({theme}) => theme.colors.secondary_light}; 
      }
    }
  }
  
`;
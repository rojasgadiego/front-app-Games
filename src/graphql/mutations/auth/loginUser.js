import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($input: LoginRequestDto!) {
    login(loginUserInput: $input) {
      token
      idUser
      status
      error
    }
  }
`;

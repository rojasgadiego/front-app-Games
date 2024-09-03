import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($input: LoginRequestDto!) {
    login(loginUserInput: $input) {
      token
      status
      error
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($input: RegisterRequestDto!) {
    register(registerUserInput: $input) {
      status
      error
      message
    }
  }
`;

export const VALIDATE_USER = gql`
  mutation validate($input: ValidateInputDto!) {
    validate(validateUserInput: $input) {
      userId
    }
  }
`;

export const FINDUSER_BYID = gql`
  query findUser($input: FindUserRequestDto!) {
    findUser(findUserInput: $input) {
      status
      user {
        email
        nombre
      }
    }
  }
`;

import { FINDUSER_BYID } from "@/graphql/mutations/auth";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

const useAuthMutationHandler = (mutation) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, { data }] = useLazyQuery(FINDUSER_BYID);

  const login = async (LoginRequestDto) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await mutation({
        variables: {
          input: LoginRequestDto,
        },
      });
      const result = resp.data.login;
      return result;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (RegisterRequestDto) => {
    setLoading(true);
    setError(null);
    const resp = await mutation({
      variables: {
        input: RegisterRequestDto,
      },
    });
    const result = resp.data.register;
    setError(result.error);
    setLoading(false);
  };

  const validate = async (ValidateInputDto) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await mutation({
        variables: {
          input: {
            token: ValidateInputDto,
          },
        },
      });
      const userId = resp.data.validate.userId;
      const response = await userData({
        variables: {
          input: {
            id: userId,
          },
        },
      });
      console.log(response.data.findUser.status);
      if (response.data.findUser.status !== 200) return null;
      return response.data.findUser.user;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // const findUserById = async (FindUserRequestDto) => {
  //   setLoading(true);
  //   setError(null);
  //   console.log(FindUserRequestDto);
  //   try {
  //     const resp = await mutation({
  //       variables: {
  //         FindUserRequestDto,
  //       },
  //     });
  //     const result = resp.data.findUser;
  //     console.log(resp);
  //     // return result;
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return {
    login,
    register,
    validate,
    // findUserById,
    loading,
    error,
  };
};

export default useAuthMutationHandler;

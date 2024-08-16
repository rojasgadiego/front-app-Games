import { useState } from "react";
import { HttpStatusCode } from "axios";

const loginMutationHandler = (mutation) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (LoginRequestDto) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await mutation({
        variables: {
          input: LoginRequestDto,
        },
      });
      const result = resp.data.login;
      if (result.status == HttpStatusCode.Ok) return result;
      setError(result.error);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
    loading,
    error,
  };
};

export default loginMutationHandler;

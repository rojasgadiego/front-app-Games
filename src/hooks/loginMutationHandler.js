import { useState } from "react";

const useMutationHandler = (mutation) => {
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
      return result;
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

export default useMutationHandler;

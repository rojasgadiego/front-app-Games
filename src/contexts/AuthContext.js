import { createContext, useEffect, useState } from "react";
import { Token } from "@/api/token";
export const AuthContext = createContext();
import { useMutation } from "@apollo/client";
import { VALIDATE_USER } from "@/graphql/mutations/auth";
import useAuthMutationHandler from "@/hooks/Auth/useAuthMutationHandler";

const tokenCtrl = new Token();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const [validateMutation] = useMutation(VALIDATE_USER);
  const { validate } = useAuthMutationHandler(validateMutation);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginCtx = async (token) => {
    const userDB = await validate(token);
    if (userDB) {
      tokenCtrl.setToken(token);
      setUser({
        email: userDB.email,
        name: userDB.nombre,
      });
      setToken(token);
      setLoading(false);
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const dataCtx = {
    accesToken: token,
    user,
    loginCtx,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={dataCtx}>{children}</AuthContext.Provider>
  );
}

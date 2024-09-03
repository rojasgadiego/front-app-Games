import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/Auth";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutations/auth";
import useAuthMutationHandler from "@/hooks/Auth/useAuthMutationHandler";

import { Auth } from "@/api";

const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();
  const [loginMutation] = useMutation(LOGIN_USER);
  const { login, loading } = useAuthMutationHandler(loginMutation);
  const { loginCtx } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      const data = await login(formValue);
      if (data.status == 200) {
        loginCtx(data.token);
        //router.push("/");
      } else {
        console.log(data.error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        type="text"
        placeholder="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        {loading ? "Cargando" : "Entrar"}
      </Form.Button>
    </Form>
  );
}

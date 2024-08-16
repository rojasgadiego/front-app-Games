import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutations/auth";
import loginMutationHandler from "@/hooks/loginMutationHandler";

export function LoginForm() {
  const router = useRouter();
  const [login] = useMutation(LOGIN_USER);
  const { loginUser, loading, error } = loginMutationHandler(login);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      const data = await loginUser(formValue);
      if (data) {
        //crear contexto
        //direccionar al home
      } else {
        console.log(error);
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

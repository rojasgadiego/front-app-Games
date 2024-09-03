import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { REGISTER_USER } from "@/graphql/mutations/auth";
import { useMutation } from "@apollo/client";
import useAuthMutationHandler from "@/hooks/Auth/useAuthMutationHandler";

export function RegisterForm() {
  const router = useRouter();
  const [registerMutation] = useMutation(REGISTER_USER);
  const { register, loading } = useAuthMutationHandler(registerMutation);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const data = await register(formValue);
      if (data) {
        //usuario creado
        //redireccionar al login
      } else {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="nombre"
          type="text"
          placeholder="Nombre de usuario"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.errors.nombre}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        {loading ? "Cargando" : "Registrarse"}
      </Form.Button>
    </Form>
  );
}

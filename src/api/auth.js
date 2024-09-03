import { ENV } from "@/utils";
import { LOGIN_USER } from "@/graphql/mutations/auth";

export class Auth {
  // async register(data) {
  //   try {
  //     const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
  //     const params = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     };
  //     const response = await fetch(url, params);
  //     const result = await response.json();
  //     if (response.status != 200) throw error;
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }
  // async login(data) {
  //   try {
  //     const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
  //     const params = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     };
  //     const response = await fetch(url, params);
  //     const result = await response.json();
  //     if (response.status !== 200) throw error;
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }
  // async login(data) {
  //   // const LoginUserInput = {
  //   //   email: data.email,
  //   //   password: data.password,
  //   // };
  //   login({
  //     variables: {
  //       input: data,
  //     },
  //   })
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch((error) => {});
  // }

  async loginPrueba(LoginRequestDto) {
    try {
      const resp = await LOGIN_USER({
        variables: {
          input: LoginRequestDto,
        },
      });
      console.log(resp);
      // const result = resp.data.login;
      // return result;
    } catch (error) {
      console.log(error);
    }
  }
}

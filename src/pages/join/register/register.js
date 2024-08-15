import Link from "next/link";
import { AuthLayout } from "@/layouts";
import styles from "./register.module.scss";
import { RegisterForm } from "@/components/Auth";

export default function RegisterPage() {
  return (
    <>
      <AuthLayout>
        <div className={styles.signUp}>
          <h3 className="text-white text-4xl">Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/login">Atrás</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

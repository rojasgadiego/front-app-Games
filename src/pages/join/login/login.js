import Link from "next/link";
import { AuthLayout } from "@/layouts";
import styles from "./login.module.scss";
import { LoginForm } from "@/components/Auth";

export default function LoginPage() {
  return (
    <>
      <AuthLayout>
        <div className={styles.signIn}>
          <h3 className="text-white text-4xl">Iniciar Sesión</h3>
          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/register">Atrás</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

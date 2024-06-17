import { SigninForm } from "./components/form";
import { SideView } from "./components/sideView";
import styles from "./Signin.module.scss";
import { cn } from "@/lib/utils";
export default function Signin() {
  return (
    <main className={styles.container}>
      <div className={styles.sideView}>
        <SideView />
      </div>
      <div className={styles.signinForm}>
        <SigninForm />
      </div>
    </main>
  );
}

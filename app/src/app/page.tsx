import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  //throw new Error("not today!");
  return (
    <main>
      <p>main</p>
      <Link href={"/admin"}>go to admin</Link>
      <Link href={"/admin/users"}>go to users</Link>
    </main>
  );
}

import { redirect } from "next/navigation";

export default function Home() {
  // Begitu dibuka, langsung lempar ke /login
  redirect("/login");
}
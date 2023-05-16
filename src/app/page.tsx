import { redirect } from "next/navigation";
import { getUser } from "~/lib/auth/getUser";

export default async function Root() {
  const user = await getUser();
  if (user) {
    redirect("/profile");
  } else {
    redirect("/auth/login");
  }
}

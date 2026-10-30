import { getCurrentUser } from "@/lib/auth";

export const metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <main>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>User id: {user.sub}</p>
    </main>
  );
}

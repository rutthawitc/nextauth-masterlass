import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <>
      <h1>Settings</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default SettingsPage;

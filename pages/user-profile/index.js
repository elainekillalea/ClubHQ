import React from "react";
import { useSession } from "next-auth/react";

function User() {
  const { data: session } = useSession();
  if (!session) {
    return <h1>You are not logged in.</h1>;
  }
  return <h2>you are logged in</h2>;
}
export default User;

// import User from "../../components/profile/User";

// function UserP() {
//     return(
//       <User />
//     );
// }

// export default UserP;

import React from "react";
import { useSession } from "next-auth/react";

function user() {
  const { data: session } = useSession();
  if (!session) {
    return <h1>You are not logged in.</h1>;
  }
  return <h2>you are logged in</h2>;
}
export default user;



import classes from "./Layout.module.css";
import Profile from "../tools/SideProfile";
import { FaUser } from "react-icons/fa";

function SideC() {
  return (
    <div>
      <div className={classes.card}>
        <Profile />
      </div>
    </div>
  );
}

export default SideC;

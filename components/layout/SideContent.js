import classes from "./Layout.module.css";
import SideProfile from "../tools/SideProfile";

function SideC() {
  return (
    <div>
      <div className={classes.card}>
        <SideProfile />
      </div>
    </div>
  );
}

export default SideC;

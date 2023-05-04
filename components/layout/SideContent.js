import classes from './Layout.module.css';
import Profile from '../profile/SideProfile';

function SideC(props) {
  return (
      <div>
        {/* <main className={classes.main}>{props.children}</main> */}
        <div className={classes.card}>
          <Profile />
        </div>
        {/* <div className={classes.card}> */}
        {/* </div> */}
      </div>
  );
}

export default SideC;
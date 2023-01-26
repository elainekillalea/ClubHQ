import classes from './Layout.module.css';
import Profile from '../profile/Profile';

function SideC() {
  return (
      <div className={classes.side}>
        <div className={classes.card}>
          <Profile />
        </div>
        <div className={classes.card}>
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
  );
}

export default SideC;
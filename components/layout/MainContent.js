import classes from './Layout.module.css';
import Calendar from '../tools/Calendar';

function MainC(props) {
  return (
    <div className={classes.card}>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default MainC;


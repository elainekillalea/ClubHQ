import classes from './Layout.module.css';
import Calendar from '../tools/Calendar';
import Progress from '../tools/Progress';

function MainC(props) {
  return (
    <div className={classes.card}>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default MainC;


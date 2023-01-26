import classes from './Layout.module.css';
import Calendar from '../tools/Calendar';
import Progress from '../tools/Progress';

function MainC() {
  return (
    <div className={classes.main}>
        <div className={classes.card}>
            <Calendar />
        </div>
        <div className={classes.card}>
            <Progress />
        </div>
    </div>
  );
}

export default MainC;


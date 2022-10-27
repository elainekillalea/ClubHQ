import classes from './MeetupDetail.module.css'
import { useRouter } from 'next/router';


function MeetupDetail(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/');
    }

    //ignore
    //const result = props.address.split(/[,]+/);
    //<address>{result[0]},<br></br>{result[1]},<br></br>{result[2]},<br></br>{result[3]}</address>
    //can't hardcode length of array for longer addresses... separates whitespaces aswell

    return (
        <section className={classes.detail}>
            <div className={classes.flexContainerHeader}>
                <h1>{props.title}</h1>
            </div>
            
            <div className={classes.flexContainer}>
                <div className={classes.flexImg}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.flexContent}>
                    <div className={classes.flexDesc}>
                        <h4>Description</h4>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.flexAddr}>
                        <address>{props.addressNum}</address>
                        <address>{props.addressStreet}</address>
                        <address>{props.addressTown}</address>
                        <address>{props.addressCity}</address>
                    </div>
                </div>
            </div>
            <div className={classes.flexContainerB}>
                <div className={classes.flexContentB}>
                    <a href="/">
                        <button >Home Link</button>
                    </a>
                </div>
                <div className={classes.flexContentB}></div>
                <div className={classes.flexContentB}></div>
                <div className={classes.flexContentB}>
                    <button onClick={showDetailsHandler}>Home Route</button>
                </div>
            </div>
        </section>
    )
}

export default MeetupDetail
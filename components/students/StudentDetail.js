import classes from './StudentDetail.module.css'


function StudentDetail(props) {
    
    return (
        <section className={classes.detail}>
            <div className={classes.flexContainerHeader}>
                <h1>{props.name}</h1>
            </div>
            
            <div className={classes.flexContainer}>
                <div className={classes.flexImg}>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className={classes.flexContent}>
                    <div className={classes.flexDesc}>
                        <h4>Grade</h4>
                        <p>{props.grade}</p>
                    </div>
                    <div className={classes.flexDesc}>
                        <h4>Description</h4>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.flexDesc}>
                        <address>{props.address}</address>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentDetail
import classes from './MeetupDetail.module.css'

function MeetupDetail(props) {
    return (
        <div class="flex-container">
            <div><img src={props.image} alt={props.title} /></div>
            <div><h1>{props.title}</h1></div>
            <div><address>{props.address}</address></div>
            <div><p>{props.description}</p></div>
        </div>
    )
}

export default MeetupDetail
// our-dimain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {

    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage
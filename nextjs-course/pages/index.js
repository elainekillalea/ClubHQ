import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://www.planetware.com/photos-large/SEY/best-tropical-vacations-maldives.jpg',
        title: 'A First Meetup',
        address: 'Some address, Galway, Ireland',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        image: 'https://www.planetware.com/photos-large/SEY/best-tropical-vacations-maldives.jpg',
        title: 'A Second  Meetup',
        address: 'Some other address, Galway, Ireland',
        description: 'This is a second meetup!'
    }
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;
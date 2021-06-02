import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    function addMeetupHandler(meetupData) {
        // Use the fetch() function to do a POST HTTP request to our Firebase API
        // Modify the URL to create a meetups table when the request is done (.json is required by firebase)
        fetch(
            'https://react-meetup-d02df-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
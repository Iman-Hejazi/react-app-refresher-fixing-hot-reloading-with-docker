import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const URL = process.env.REACT_APP_API_ENDPOINT_DEV;

  const history = useHistory();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch(`${URL}meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      history.replace("/");
    } else {
      console.log("In NewMeetupPage");
      console.log(response);
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

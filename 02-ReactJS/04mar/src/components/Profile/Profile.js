import React from 'react'

const users = {
  umair: {
    name: "umair",
    age: 22
  },
  osama: {
    name: "osama",
    age: 34
  }
};

const Profile = props => {
  return (
    <div>
      <h1>THis is profile page {props.match.params.profileId}</h1>
      <h1>
        Username is{" "}
        {users[props.match.params.profileId] &&
          users[props.match.params.profileId].name}{" "}
      </h1>
      <h1>
        Your age is{" "}
        {users[props.match.params.profileId] &&
          users[props.match.params.profileId].age}{" "}
      </h1>
      <button onClick={() => props.history.push("/home")}>Goto home</button>
    </div>
  );
};

export default Profile
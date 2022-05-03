import React from "react";

export default function UserInfo(props) {

  return (
    <div className="UserInfo">
      <p>Username : {props.username}</p>
      <p>Job : {props.job}</p>
      <p>Age : {props.age}</p>
      <p>Id : {props._id}</p>
    </div>
  )
}
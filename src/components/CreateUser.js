import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function CreateUser() {
  const [username, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startdate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");

  const userContext = useContext(UserContext);
  const history = useHistory();

  let submitHandler = (event) => {
    event.preventDefault();
    let userData = { username, position, office, age, startdate, salary };
    userContext.setUserList([...userContext.userList, userData]);
    history.push("/users");
  };
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label for="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                placeholder="Enter Username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="position">Position</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={position}
                placeholder="Enter Position"
                onChange={(event) => {
                  setPosition(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="office">Office</label>
              <input
                type="text"
                className="form-control"
                name="office"
                value={office}
                placeholder="Enter Office"
                onChange={(event) => {
                  setOffice(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="age">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={age}
                placeholder="Enter Age"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="start-date">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="start-date"
                value={startdate.replaceAll("/", "-")}
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="salary">Salary</label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={salary}
                placeholder="Enter Salary"
                onChange={(event) => {
                  setSalary(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Create User"
                className="btn btn-primary mt-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateUser;

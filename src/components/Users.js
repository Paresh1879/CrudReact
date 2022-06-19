import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Users() {
  const userContext = useContext(UserContext);

  const deleteUserHandler = (index) => {
    let confirm = window.confirm("Do you really want to delete this user?");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  };
  return (
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Users</h6>
      </div>

      <div class="card-body">
        <Link class="btn btn-primary mb-4" to="/create-user">
          Create User
        </Link>
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {userContext.userList.map((user, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.position}</td>
                    <td>{user.office}</td>
                    <td>{user.age}</td>
                    <td>{user.startdate}</td>
                    <td>{user.salary}</td>
                    <td>
                      <Link
                        to={`/edit-user/${index + 1}`}
                        className="btn btn-sm btn-primary ml-3"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger ml-3"
                        onClick={() => {
                          deleteUserHandler(index + 1);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;

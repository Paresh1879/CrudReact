import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      username: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      startdate: "2011/04/25",
      salary: "$320,800",
    },
    {
      username: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      startdate: "2011/07/25",
      salary: "$170,750",
    },
    {
      username: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      startdate: "2009/01/12",
      salary: "$86,000",
    },
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};

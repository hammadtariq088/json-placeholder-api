import { React, useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    getUsersData();
  }, []);
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {users.map((userData) => {
            const { id } = userData;
            return <Card key={id} {...userData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;

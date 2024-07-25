import React, { useState, useEffect, useCallback } from "react";
import { userData } from "../type";

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState<userData[]>([]);
  const handleClear = () => {
    setUsers([]);
  };
  const handleRemove = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  const url = "http://api.github.com/users";
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setUsers(users);
      console.log(users);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <section>
      <h1>Github Users</h1>
      <ul className="Users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
              <button
                type="button"
                className="btn btn-remove m-2"
                onClick={() => handleRemove(id)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleClear}
        className="btn btn-primary mt-3"
        style={{ padding: "1rem", width: "10rem", fontSize: "2rem" }}
      >
        Clear
      </button>
    </section>
  );
};

export default Users;

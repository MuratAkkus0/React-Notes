import { useEffect, useState } from "react";
import Count from "./redux_toolkit/Count";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux_toolkit/usersSlice";
import { deleteList } from "./redux_toolkit/usersSlice";

function App() {
  const { users } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("first");
  }, []);
  return (
    <>
      <Count />
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
      <button onClick={() => dispatch(deleteList())}>del</button>
    </>
  );
}

export default App;

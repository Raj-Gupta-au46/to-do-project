import AddTaskForm from "./AddTaskForm";
import Button from "./Button";
import { useState } from "react";

const Header = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <header>
        <h1>TODO app</h1>

        <Button
          title={toggleForm ? "Hide" : "Show"}
          color={toggleForm ? "orange" : "green"}
          onClick={() => setToggleForm(!toggleForm)}
        />
      </header>

      {toggleForm && <AddTaskForm addTask={props.addTask} />}
    </>
  );
};

export default Header;

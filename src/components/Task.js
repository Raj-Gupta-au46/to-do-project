import Button from "./Button";

const Task = (props) => {
  return (
    <div
      className={`task-light ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.toggleReminder(props.task.id)}
    >
      <h3>
        {props.task.name}

        <Button
          title="X"
          color="red"
          onClick={() => props.deleteTask(props.task.id)}
        />
      </h3>

      <p>{props.task.date}</p>
    </div>
  );
};

export default Task;
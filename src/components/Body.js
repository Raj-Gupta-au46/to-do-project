import Task from "./Task";

const Body = (props) => {
  return (
    <div>
      {props.tasks.map((e) => (
        <Task
          task={e}
          deleteTask={props.deleteTask}
          toggleReminder={props.toggleReminder}
        />
      ))}
    </div>
  );
};

export default Body;
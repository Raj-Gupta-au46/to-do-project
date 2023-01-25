import { useState } from "react";

const AddTaskForm = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000) + 1;

    props.addTask({ id, name, date, reminder });

    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onFormSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input
        className="btn btn-block"
        type="submit"
        style={{ background: "green" }}
      />
    </form>
  );
};

export default AddTaskForm;
import React from 'react';

const Task = ({ task, onToggleStatus, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{task.description}</td>
      <td>{task.assignee}</td>
      {task.status === 'Pending' ? <td>{task.deadline}</td> : <td></td>}
      <td>{task.status}</td>
      <td>
        <button onClick={onToggleStatus}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Task;
    
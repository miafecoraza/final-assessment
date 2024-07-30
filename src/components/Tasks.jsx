import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';
import './tasks.css'; // Import the specific CSS file

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { description: 'Develop a Web Application', assignee: 'John', deadline: '2024-08-10', status: 'Pending' },
    { description: 'Network Configuration', assignee: 'Jane', deadline: '2024-08-12', status: 'Completed' },
    { description: 'IoT Project', assignee: 'Mike', deadline: '2024-08-15', status: 'Pending' },
    { description: 'Data Analysis', assignee: 'Lisa', deadline: '2024-08-20', status: 'Completed' },
    { description: 'Software Testing', assignee: 'John', deadline: '2024-08-22', status: 'Pending' },
    { description: 'Algorithm Implementation', assignee: 'Jane', deadline: '2024-08-25', status: 'Completed' },
    { description: 'Cloud Deployment', assignee: 'Mike', deadline: '2024-08-28', status: 'Pending' },
    { description: 'Mobile App Development', assignee: 'Lisa', deadline: '2024-09-01', status: 'Pending' },
    { description: 'Cybersecurity Assessment', assignee: 'John', deadline: '2024-09-05', status: 'Completed' },
    { description: 'Database Design', assignee: 'Jane', deadline: '2024-09-10', status: 'Pending' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status = newTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
    setTasks(newTasks);
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Description</th>
            <th>Assignee</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <Task
              key={index}
              index={index + 1}
              task={task}
              onToggleStatus={() => toggleStatus(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;

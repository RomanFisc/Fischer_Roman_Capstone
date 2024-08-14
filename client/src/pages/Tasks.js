import React from 'react';
import TaskList from '../../../client1/src/components/TaskList';
import TaskForm from '../../../client1/src/components/TaskForm';

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Tasks;
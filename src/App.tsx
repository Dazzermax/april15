import { useEffect, useState } from 'react';
import './App.css';
import { Button, GreenButton } from './shared/Button/Button';

import styled from 'styled-components';
import { Flex } from './shared/Flex/Flex';

const gap = '10px';
const borderRadius = '6px';

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  font-style: italic;
  color: red;
`;

const Wrapper = styled.div`
  background: papayawhip;
  border-radius: ${borderRadius};
  padding: 1rem;
  gap: ${gap};
`;

type Task = {
  name: string;
  id: number;
};

const generateId = () => Math.floor(Math.random() * 100000);

function App() {
  const [newTaskName, setNewTaskName] = useState<Task['name']>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleResetNewTaskName = () => {
    setNewTaskName('');
  };

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: generateId(),
        name: newTaskName,
      },
    ]);
    handleResetNewTaskName();
  };

  const handleDeleteTask = (id: Task['id']) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const jobListUrl = 'https://hacker-news.firebaseio.com/v0/jobstories.json';

  useEffect(() => {
    fetch(jobListUrl).then((d) => {
      return d.json().then(console.log);
    });
    // .then((d) => console.log(d));
  }, []);

  return (
    <Wrapper>
      <Title>Todo</Title>
      <menu>
        <Button as="a" $primary href="https://google.com">
          tasks
        </Button>
      </menu>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <Button onClick={handleAddTask} disabled={!newTaskName}>
        add
      </Button>
      <GreenButton>green</GreenButton>
      <Flex $direction="column" $gap={10}>
        {tasks.map((task) => {
          return (
            <Flex key={task.id} $direction="row" $gap={10}>
              <span>{task.name}</span>
              <button onClick={() => handleDeleteTask(task.id)}>🗑️</button>
            </Flex>
          );
        })}
      </Flex>
    </Wrapper>
  );
}

export default App;

import { getMainTasks } from 'API/tasks';

export const filterTasks = (tasks) => {
  return tasks.filter((task) => task.condition !== 'Выполнено');
};

export const filterTasksByUser = (tasks, userRole = 'admin') => {
  return tasks.filter((task) => task.responsible === userRole);
};

export const getTasksList = async () => {
  let tasks = [];
  await getMainTasks()
    .then((res) => res.json())
    .then((res) => {
      return (tasks = res);
    })
    .catch((err) => {
      return console.error(err);
    });
  return tasks;
};

export const getTasksControlDatesList = (tasks) => {
  let controlDates = {};
  tasks
    .sort((a, b) => {
      if (a.dateControl < b.dateControl) {
        return -1;
      }
      if (a.dateControl > b.dateControl) {
        return 1;
      }
      return 0;
    })
    .map((task) => {
      let curDate = new Date(task.dateControl);
      curDate = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate(),
      );

      return (controlDates = {
        ...controlDates,
        [curDate]:
          controlDates[curDate] === undefined
            ? [task]
            : [...controlDates[curDate], task],
      });
    });
  return controlDates;
};

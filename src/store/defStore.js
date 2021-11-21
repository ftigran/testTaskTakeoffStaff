export const ColumnsTasks = [
  {
    id: "date",
    label: "Дата отправки",
    params: { width: 237 },
  },
  {
    id: "task",
    label: "Задание",
    params: { width: 250 },
  },
  {
    id: "stat",
    label: "Статус",
    params: { width: 257 },
  },
  {
    id: "points",
    label: "Баллы",
    params: { width: 230 },
  },
];
export const ColumnsPrizi = [
  {
    id: "date",
    label: "Дата",
    params: { width: 240 },
  },
  {
    id: "name",
    label: "Приз",
    params: { width: 572 },
  },
  {
    id: "points",
    label: "Баллы",
    params: { width: 248 },
  },
];
export const rowsPrizi = [
  createDataPrizi("17.04.2021", "промокод на скидку 10%", 3),
  createDataPrizi("26.04.2021", "многоразовая бутылка для воды", 9),
];
export function createDataPrizi(date, name, points) {
  return { date, name, points };
}
export function createData(date, task, stat, points) {
  if (stat === true) {
    stat = "Принят";
  } else if (stat === false) {
    stat = "Отклонен";
  } else {
    stat = "на модерации I";
  }

  return { date, task: "Задание №" + task.toString(), id: task, stat, points };
}
export const rowsTasks = [
  createData("15.04.2021", "1", true, 3),
  createData("25.04.2021", "2", false),
  createData("25.04.2021", "2", false),
];

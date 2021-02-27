import {
  formatDateStringNoYear,
  getEmployeeNameText,
} from "../../../../../../utils/functions.jsx";
import {
  createPDF,
  defaultStylesPDF,
} from "../../../../../../utils/pdfFunctions.jsx";
import { sortByField } from "../../../../../../utils/sorting/sorting.js";
import { defaultJournalWorkshops } from "./objects.js";

export const updateData = (worksList, selectedWork, newData) => {
  const temp = worksList;
  temp.splice(worksList.indexOf(selectedWork), 1, newData);
  return temp;
};

const getDaysWorkText = (workItem) => {
  console.log(workItem);
  let workText = workItem.works.map((work) => {
    const productText = work.product
      .map((product) => `${product.name} - ${product.quantity} шт\n`)
      .join("");
    const draftText = work.draft
      .map((draft) => `${draft.name} - ${draft.quantity} шт\n`)
      .join("");
    console.log(productText, draftText);
    return `${work.workName} - ${work.hours} ч\n ${productText} ${draftText}`;
  });
  return workText;
};

const sortEmployees = (employees, workshop) => {
  const filteredEmployees = sortByField(
    employees.filter(
      (employee) =>
        employee.workshop === workshop.name &&
        employee?.relevance !== "Уволен" &&
        employee?.workshop !== "Уволенные"
    ),
    {
      fieldName: "lastName",
      direction: "asc",
    }
  );
  return filteredEmployees;
};

const getWorkshopList = (
  employees,
  workshop,
  curDate,
  todaysWork,
  yesterdaysWork
) => {
  const prevDay = new Date(new Date(curDate).setDate(curDate.getDate() - 1));
  const filteredEmployees = sortEmployees(employees, workshop);
  if (filteredEmployees.length === 0) return null;
  const listItems = filteredEmployees.map((employee) => [
    { text: getEmployeeNameText(employee), style: "regularText", fontSize: 11 },
    {
      text: getDaysWorkText(yesterdaysWork[workshop.engName][employee.id]),
      style: "regularText",
      fontSize: 12,
    },
    {
      text: getDaysWorkText(todaysWork[workshop.engName][employee.id]),
      style: "regularText",
      fontSize: 12,
    },
  ]);
  const list = [
    {
      text: `${workshop.name}\n`,
      alignment: "left",
      style: "subheader",
      margin: [0, 15, 0, 5],
    },
    {
      table: {
        widths: [170, "*", "*"],
        body: [
          [
            { text: "ФИО сотрудника", style: "tableHeader" },
            {
              text: formatDateStringNoYear(prevDay),
              style: "tableHeader",
            },
            { text: formatDateStringNoYear(curDate), style: "tableHeader" },
          ],
          ...listItems,
        ],
      },
    },
  ];
  return list;
};

export const createWorkListPDF = (
  employees,
  todaysWork,
  yesterdaysWork,
  curDate
) => {
  const list = [];
  Object.values(defaultJournalWorkshops).map((workshop) => {
    list.push(
      getWorkshopList(employees, workshop, curDate, todaysWork, yesterdaysWork)
    );
  });
  const data = {
    info: {
      title: "Дневник производства",
    },
    content: [
      {
        text: "Дневник производства\n",
        alignment: "center",
        style: "title",
        margin: [0, 0, 0, 10],
      },
      ...list,
    ],
    styles: defaultStylesPDF,
  };
  createPDF(data);
};

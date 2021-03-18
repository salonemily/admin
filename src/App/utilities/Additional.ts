import { format } from "date-fns";
import IClosingSaleOrder from "../models/closingSaleOrder";
import IRentOrder from "../models/rentOrders";
import { enumClosingSaleConverter, enumRentConverter } from "./enumConverter";

export enum CreateFormTypeEnum {
  Empty,
  Exist,
  Edit,
  New,
}
export enum FiltrType {
  Free,
  Rent,
  Rent_In_Progress,
  Order,
  Sold
}

export const formTypeFunction = (
  value: CreateFormTypeEnum,
  content: string
) => {
  if (value === CreateFormTypeEnum.Edit) {
    return `Wybrano i edytowano ${content}  `;
  } else if (value === CreateFormTypeEnum.Exist) {
    return `Wybrano ${content} `;
  } else if (value === CreateFormTypeEnum.New) {
    return `Stworzono ${content} `;
  }
};

export const checkIfTheSame = (object1: {}, object2: {}) => {
  const values1 = Object.values(object1);
  const values2 = Object.values(object2);
  console.log(values1);
  console.log(values2);
  let ifTheSame = true;
  for (let index = 0; index < values1.length; index++) {
    if (values1[index] !== values2[index]) {
      ifTheSame = false;
    }
  }
  if (ifTheSame) return true;
  else return false;
};
export const firstUpperCase = (word: string) => {
  const upperWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperWord;
};
export const dataFormat = (date: string) => {
  return format(new Date(date.split("T")[0]), "dd.MM.yyyy");
};
export const filtrRentOrders = (element: IRentOrder) => {
  if (element.status !== 2) return element;
};
export const checkIfFreeOrderStatus = (element: IRentOrder[]) => {
  return element.every((el) => el.status === 2);
};
export const showStatus = (
  element: IRentOrder[] | [],
  element2: IClosingSaleOrder | null
) => {
  let tab = element.filter(filtrRentOrders);
  let status: string[] = [];

  if (tab.length === 0 && !element2) return "Wolna";
  if (element2) {
    if (element2.status === 1) return "Sprzedana";
    if (element2.status === 0)
      status.push(enumClosingSaleConverter(element2.status));
  }
  if (tab.length > 0) {
    tab.sort((result1, result2) => {
      if (result1.rentEndDate < result2.rentEndDate) return -1;
      if (result1.rentEndDate > result2.rentEndDate) return 1;
      return 0;
    });
    console.log(tab);
    const inProgress = tab.find((x) => x.status === 1);
    if (inProgress)
      status.push(
        `${enumRentConverter(inProgress.status)} do ${dataFormat(
          inProgress.rentEndDate
        )}`
      );

    const value = tab.find((x) => x.status === 0);
    if (value)
      status.push(
        ` ${enumRentConverter(value.status)} do ${dataFormat(value.rentEndDate)}`
      );
    if (value) {
      const value2 = tab.find((x) => x.status === 0 && x.id !== value.id);
      if (value2)
        status.push(
          `${enumRentConverter(value2.status)} do ${dataFormat(value2.rentEndDate)}`
        );
    }
  }
  return status;
};

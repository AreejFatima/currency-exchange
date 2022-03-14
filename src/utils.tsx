import moment from "moment";
import { fetchChartData } from "./api/currencyApi";

export const lastNdates = (n: number) => {
  const current = moment();
  let resultDates = [];
  while (n > 0) {
    current.subtract(2, "day");
    resultDates.push(current.format("YYYY-MM-DD"));
    n--;
  }
  return resultDates;
};

export const fetchLastNDaysData = async (
  n: number,
  from: string,
  to: string
) => {
  let dates = lastNdates(n);
  let results: any[] = [];
  dates.map(async (d) => {
    let temp = fetchChartData(d, from, to);
    results.push(temp);
  });
  return Promise.all(results).then((response) => response);
};

export const makeChartData = async (n: number, from: string, to: string) => {
  let obj = {};
  let dataLabels: any[] = [];
  let dataValue: any[] = [];
  const tempData = await fetchLastNDaysData(n, from, to);
  tempData.map((i) => {
    dataLabels.push(i.date);
    dataValue.push(i[to]);
  });
  obj = {
    labels: dataLabels,
    datasets: [
      {
        label: "Currency Graph",
        fill: false,
        borderColor: "green",
        data: dataValue,
        borderWidth: 2,
      },
    ],
  };
  return obj;
};

export const makeLiveChartData = async (
  n: number,
  from: string,
  to: string
) => {
  let dataLabels: any[] = [];
  let dataValue: any[] = [];
  const tempData = await fetchLastNDaysData(n, from, to);
  tempData.map((i) => {
    dataLabels.push(i.date);
    dataValue.push(i[to]);
  });
  return {
    labels: dataLabels,
    datasets: [
      {
        data: dataValue,
        borderWidth: 3,
        fill: false,
        label: "Currency Graph",
        borderColor: "#16001e",
        backgroundColor: "#bae755",
        pointBackgroundColor: "#bae755",
        pointBorderColor: "#16001e",
        pointHoverBackgroundColor: "#16001e",
        pointHoverBorderColor: "#16001e",
      },
    ],
  };
};

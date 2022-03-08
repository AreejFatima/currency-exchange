import React, { useEffect } from "react";
import { useState } from "react";
import { fetchLatestData } from "../../api/currencyApi";
import { makeChartData } from "../../utils";
import ExchangeGraph from "../Graph/ExchangeGraph";
import { isEmpty } from "ramda";
import { TiDeleteOutline } from "react-icons/ti";

interface TablePropsType {
  country: "string";
  from: "string";
  to: "string";
  deleteCountry: (country:string)=>void;
}

function TableRow(props: TablePropsType) {
  const [amount, setAmount] = useState(0);
  const [chartData, setChartData] = useState({});

  const { country, from, to, deleteCountry } = props;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  useEffect(() => {
    const calculateAmount = async () => {
      try {
        const response = await fetchLatestData(from, to);
        setAmount(response[to]);
      } catch (error) {
        console.log("error", error);
      }
    };

    calculateAmount();
  }, [from, to]);

  useEffect(() => {
    const chartDataFunc = async () => {
      try {
        const response = await makeChartData(5, from, to);
        setChartData(response);
      } catch (error) {
        console.log("error", error);
      }
    };

    chartDataFunc();
  }, [from, to]);

  return (
    <tr>
      <td>{country}</td>
      <td>{amount}</td>
      <td>{(1 - amount).toFixed(1)}%</td>
      <td>
        <div className="table-chart">
          {isEmpty(chartData) === false ? (
            <ExchangeGraph
              dataToPlot={chartData}
              width={100}
              height={40}
              options={options}
            />
          ) : null}
        </div>
      </td>
      <td>
        <TiDeleteOutline
          size={25}
          onClick={() => deleteCountry(country)}
          className="delete-button"
        />
      </td>
    </tr>
  );
}

export default TableRow;

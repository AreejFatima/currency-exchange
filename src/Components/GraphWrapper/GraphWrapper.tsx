import React, { useEffect, useState } from "react";
import ExchangeGraph from "../Graph/ExchangeGraph";
import DropdownItem from "../Dropdown/DropdownItem";
import { makeLiveChartData } from "../../utils";
import { isEmpty } from "ramda";
import { WrapperStyle } from "./GraphWrapper.style";
import { optionType } from "../../types";

function GraphWrapper(props: optionType) {
  const [from, setFrom] = useState<string>("pkr");
  const [to, setTo] = useState<string>("usd");
  const [displayFrom, setDisplayFrom] = useState<string>("");
  const [displayTo, setDisplayTo] = useState<string>("");
  const [dataToPlot, setDataToPlot] = useState({});
  const [days, setDays] = useState(20);

  const { options } = props;

  let dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40];

  useEffect(() => {
    (async () => {
      let response = await makeLiveChartData(days, from, to);
      setDataToPlot(response);
    })();
  }, [from, to, days]);

  const graphOptions = {
    elements: {
      point: {
        radius: 5,
      },
    },
  };

  return (
    <WrapperStyle>
      <div className="graph-header">
        <DropdownItem
          options={options}
          onChange={(e: any) => {
            let temp = e.value;
            setFrom(temp.split("-")[0].trim().toLowerCase());
            setDisplayFrom(temp);
          }}
          value={displayFrom}
          placeholder={options[111]}
          title="From"
        />

        <DropdownItem
          options={options}
          onChange={(e: any) => {
            let temp = e.value;
            setTo(temp.split("-")[0].trim().toLowerCase());
            setDisplayTo(temp);
          }}
          value={displayTo}
          placeholder={options[140]}
          title="To"
        />

        <DropdownItem
          options={dayArray}
          onChange={(e: any) => setDays(e.value)}
          placeholder="Select Days"
          title="Duration"
        />
      </div>

      <h1 className="title">Live Currency Exchange Graph of {days} Days</h1>

      <div className="graph-wrapper">
        {!isEmpty(dataToPlot) && (
          <ExchangeGraph
            dataToPlot={dataToPlot}
            width={800}
            options={graphOptions}
          />
        )}
      </div>
    </WrapperStyle>
  );
}

export default GraphWrapper;

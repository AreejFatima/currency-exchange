import React, { useState, useEffect } from "react";
import HeaderRow from "../HeaderRow/HeaderRow";
import TableRow from "../TableRow/TableRow";
import { TableStyle, OperationStyle } from "./Table.style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import DropdownItem from "../Dropdown/DropdownItem";
import { reactLocalStorage } from "reactjs-localstorage";
import { isEmpty } from "ramda";

function Table(props: any) {
  const { options, flagOptions } = props;
  const [from, setFrom] = useState<any>("usd");
  const [displayFrom, setDisplayFrom] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const [addedRowData, setAddedRowData] = useState("");
  const [addedCountry, setAddedCountry] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  let displayRows = options.slice(0, 4);

  const handleChange = (e: any) => {
    let temp = e.value;
    setFrom(temp.split("-")[0].trim().toLowerCase());
    setDisplayFrom(temp);
  };

  const deleteCountry = (country: string) => {
    let tempArr = [...tableData];
    const filtered = tempArr.filter((item) => item !== country);
    setTableData(filtered);
  };

  useEffect(() => {
    const retrieved: any = reactLocalStorage.get("data");
    if (!isEmpty(JSON.parse(retrieved))) {
      setTableData(JSON.parse(retrieved));
    } else {
      setTableData(displayRows);
    }
  }, []);

  useEffect(() => {
    reactLocalStorage.set("data", JSON.stringify(tableData));
  }, [tableData]);

  const addNewRow = (e: any) => {
    let temp = e.value;
    setAddedRowData(temp.split("-")[0].trim().toLowerCase());
    setAddedCountry(temp);
    setClicked(false);
    const tempData = tableData ? tableData.slice() : [];
    tempData.push(temp);
    setTableData(tempData);
  };

  return (
    <>
      <h1 className="title">Currency Live Exchange Rates</h1>
      <OperationStyle onClick={() => setClicked(true)}>
        {clicked ? (
          <DropdownItem
            options={flagOptions}
            onChange={(e: any) => addNewRow(e)}
            value={addedCountry}
            placeholder="Select Country"
          />
        ) : (
          <div className="add-button">
            <AiOutlinePlusCircle size={40} />
            <h3>Add Currency</h3>
          </div>
        )}
      </OperationStyle>
      <div className="for-mobile">
        <TableStyle>
          <thead>
            <tr>
              <th>Country</th>
              <th>Amount</th>
              <th>Change</th>
              <th>Chart</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            <HeaderRow
              options={options}
              onChange={handleChange}
              value={displayFrom}
              flagOptions={flagOptions}
            />
            {tableData &&
              tableData.map((item) => {
                let temp = item.split("-")[0].trim().toLowerCase();
                return (
                  <TableRow
                    from={from}
                    to={temp}
                    country={item}
                    deleteCountry={deleteCountry}
                  />
                );
              })}
          </tbody>
        </TableStyle>
      </div>
    </>
  );
}

export default React.memo(Table);

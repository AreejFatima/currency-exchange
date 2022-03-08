import useCurrency from "../../Hooks/useCurrency";
import { useState, ChangeEvent, useEffect } from "react";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import DropdownItem from "../Dropdown/DropdownItem";
import { ContainerStyle } from "../Container/Container.style";
import { InputStyle } from "../Input/Input.style";
import { ButtonStyle } from "../Button/Button.style";
import useInfo from "../../Hooks/useInfo";
import Tabs from "../Tabs/Tabs";
import Tab from "../Tabs/Tab";

import Result from "../Result/Result";
import Table from "../Table/Table";
import { ConverterStyle } from "./Converter.style";
import GraphWrapper from "../GraphWrapper/GraphWrapper";

export default function Converter() {
  const [from, setFrom] = useState<any>("pkr");
  const [to, setTo] = useState<any>("usd");
  const [options, setOptions] = useState<string[]>([]);
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState<any>(0);
  const [displayFrom, setDisplayFrom] = useState<string>("");
  const [displayTo, setDisplayTo] = useState<string>("");
  const [displayResult, setDisplayResult] = useState(false);

  const { data, status } = useCurrency(from);
  const { status: infoStatus } = useInfo(setOptions);

  useEffect(() => {
    setDisplayResult(false);
  }, []);

  const convert = (f: string, t: string) => {
    var rate = data[f][t];
    setOutput(input * rate);
    setDisplayResult(true);
  };

  const flip = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    const tempDisplay = displayFrom;
    setDisplayFrom(displayTo);
    setDisplayTo(tempDisplay);
    output === 0 ? setOutput(0) : setOutput((input / output) * input);
  };

  if (status === "loading" || infoStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error" || infoStatus === "error") {
    return <div>ERROR!!!</div>;
  }

  return (
    <ConverterStyle>
      <Tabs>
        <Tab label="Converter">
          <ContainerStyle>
            <div className="left">
              <h3>Amount</h3>
              <InputStyle
                type="text"
                placeholder="Enter the amount"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
                value={input}
              />
            </div>
            <div className="middle">
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
            </div>
            <div className="switch">
              <MdOutlineSwapHorizontalCircle
                size="50px"
                onClick={() => {
                  flip();
                }}
              />
            </div>
            <div className="right">
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
            </div>
            <ButtonStyle
              onClick={() => {
                convert(from, to);
              }}
            >
              Convert
            </ButtonStyle>
            {displayResult ? (
              <Result
                heading={"Converted Amount:"}
                data={`${input ? input : 0} ${from} = ${output.toFixed(
                  4
                )} ${to}`}
              />
            ) : (
              ""
            )}
          </ContainerStyle>
          <Table options={options} />
        </Tab>
        <Tab label="Charts">
          <GraphWrapper options={options} />
        </Tab>
      </Tabs>
    </ConverterStyle>
  );
}

/* eslint-disable array-callback-return */
import { useQuery } from "react-query";
import { fetchCurrencyInfo } from "../api/currencyApi";
import { itemType } from "../types";



export default function useInfo(
  setOptions: (option: string[]) => void,
  setSymbols: (symbol:string[]) => void
) {
  let optionsData: string[] = [];
  let symbolsData:string[]=[];
  return useQuery("info", fetchCurrencyInfo, {
    onSuccess: (data) => {
      data.map((item: itemType) => {
        let tempStr = `${item.cc} - ${item.name}`;
        let tempStr2 = `${item.cc}-${item.symbol}`;
        optionsData.push(tempStr);
        symbolsData.push(tempStr2)
      });
      setOptions(optionsData);
      setSymbols(symbolsData)
    },
  });
}

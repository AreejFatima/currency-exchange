/* eslint-disable array-callback-return */
import { useQuery } from "react-query";
import { fetchCurrencyInfo } from "../api/currencyApi";
import { itemType } from "../types";
import ReactCountryFlag from "react-country-flag"



export default function useInfo(
  setOptions: (option: string[]) => void,
  setSymbols: (symbol:string[]) => void,
  setFlagOptions: (option: any[]) => void,
) {
  let optionsData: string[] = [];
  let symbolsData:string[]=[];
  let flagOptionsData: any[] = [];
  
  return useQuery("info", fetchCurrencyInfo, {
    onSuccess: (data) => {
      data.map((item: itemType) => {
        let tempStr = `${item.cc} - ${item.name}`;
        let tempStr2 = `${item.cc}-${item.symbol}`;
        optionsData.push(tempStr);
        symbolsData.push(tempStr2)
        flagOptionsData.push({
          value:tempStr,
          // code:item.cc.slice(0,2).trim().toUpperCase()
          label:<span>
             <ReactCountryFlag
                countryCode={item.cc.slice(0,2).trim().toUpperCase()}
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title={item.cc.slice(0,2).trim().toUpperCase()}
                className='flags'
            />
            {tempStr}
          </span>
        })
      });
      setOptions(optionsData);
      setSymbols(symbolsData)
      setFlagOptions(flagOptionsData)
    },
  });
}

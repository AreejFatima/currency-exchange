/* eslint-disable array-callback-return */
import { useQuery } from "react-query";
import { fetchCurrencyInfo } from "../api/currencyApi";
import { itemType } from "../types";

export default function useInfo(setOptions: (option: string[]) => void) {
  let optionsData: string[] = [];
  return useQuery("info", fetchCurrencyInfo, {
    onSuccess: (data) => {
      data.map((item: itemType) => {
        let tempStr = `${item.cc} - ${item.name}`;
        optionsData.push(tempStr);
      });
      setOptions(optionsData);
    },
  });
}

import { useQuery } from "react-query";
import { fetchCurrencies } from "../api/currencyApi";

export default function useCurrency(endpoint: string) {
  return useQuery(endpoint && ["currency", endpoint], () =>
    fetchCurrencies(endpoint)
  );
}

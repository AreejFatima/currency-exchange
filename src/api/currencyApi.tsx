

export const fetchCurrencies = async (endpoint: string) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${endpoint}.json`
  );
  return response.json();
};

export const fetchCurrencyInfo = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/other/currencies2.json"
  );
  return response.json();
};


export const fetchChartData = async (
  date: string,
  from: string,
  to: string
) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${from}/${to}.json`
  );
  return response.json();
};

export const fetchLatestData = async (
  from: string,
  to: string
) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
  );
  return response.json();
};




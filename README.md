# Currency-Converter

A simple responsive currency converter application  built using React Js (Hooks, React Query, Styled Componen), Typescript, HTML & CSS. Live demo of the app can be found [here](https://areejfatima.github.io/currency-exchange/) .
![demo](https://user-images.githubusercontent.com/62887754/158808563-99e79960-c52b-4695-9d8e-a6b791bdfadc.gif)

## Basic Features
 - An input field to enter the amount to be converted
 - Dropdowns to select the source and target country's currencies
 - A swap button to swap the source and target countries to display the converse results.
 - A tabular view of the live currency exchange rates
   - Add Button along with a dropdown for adding more country rows in the table
   - Header Row with a dropdown for selecting the source country corresponding to which exchange rates of the other country rows are displayed
   - Delete icon to delete any row from the table
   - live currency exchange charts corresponding to each country row
 - A graphical view of the live currency exchange rates
   - Dropdowns to select the source and target countries
   - Input field to select the no. of days corresponding to which graph is displayed
   - A graph with days on the horizondal-axis and exchange rates on the y-axis
## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

```bash
npm install
```

To Start Server:

```bash
npm run start
```

To Visit App:

`localhost:3000/` 


## API 
The api used in this project can be found [here](https://github.com/fawazahmed0/currency-api) 

## Packages
- [react-query](https://www.npmjs.com/package/react-query)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [styled-components](https://www.npmjs.com/package/@types/styled-components)
- [react-country-flag](https://www.npmjs.com/package/react-country-flag)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [react-dropdown](https://www.npmjs.com/package/react-dropdown)
- [react-moment](https://www.npmjs.com/package/react-moment)
- [ramda](https://www.npmjs.com/package/ramda)


## Project Structure:
- Src
  - Components
    - Button
      - Button.style.ts
    - Container
      - Container.style.ts
    - Dropdown
      - Dropdown.style.ts
      - DropdownItem.tsx
    - Converter
      - Converter.style.ts
      - Converter.tsx
    - Graph
      - ExchangeGraph.style.ts
      - ExchangeGraph.tsx
    - GraphWrapper
      - GraphWrapper.style.ts
      - GraphWrapper.tsx
    - HeaderRow
      - HeaderRow.tsx
    - Input
      - Input.style.ts
    - Result
      - Result.style.ts
      - Result.tsx
    - Table
      - Table.style.ts
      - Table.tsx
    - TableRow
      -TableRow.tsx
    - Tabs
      - Tabs.style.ts
      - Tabs.tsx
      - Tab.tsx
      - TabButtons.tsx
  - Hooks
    - useCurrency
    - useInfo
  - api
    - currencyApi.tsx
  - utils.tsx
  - types.tsx
  - config.scss
  - App.css
  - App.tsx

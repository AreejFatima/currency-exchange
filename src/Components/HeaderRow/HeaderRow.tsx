import DropdownItem from "../Dropdown/DropdownItem";
import ReactCountryFlag from "react-country-flag";
import React, { useState } from "react";

function HeaderRow(props: any) {
  const { options, onChange, value, flagOptions } = props;
  const [clicked, setClicked] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    setClicked(false);
    onChange(e);
  };
  return (
    <tr className="header-row">
      <td onClick={() => setClicked(true)} className="country-cell">
        {clicked ? (
          <DropdownItem
            options={flagOptions}
            onChange={(e: any) => handleChange(e)}
            value={value}
            placeholder={value ? value : options[140]}
          />
        ) : value ? (
          <div className="country">
            <ReactCountryFlag
              countryCode={value.split("-")[0].slice(0, 2).trim().toUpperCase()}
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              title={value.split("-")[0].slice(0, 2).trim().toUpperCase()}
              className="row-flags"
              style={{
                width: "1.9em",
                height: "1.9em",
                borderRadius: "50%",
              }}
            />
            {value}
          </div>
        ) : (
          options[140]
        )}
      </td>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

export default HeaderRow;

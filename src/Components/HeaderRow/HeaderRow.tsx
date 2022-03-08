import DropdownItem from "../Dropdown/DropdownItem";
import React, { useState } from "react";

function HeaderRow(props: any) {
  const { options, onChange, value } = props;
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
            options={options}
            onChange={(e: any) => handleChange(e)}
            value={value}
            placeholder={value ? value : options[140]}
          />
        ) : value ? (
          <div className="country">{value}</div>
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

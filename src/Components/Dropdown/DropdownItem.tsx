import { DropdownStyle } from "./Dropdown.style";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";


export default function DropdownItem(props:any) {
  let { options, onChange, value, placeholder, title } = props;
  return (
    <DropdownStyle>
      <h3>{title}</h3>
      <Dropdown
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </DropdownStyle>
  );
}

import { FormControl, InputLabel, MenuItem, SelectProps } from "@mui/material";
import Select from "@mui/material/Select";

type TSelectProps = SelectProps & {
  options: string[] | number[];
};

const CustomSelect = ({
  options,
  value,
  onChange,
  label,
  name,
}: TSelectProps): JSX.Element => {
  return (
    // <div className={style.wrapper}>
    //   <label>{label}</label>
    //   <select value={value} onChange={onChange} name={name}>
    //     {options.map((option) => (
    //       <option key={option} value={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select>
    // </div>

    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        name={name}
        labelId="select-label"
        id={`simple-select-${name}`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

import { Box, TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";

import style from "./Input.module.scss";

type TInputProps = TextFieldProps & {
  label: string;
};

const CustomInput = ({ ...props }: TInputProps): JSX.Element => {
  return (
    <Box className={style.wrapper}>
      <TextField id="outlined-basic" variant="outlined" {...props} />
    </Box>
  );
};

export default CustomInput;

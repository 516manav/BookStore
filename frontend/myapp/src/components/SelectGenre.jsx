import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({Genre,setGenre}) {
  

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <FormControl sx={{  width: 240 }} size="small">
      <InputLabel id="demo-select-small-label"> Genre</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Genre}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"Comedey"}>Comedey</MenuItem>
        <MenuItem value={"Thriller"}>Thriller</MenuItem>
        <MenuItem value={"Romanctic"}>Romanctic</MenuItem>
      </Select>
    </FormControl>
  );
}

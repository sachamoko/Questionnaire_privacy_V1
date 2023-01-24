import { Fragment } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { formEl } from "./constants";

const TypeSelector = ({ item, handleElType }) => {
  return (
    <Fragment>
      <FormControl fullWidth>
        <InputLabel id="el-type-label">Type</InputLabel>
        <Select
          labelId="el-type-label"
          id="el-type"
          label="Type"
          value={item.type}
          onChange={(e)=>handleElType(item.id,e.target.value)}
        >
          {formEl &&
            formEl.map((el, key) => (
              <MenuItem key={key} value={el.value}>
                <Box sx={{display:"flex"}}>
                  <Grid sx={{display:"flex", paddingRight:"10px"}}>
                    {el.icon}
                  </Grid>
                  <Grid sx={{display:"flex"}}>
                    {el.label}
                  </Grid>
                </Box>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default TypeSelector;
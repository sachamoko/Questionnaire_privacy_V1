import { Fragment} from "react";
import uuid from "react-uuid";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";
import TypeSelector from "./TypeSelector";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";



const Header = ({ title, description, setTitle, setDescription,addOption,item,handleValue,handleElType,handleOptionValues,deleteOption}) => {
  //Create new option
  const createNewOption = (id) => {
    console.log(id,typeof(id),"this is id")
    const data = {
      id: uuid(),
      value: "",
    };
    addOption(id, data);
  };

  return (
    <Fragment>
      <Box sx={{ mb: 3 }}>
        <Paper elevation={2} sx={{ p: 3, borderTop: "8px solid #9C27B0" }}>
          <TextField
            defaultValue={title}
            onBlur={(e) => setTitle(e.target.value)}
            variant="standard"
            placeholder="Form Title"
            name="title"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            name="description"
            defaultValue={description}
            onBlur={(e) => setDescription(e.target.value)}
            variant="standard"
            placeholder="Pour la Description"
            fullWidth
            sx={{ mb: 2 }}
            multiline
            rows={2}
          />
        </Paper>
        </Box>
    </Fragment>
  );
};

export default Header;

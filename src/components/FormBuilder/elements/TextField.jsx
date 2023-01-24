import { Fragment } from "react";
//Material UI Components
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
//Icons
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FileCopyIcon from '@material-ui/icons/FileCopy';

//Form Elements
import TypeSelector from "../TypeSelector";

const TextFieldInput = ({ item, handleValue, deleteEl, handleRequired, handleElType,duplicateElement }) => {
  return (
    <Fragment>
      <Paper elevation={1}>
        <Box sx={{ textAlign: "center" }}>
          <DragIndicatorIcon
            sx={{ transform: "rotate(-90deg)", cursor: "all-scroll" }}
          />
        </Box>
        <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingTop: 3}}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField
                value={item.value}
                variant="outlined"
                onChange={(e) => handleValue(item.id, e)}
                fullWidth
                required={item.required}
                placeholder="Textfield Label"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TypeSelector item={item} handleElType={handleElType}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
          <Grid>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Textfield Input Field"
                disabled
              />
          </Grid>
        </Box>
        <Divider light />
        <FormGroup row sx={{ alignItems: "center" }}>
          <Tooltip title="Delete Element" aria-label="delete-element">
            <IconButton
              aria-label="delete-element"
              onClick={() => deleteEl(item.id)}
              sx={{ ml: 2 }}
            >
              <DeleteOutlineOutlinedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Duplicate Element" aria-label="duplicate-element">
            <IconButton
              aria-label="duplicate-element"
              onClick={() => duplicateElement(item.id, item.type)}
              sx={{ ml: 2 }}
            >
              <FileCopyIcon color="secondary" />
            </IconButton>
          </Tooltip>

          <FormControlLabel
            control={
              <Switch
                checked={item.required}
                onChange={() => handleRequired(item.id)}
                name="required-field"
                color="secondary"
              />
            }
            label="Required"
            sx={{ ml: 2 }}
          />
        </FormGroup>
      </Paper>
    </Fragment>
  );
};

export default TextFieldInput;

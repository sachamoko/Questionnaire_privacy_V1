import {  Fragment } from "react";
import uuid from "react-uuid";
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
import Button from "@material-ui/core/Button";

//Icons
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FileCopyIcon from '@material-ui/icons/FileCopy';

//Form Elements
import TypeSelector from "../TypeSelector";
import { Typography } from "@material-ui/core";

const RadioGridInput = ({
  item,
  handleValue,
  deleteEl,
  handleRequired,
  handleElType,
  addOption,
  handleOptionValues,
  deleteOption,
  duplicateElement
}) => {

  //Create new Ligne option
  const createNewLigneOption = (id) => {
    console.log(id,typeof(id),"this is id")
    const data = {
      id: uuid(),
      value: "",
    };
    addOption(id, data, true, true);
  };

  //Create new Column option
  const createNewColumnOption = (id) => {
    console.log(id,typeof(id),"this is id")
    const data = {
      id: uuid(),
      value: "",
    };
    addOption(id, data, true, false);
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <Box sx={{ textAlign: "center" }}>
          <DragIndicatorIcon
            sx={{ transform: "rotate(-90deg)", cursor: "all-scroll" }}
          />
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField
                defaultValue={item.value}
                variant="outlined"
                onBlur={(e) => handleValue(item.id, e)}
                fullWidth
                required={item.required}
                placeholder="Radio Label"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TypeSelector item={item} handleElType={handleElType}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 3}}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box>
                <Typography align="center"> Colone </Typography>
              </Box>
              {item.columnoptions &&
                item.columnoptions.length > 0 &&
                item.columnoptions.map((opt, key) => (
                  <Box sx={{display:'flex'}}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder={`Radio Option ${key + 1}`}
                      defaultValue={opt?.value}
                      key={opt?.id}
                      sx={{ mb: 1 }}
                      onBlur={(e) =>
                        handleOptionValues(item?.id, opt?.id, e.target.value, true, false)
                      }
                    />
                    <Tooltip title="Delete Option" aria-label="delete-option">
                      <IconButton
                        aria-label="delete-option"
                        onClick={() => deleteOption(item.id,opt?.id, true, false)}
                        sx={{ ml: 2 }}
                      >
                        <DeleteOutlineOutlinedIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                ))}
              <Button variant="text" onClick={() => createNewColumnOption(item.id)}>
                Add Option
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography align="center"> Ligne </Typography>
              </Box>
              {item.ligneoptions &&
                item.ligneoptions.length > 0 &&
                item.ligneoptions.map((opt, key) => (
                  <Box sx={{display:'flex'}}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder={`Radio Option ${key + 1}`}
                      defaultValue={opt?.value}
                      key={opt?.id}
                      sx={{ mb: 1 }}
                      onBlur={(e) =>
                        handleOptionValues(item?.id, opt?.id, e.target.value, true, true)
                      }
                    />
                    <Tooltip title="Delete Option" aria-label="delete-option">
                      <IconButton
                        aria-label="delete-option"
                        onClick={() => deleteOption(item.id,opt?.id, true, true)}
                        sx={{ ml: 2 }}
                      >
                        <DeleteOutlineOutlinedIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                ))}
              <Button variant="text" onClick={() => createNewLigneOption(item.id)}>
                Add Option
              </Button>
            </Grid>
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
              onClick={() => duplicateElement(item.id,item.type)}
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

export default RadioGridInput;

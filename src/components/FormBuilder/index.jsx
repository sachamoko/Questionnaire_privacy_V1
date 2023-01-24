import { Fragment, useState } from "react";
import uuid from "react-uuid";
import Nestable from "react-nestable";
//Material UI Components
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
//Icons
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
//Form Elements
import {
  TextFieldInput,
  TextArea,
  NumberInput,
  RadioInput,
  DateInput,
  TimeInput,
  RadioGridInput,
} from "./elements";
import { formEl } from "./constants.js";
//Components
import Header from "./Header";

const FormBuilder = () => {
  const initVal = formEl[0]?.value;

  //State
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("text");

  const items = data;

  //Function to add new element
  const addElement = () => {
    const data = {
      id: uuid(),
      value: "",
      type: formData,
      required: false,
    };
    setData((prevState) => [...prevState, data]);
    setFormData(initVal);
  };

  //Function to delete element
  const deleteEl = (id) => {
    setData((prevState) => prevState.filter((val) => val.id !== id));
  };

  //Function to add element at specific pos and return arr
  const addAfter = (elArray, index, newEl) => {
    return [...elArray.slice(0, index+1), newEl, ...elArray.slice(index+1)];
  };

  //Function to duplicate element
  const duplicateElement = (elId, elType) => {
    let elIdx = data.findIndex( (el) =>el.id === elId);
    let newEl = {
      id: uuid(),
      value: null,
      type: elType,
      required: false,
    }
    let newArr = addAfter(data,elIdx,newEl)
    setData(newArr)
  };

  //Function to handle sorting of elements
  const handleOnChangeSort = ({ items }) => {
    setData(items);
  };

  //Function to Handle Input Values
  const handleValue = (id, e) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, value: e.target.value };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Required
  const handleRequired = (id) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, required: !el.required };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Element Type
  const handleElType = (id, type) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, type: type };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Options
  const addOption = (id, newOption, grid = false, ligne = false) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        if (grid){
          if (ligne){
            const objVal = "ligneoptions" in el ? el?.ligneoptions : [];
            return { ...el, ligneoptions: [...objVal, newOption] };
          } else {
          const objVal = "columnoptions" in el ? el?.columnoptions : [];
          return { ...el, columnoptions: [...objVal, newOption] };
        }} else {
        const objVal = "options" in el ? el?.options : [];
        return { ...el, options: [...objVal, newOption] };
      }} else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Date
  const handleDate = (id, dateVal) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, date: dateVal };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Time
  const handleTime = (id, dateVal) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, time: dateVal };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Change Option Values
  const handleOptionValues = (elId, optionId, optionVal, grid = false, ligne = false) => {
    let newArr = data.map((el) => {
      if (el.id === elId) {
        if (grid) {
          if (ligne) {
            el?.ligneoptions && el?.ligneoptions.map((opt) => {
              if (opt.id === optionId) {
                opt.value = optionVal;
                
              }
            });
            return el;
          } else {
            el?.columnoptions && el?.columnoptions.map((opt) => {
              if (opt.id === optionId) {
                opt.value = optionVal;
              }
            });
            return el;
          }
        }
        el?.options &&
          el?.options.map((opt) => {
            if (opt.id === optionId) {
              opt.value = optionVal;
            }
          });
        return el;
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Delete Option
  const deleteOption = (elId, optionId, grid, ligne) => {
    let newArr = data.map((el) => {
      if (el.id === elId) {
        if (grid) {
          if (ligne){
            let newOptions =
              el?.ligneoptions && el?.ligneoptions.filter((opt) => opt.id !== optionId);
              return { ...el, ligneoptions: newOptions };
          } else {
            let newOptions =
              el?.columnoptions && el?.columnoptions.filter((opt) => opt.id !== optionId);
              return { ...el, columnoptions: newOptions };
            
          }
        } else {
        let newOptions =
          el?.options && el?.options.filter((opt) => opt.id !== optionId);
          return { ...el, options: newOptions };
        }
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Render items
  const renderElements = ({ item }) => {
    switch (item.type) {
      case "text":
        return (
          <TextFieldInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            duplicateElement={duplicateElement}
          />
        );
      case "textarea":
        return (
          <TextArea
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            duplicateElement={duplicateElement}
          />
        );
      case "number":
        return (
          <NumberInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            duplicateElement={duplicateElement}
          />
        );
      case "radio":
        return (
          <RadioInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            addOption={addOption}
            handleOptionValues={handleOptionValues}
            deleteOption={deleteOption}
            duplicateElement={duplicateElement}
          />
        );
      case "date":
        return (
          <DateInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            handleDate={handleDate}
            duplicateElement={duplicateElement}
          />
        );
      case "time":
        return (
          <TimeInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            handleTime={handleTime}
            duplicateElement={duplicateElement}
          />
        );
        case "radio-grid":
          return (
            <RadioGridInput
              item={item}
              handleValue={handleValue}
              deleteEl={deleteEl}
              handleRequired={handleRequired}
              handleElType={handleElType}
              addOption={addOption}
              handleOptionValues={handleOptionValues}
              deleteOption={deleteOption}
              duplicateElement={duplicateElement}
            />
          );
      default:
        return <Fragment></Fragment>;
    }
  };

  console.log(data);

  return (
    <Fragment>
      <Grid container spacing={1} direction="row" justifyContent="center">
        <Grid item md={6}>
          <Header
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
          <Nestable
            items={items}
            renderItem={renderElements}
            maxDepth={1}
            onChange={handleOnChangeSort}
          />
        </Grid>
        <Grid item md={1}>
          <Tooltip title="Add Element" aria-label="add-element">
            <IconButton
              aria-label="add-element"
              onClick={addElement}
              sx={{ position: "sticky", top: 30 }}
            >
              <AddCircleOutlineOutlinedIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default FormBuilder;

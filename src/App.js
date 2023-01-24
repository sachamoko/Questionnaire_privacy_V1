import { Fragment } from "react";
import FormBuilder from "@components/FormBuilder";
import "react-nestable/dist/styles/index.css";
import Navbar from './components/FormBuilder/navbar';
import Home from './components/FormBuilder/Home';
import Privacy from './components/FormBuilder/Privacy';
const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Privacy />
      <FormBuilder />
    </Fragment>
  );
};


export default App;

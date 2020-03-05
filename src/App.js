import React from "react";
import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux'
// import store from './store'

//import logo from './logo.svg';
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/navigation';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';

import StateDemo from "./Components/classState";
import ArrMap from "./Components/funcMap";
import PropsDemo from "./Components/funcProps";
import ToggleButton from "./Components/classToggle";
import HOC from "./Components/hoc";
import Form from "./Components/formHandler";
import FetchApi from "./Components/fetchApi";
import PersonList from "./Components/personListApi";
import ShowAlert from "./Components/onClickEventHandler";
import ChangeInput from "./Components/bindingMethod";
import Counter from "./Components/reactCounter";
import Table from "./Components/reactCounterList";
import Products from "./Components/editableTable";
import ExampleClass from "./Components/defaultProps";
//import CheckboxCount from "./Components/countCheckedCheckboxes";
import UpdateContentOnClick from "./Components/updateContentOnClick";
//import ReactBootstrap from "./Components/bootstrapReact";
//import ReactResponsiveCarousel from "./Components/reactResponsiveCarousel"; 
import ReactHook from "./Components/reactHook";
import CounterWithNameAndSideEffect from "./Components/reactHooksSideEffects";
import FormApi from "./Components/reactFormApiCall";
import Location from "./Components/jsonHardcodedFetchData";
import FetchAPIWithLoader from "./Components/usingFetchAPIWithLoader";
import FetchWithSelfOwnedAPI from "./Components/fetchWithSelfOwnedAPI";
import AxiosWithAPI from "./Components/axiosWithAPI";
import AxiosWithOwnAPI from "./Components/axiosWithOwnAPI";
import AxiosAsyncAwaitWithOwnAPI from "./Components/axiosAysncAwaitWithOwnAPI";
import Item from "./Components/handleEvents";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Router>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />}
          <Route path="/" component={Home}/>
        </Switch>
      </Router>


      <StateDemo />
      <ArrMap />
      <PropsDemo />
      <ToggleButton />
      <HOC />
      <Form />
      <FetchApi />
      <PersonList />
      <ShowAlert />
      <ChangeInput />
      <Counter />
      <Table />
      <Products />
      <ExampleClass/>
      {/* <CheckboxCount/> */}
      <UpdateContentOnClick/>
      {/* <ReactBootstrap/> */}
      {/* <ReactResponsiveCarousel/> */}
      <ReactHook/>
      <CounterWithNameAndSideEffect/>
      <FormApi/>
      <Location/>
      <FetchAPIWithLoader/>
      <FetchWithSelfOwnedAPI/>
      <AxiosWithAPI/>
      <AxiosWithOwnAPI/>
      <AxiosAsyncAwaitWithOwnAPI/>
      <Item/>
    </div>
  );
}

export default App;

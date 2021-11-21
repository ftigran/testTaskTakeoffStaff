import React from "react";

import Grid from "@material-ui/core/Grid";

//import Checkbox from '../../components/Checkbox/Checkbox';
import Button from "@material-ui/core/Button";
//import CheckRequirementsModal from '../../components/Modal/CheckRequirementsModal/CheckRequirementsModal'

//import {verify} from '../../components/Modal/SimpleModal/SimpleModal'
//import Form from '../../../../dist/components/Form/Form'
import "./Tabs.scss";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const rowsPrizi = useSelector((state) => state.data.rowsPrizi);
  const rowsTasks = useSelector((state) => state.data.rowsTasks);
  const ColumnsPrizi = useSelector((state) => state.data.ColumnsPrizi);
  const ColumnsTasks = useSelector((state) => state.data.ColumnsTasks);

  return (
    <div className="tabpage">
      <AppBar position="static" className="TabBar">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Выполненные задания" {...a11yProps(0)} />
          <Tab label="Призы" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table columns={ColumnsTasks} rows={rowsTasks} rowsPerPage={5} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table columns={ColumnsPrizi} rows={rowsPrizi} rowsPerPage={5} />
      </TabPanel>
    </div>
  );
}

import Table from "../Table/Table";

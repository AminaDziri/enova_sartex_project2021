import React, { useState,  Fragment  } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";
import { Typography } from "../../components/Wrappers";
import design1 from "D:/PFE2020/src/images/model_v2.png"
import design2 from "D:/PFE2020/src/images/model_v3.png"
import design3 from "D:/PFE2020/src/images/model_v4.png"

// data
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme();
const datatableData = [
  ["PP_spray_v0","WayPoints0.csv"],
  ["PP_spray_v1","WayPoints1.csv"],
  ["PP_spray_v2","WayPoints2.csv"],
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


export default function Tables() {
  const classes = useStyles();
const [values, setValues] = React.useState({
  amount: '',
  password: '',
  weight: '',
  weightRange: '',
  showPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
// State to store uploaded file
const [file, setFile] = React.useState("");  
// Handles file upload event and updates state
function handleUpload(event) {
  setFile(event.target.files[0]);

  // Add code here to upload file to server
  // ...
}
  return (
    <>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={8}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Typography  variant="h2" color="primary"  className={classes.text}>
        Design PP_spray Denim
              </Typography>
              
              <Widget  disableWidgetMenu >
              <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">Enter name of the new design</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <div>
          <button className="btn btn-success" >upload Image_Design</button>
          </div>
          
          <div class="input-field col s6">
          <div>
          <Grid item xs={4}>
               <img src={design1} width="80%"/>
             </Grid>
          <button className="btn btn-success" >upload Trajectory Here</button>
          <input type="file" onChange={handleUpload} />
                <p color="primary">Filename: {file.name},File type: {file.type},File size: {file.size} bytes</p>
          </div>
          </div>
    
        </div>
        
      </div>
      <MUIDataTable
            title="Designs List"
            data={datatableData}
            columns={["Design", "Trajectory"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </form>
  </div>
               </Widget>
              
         
        </Grid>
      </Grid>
        
            </Grid>
            </Grid>
          </Widget>
        </Grid>
     
    
    </>
  );
}

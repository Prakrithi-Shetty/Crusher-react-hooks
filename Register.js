import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  border: {
    paddingTop: 200,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 200
  },
  button: {
    float: "Right",
    marginTop: 20
  },
  space: {
    marginTop: 50,
    textAlign: "center"
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: " 'Roboto', sans-serif",
    "& label": {
      fontWeight: "bold",
      fontSize: 18,
      fontFamily: " 'Roboto', sans-serif"
    }
  }
}));
function Vehicle_register() {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState(" ");
  const [dname, setDname] = useState(" ");
  const [dmobile, setMobile] = useState(" ");
  const [ddocuments, setDdocuments] = useState(" ");
  const [dpicture, setDpicture] = useState(" ");
  const [alert, setAlert] = useState([]);

  return (
    <div className={classes.space}>
      <Typography>Vehicle Registration Page</Typography>
      <div className={classes.border}>
        <TextField
          id="input-with-icon-textfield"
          value={vehicle}
          defaultValue={vehicle}
          name={vehicle}
          floatingLabelBold="vehicle"
          className={classes.textField}
          label="Vehicle Number"
          fullWidth
          onChange={e => setVehicle(e.target.value)}
        ></TextField>
        <TextField
          id="input-with-icon-textfield"
          value={dname}
          defaultValue={dname}
          name="Driver Name"
          className={classes.textField}
          floatingLabelBold="Driver Name"
          label="Driver Name"
          fullWidth
          onChange={e => setDname(e.target.value)}
        ></TextField>
        <TextField
          id="input-with-icon-textfield"
          value={dmobile}
          defaultValue={dmobile}
          name="Driver Mobile Number"
          floatingLabelBold="Driver Mobile Number"
          label="Driver Mobile Number"
          className={classes.textField}
          fullWidth
          onChange={e => setMobile(e.target.value)}
        ></TextField>
        <TextField
          id="input-with-icon-textfield"
          value={dpicture}
          defaultValue={dpicture}
          name="Driver Picture"
          floatingLabelBold="Driver Picture"
          label="Driver Picture"
          className={classes.textField}
          fullWidth
          onChange={e => setMobile(e.target.value)}
        ></TextField>
        <TextField
          id="input-with-icon-textfield"
          value={ddocuments}
          defaultValue={ddocuments}
          name="Driver Documents"
          floatingLabelBold="Driver Documents"
          label="Driver Documents"
          className={classes.textField}
          fullWidth
          onChange={e => setDdocuments(e.target.value)}
        ></TextField>
        <Button variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Vehicle_register;
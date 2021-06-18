import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});
const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
  <AppBar color="primary" position="static">
          <h1>My header</h1>
        </AppBar>

    <div className="App">
      <Button> Press me </Button> {/* //using the material ui component in our project */}
    </div>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
      </Grid>
    </Grid>
  </div>
));
export default UnderstandingBreakpoints;

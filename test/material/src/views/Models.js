import React from "react";
import {
  Button,
  Divider,
  Paper,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  column: {
    flexBasis: '33.33%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  addButton: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Models extends React.Component {

  state = {
    expanded: null,
    open: false,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFetch = () => {
    console.log('------')
    fetch('/api/models/1')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }
    const data = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
      <div>
        {/* <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
        </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
        </Typography>

        </Paper> */}
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Paper style={{ width: '100%' }}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell numeric>Calories</TableCell>
                    <TableCell numeric>Fat (g)</TableCell>
                    <TableCell numeric>Carbs (g)</TableCell>
                    <TableCell numeric>Protein (g)</TableCell>
                    <TableCell numeric>setting (g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell component="th" scope="row">
                          {n.name}
                        </TableCell>
                        <TableCell numeric>{n.calories}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                        <TableCell numeric>
                          <Tooltip
                            id="tooltip-top"
                            title="Edit Task"
                            placement="top"
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <IconButton aria-label="Edit">
                              <Edit />
                            </IconButton>
                          </Tooltip>
                          <Tooltip
                            id="tooltip-top-start"
                            title="Remove"
                            placement="top"
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <IconButton aria-label="Close">
                              <Close
                                className={
                                  classes.tableActionButtonIcon + " " + classes.close
                                }
                              />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>

          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary" onClick={this.handleFetch}>Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>Select your destination of choice</div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>Select your destination of choice</div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>

        <Tooltip
          id="tooltip-top"
          title="Add Task"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            onClick={this.handleClickOpen}
            className={classes.addButton}
            variant="contained"
            color="primary"
          >Primary</Button>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText> */}
              <TextField
                autoFocus
                margin="dense"
                // id="name"
                label="Email Address"
                type="email"
                fullWidth
                required
              />
              <TextField
                margin="dense"
                // id="mark"
                label="mark"
                type="text"
                fullWidth
                required
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
            </Button>
              <Button color="primary" type="submit">
                Subscribe
            </Button>
            </DialogActions>
          </form>
        </Dialog>

      </div>
    )
  }
}

export default withStyles(styles)(Models);
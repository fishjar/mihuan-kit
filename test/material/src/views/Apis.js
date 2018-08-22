import React from "react";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    color: 'blue',
  }
})

class Apis extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <Button variant="contained" color="default">Hello Apis</Button>
    )
  }
}

export default Apis;
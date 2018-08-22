import React from "react";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const styles = theme => ({
  item: {
    textDecoration: 'none',
  },
  activeItem: {
    background: '#e0e0e0',
  },
})

class Sidemenu extends React.Component {
  render() {
    const { routes = [], location, classes } = this.props;
    function activeRoute(routeName) {
      return location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    return (
      <List>
        {
          routes.map((route, key) => {
            if (route.redirect) return null;
            return (
              <NavLink
                to={route.path}
                activeClassName="active"
                className={classes.item}
                key={key}
              >
                <ListItem
                  className={activeRoute(route.path) ? classes.activeItem : ''}
                  button
                >
                  <ListItemIcon>
                    {typeof route.icon === "string" ? (
                      <Icon>{route.icon}</Icon>
                    ) : (
                        <route.icon
                          color="secondary"
                        />
                      )}
                  </ListItemIcon>
                  <ListItemText
                    primary={route.sidebarName}
                    className={classes.itemText}
                  />
                </ListItem>
              </NavLink>
            )
          })
        }

      </List>
    )
  }
}

export default withStyles(styles)(Sidemenu);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EventList from './EventList';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


const EventAdmin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
              <EventList />
        </Grid>
            </Container>
      
    </div>
  );
}

export default EventAdmin;
 

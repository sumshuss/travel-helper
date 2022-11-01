import { useState, useEffect } from 'react';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import { Map, Header, PlaceDetails, List } from './components';
import { getPlacesData } from './components/api';

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        setPlaces(data);
    })
  }, [])

  return (
    <div className="App">
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width : '100%' }}>
              <Grid item xs={12} md={4}>
                <List />
              </Grid>
              <Grid item xs={12} md={8}>
                <Map />
              </Grid>
            </Grid>
        </>
    </div>
  );
}

export default App;

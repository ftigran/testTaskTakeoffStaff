import React, { useRef, Suspense, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';

import "./App.scss";


// const Main = React.lazy(() => import("./pages/main/main"));

const App = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [adressList, setAdressList] = useState(['Москва', 'СПБ', 'Rostov'])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const keyUpHandler = (e) => {
    console.log(!!value)
    if (e.keyCode === 13 && !!value) {
      setAdressList((currentState) => (currentState.concat(value)));
      setValue('');
    }
  }
  const clickHandler = (index) => () => {
    setAdressList((currentState) => (currentState.filter((val, indexOfState) => index !== indexOfState)));
  }
  
  return (
    <>
      <Grid container className="appContainer">
        <Grid item xs={4}>
          <TextField
            label={"Адрес"}
            variant="outlined"
            error={error}
            onKeyUp={keyUpHandler}
            value={value}
            onChange={handleChange}
            />
          {adressList.map((adress, index) => (
          <Grid container  key={index}>
            <Grid item xs={11} >
              {adress}
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth onClick={clickHandler(index)}>X</Button>
            </Grid>
          </Grid>
          ))}
        </Grid>
        <Grid item xs={8}>
          <YMaps>
            <Map
              defaultState={{
                center: [55.751574, 37.573856],
                zoom: 5,
              }}
            >
              <Clusterer
                options={{
                  preset: 'islands#invertedVioletClusterIcons',
                  groupByCoordinates: false,
                }}
              >
                {/* {points.map((coordinates, index) => (
                  <Placemark key={index} geometry={coordinates} />
                ))} */}
              </Clusterer>
            </Map>
          </YMaps>
        </Grid>
      </Grid>
    </>
  );
};

export default App;

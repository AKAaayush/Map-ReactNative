import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const App = () => {
  const [userLocation, setUserLocation] = useState({});
  const Data = () => {
    const URL = 'http://ipwhois.app/json/8.8.4.4';
    fetch(URL)
      .then(responce => responce.json())
      .then(results => {
        // console.log(data)
        // console.log(results);
        setUserLocation(results);
      });
  };
  useEffect(() => {
    Data();
  }, []);
  const location = {
    l: 27.711705,
    ln: 85.32703,
  };
  console.log(location);
  // const l = parseFloat(userLocation.latitude);
  // const ln = parseFloat(userLocation.longitude);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: location.l,
            longitude: location.ln,
          }}>
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default App;

import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [local, setLocal] = useState({
    latitude: 1,
    longitude: 1,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const irParaCristoRedentor = () => {
    setLocal({
      latitude: -22.9519, longitude: -43.1658
    });
  };
  const irParaTajMahal = () => {
    setLocal({
      latitude: 27.1750, longitude: 78.0422
    });
  };
  
  const irParaMachuPicchu = () => {
    setLocal({
      latitude: -13.1631, longitude: -72.5450
    });
  };
  
  const irParaChichenItza = () => {
    setLocal({
      latitude: 20.6830, longitude: -88.5713
    });
  };
  
  const irParaColiseu = () => {
    setLocal({
      latitude: 41.8902, longitude: 12.4922
    });
  };

  const irParaPetra = () => {
    setLocal({
      latitude: 30.3285, longitude: 35.4428
    });
  };

  const irParaMuralha = () => {
    setLocal({
      latitude: 40.4319, longitude: 116.5704
    });
  };



  return (
    <View style={styles.container}>
      <Text style={styles.fonteTitulo}>7 Maravilhas</Text>
      <MapView
        style={styles.mapa}
      >
        <Marker
          coordinate={{ latitude: local.latitude, longitude: local.longitude }}
          title="Marcador"
        />
      </MapView>
      <Button title='Cristo Redentor' onPress={irParaCristoRedentor}></Button>
      <Button title='Taj Mahal' onPress={irParaTajMahal}></Button>
      <Button title='Machu Picchu' onPress={irParaMachuPicchu}></Button>
      <Button title='Chichén Itzá' onPress={irParaChichenItza}></Button>
      <Button title='Coliseu' onPress={irParaColiseu}></Button>
      <Button title='Petra' onPress={irParaPetra}></Button>
      <Button title='Grande Muralha da China' onPress={irParaMuralha}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapa: {
    width: 350,
    height: 350
  },
  fonteTitulo: {
    fontSize: 20
  }
});

export default App;

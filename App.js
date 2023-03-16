import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import FilterFlights from './components/FilterFlights';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState([]);

  const openFilterModal = () => {
    setModalVisible(true)
  };

  const closeFilterModal = () => {
    setModalVisible(false);
  };

  const filterHandler = (departure, arrival) => {
    setFilter(currentFilter => [
      ...currentFilter,
      { departureDestination: departure,
        arrivalDestination: arrival     
      }
    ])
    setModalVisible(false)
  };

  console.log(filter)

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo.png')} style={styles.image} />
      <View style={styles.section}>
        <Pressable 
          // onPress={onDeleteGoal.bind(this, id)}
          android_ripple={{color: '#ddd'}}
          style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.links}>
              <Text style={styles.text}>All flights</Text>
              <MaterialIcons name='flight' size={24} color='#D0D0D0' />
            </View>
        </Pressable>
        <Pressable 
          onPress={openFilterModal}
          android_ripple={{color: '#ddd'}}
          style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.links}>
              <Text style={styles.text}>Filter flights</Text>
              <Ionicons name='filter' size={24} color='#D0D0D0' />
            </View>
        </Pressable>
      </View>
      
      <FilterFlights 
        visible={modalVisible} 
        filterHandler={filterHandler}
        closeFilterModal={closeFilterModal}
      />
     
      <View  style={styles.sectionSearch}>
        <View style={styles.search}>         
          {/* <Text style={styles.text}>Search flights</Text> */}
          <TextInput style={styles.textInput} placeholder='Search flights...'></TextInput>
        </View> 
        <Pressable 
          // onPress={onDeleteGoal.bind(this, id)}
          android_ripple={{color: '#ddd'}}
          style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.button}>
              <FontAwesome5 name='search-location' size={24} color='#D0D0D0' />
            </View>
        </Pressable>      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88a598ff',
    alignItems: 'center',
    paddingVertical: 50,
    // justifyContent: 'center',
  },
  image: {
    height: 159,
    width: 300,
    margin: 20
  },
  links: {
    flexDirection: 'row',
    padding: 16,
    color: '#D0D0D0',
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#656e7eff',
    width: '40%'
  },
  text: {
    marginHorizontal: 16,
    fontSize: 16,
    color: '#D0D0D0',
    width: '100%'
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }, 
  search: {
    flexDirection: 'row',
    width: '70%',
    padding: 16,
    color: '#D0D0D0',
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#656e7eff',
  },
  sectionSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    marginHorizontal: 16,
    color: '#D0D0D0',
    borderRadius: 8,
    fontSize: 18
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#656e7eff',
    padding: 16,
  }
});

import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { MaterialIcons } from '@expo/vector-icons';

const FilterFlights = ({ visible, filterHandler, closeFilterModal }) => {
  const [departure, setSelectedDeparture] = useState('');
  const [arrival, setSelectedArrival] = useState('');
  // console.log('depature:', departure)
  // console.log('arrival:', arrival)

  const locationHandler = () => {
    filterHandler(departure, arrival);
    setSelectedDeparture('');
    setSelectedArrival('');
  };

  const data = [
    {key: 'Stockholm', value: 'Stockholm'},
    {key: 'Oslo', value: 'Oslo'},
    {key: 'Amsterdam', value: 'Amsterdam'},
  ];

  return (
    <Modal visible={visible} animationType='slide' style={styles.modal}>
      <View>
        <Text><MaterialIcons name="flight-takeoff" size={24} color="black" /></Text>
        <SelectList 
          placeholder='Select depature location'
          data={data}
          setSelected={(val) => setSelectedDeparture(val)}
        />
        <Text><MaterialIcons name="flight-land" size={24} color="black" /></Text>
        <SelectList 
          placeholder='Select arrival location'
          data={data}
          setSelected={(val) => setSelectedArrival(val)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={locationHandler} 
            title='☑' 
            color='#243045'
          />
        </View>
        <View style={styles.button}>
          <Button
          onPress={closeFilterModal} 
          title='☒'
          color='#243045' 
        />
        </View>
      </View>
    </Modal>
  )
}

export default FilterFlights;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#a2c5b5ff',
    alignItems: 'center',
    paddingVertical: 50,
    height: '50%',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '10%',
    marginHorizontal: 8,
    fontSize: 30,
    borderRadius: 20,
  },
});

/*
  const [open, setOpen] = useState(false);
  const [valueDeparture, setValueDeparture] = useState(null);
  const [valueArrival, setValueArrival] = useState(null);
  const [items, setItems] = useState([
    {label: 'Stockholm', value: 'stockholm'},
    {label: 'Oslo', value: 'oslo'},
    {label: 'Amsterdam', value: 'amsterdam'},
  ]);
  console.log('departure:', valueDeparture);
  console.log('arrival:', valueArrival);

  const addFilter = () => {

  }

    <Modal visible={visible} animationType='slide'>
      <View>
        <Text><MaterialIcons name="flight-takeoff" size={24} color="black" /></Text>
        <DropDownPicker
          open={open}
          value={valueDeparture}
          items={items}
          setOpen={setOpen}
          setValue={setValueDeparture}
          // setItems={setItems}
        />
      </View>
      <View>
        <MaterialIcons name="flight-land" size={24} color="black" />
        <DropDownPicker
          open={open}
          value={valueArrival}
          items={items}
          setOpen={setOpen}
          setValue={setValueArrival}
          // setItems={setItems}
        />
      </View>
    </Modal>
    */
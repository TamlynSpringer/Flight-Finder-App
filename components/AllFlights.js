import { FlatList, StyleSheet, Text, View } from 'react-native';
import {data} from '../data/flightData';
import { AntDesign } from '@expo/vector-icons';

const AllFlights = () => {
  // console.log('data:', data)
  const item = ({item}) => {
    return (
      <View style={{flexDirection: 'row', margin: 8}}>
        <View style={styles.text}>
          <Text>{item.flight_id}</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.departureDate}</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.departureTime}:00</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.arrivalDate}</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.arrivalTime}:00</Text>
        </View>
      </View>
    )
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Flights between Oslo & Stockholm</Text>
      <View style={{flexDirection: 'row', margin: 12}}>
        <Text style={styles.text}>Flight code</Text>
        <Text style={styles.text}>Depart <AntDesign name="calendar" size={12} color="black" /> </Text>
        <Text style={styles.text}>Depart <AntDesign name="clockcircleo" size={12} color="black" /> </Text>
        <Text style={styles.text}>Arrive <AntDesign name="calendar" size={12} color="black" /> </Text>
        <Text style={styles.text}>Arrive <AntDesign name="clockcircleo" size={12} color="black" /> </Text>
      </View>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
};

export default AllFlights;

const styles = StyleSheet.create({
  text: {
    width: '20%', 
    alignItems: 'center'
  }
});
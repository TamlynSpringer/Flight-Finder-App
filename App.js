import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
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
              <MaterialIcons name="flight" size={24} color='#fff' />
            </View>
        </Pressable>
        <Pressable 
          // onPress={onDeleteGoal.bind(this, id)}
          android_ripple={{color: '#ddd'}}
          style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.links}>
              <Text style={styles.text}>Filter flights</Text>
              <Ionicons name="filter" size={24} color='#fff' />
            </View>
        </Pressable>
      </View>
     
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
              <FontAwesome5 name="search-location" size={24} color='#fff' />
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
    paddingVertical: 40,
    // justifyContent: 'center',
  },
  image: {
    height: 106,
    width: 200,
    margin: 20
  },
  links: {
    flexDirection: 'row',
    padding: 16,
    color: '#fff',
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#656e7eff',
    width: '60%'
  },
  text: {
    marginHorizontal: 16,
    fontSize: 16,
    color: '#fff',
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
    color: '#fff',
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
    color: '#fff',
    borderRadius: 8,
    fontSize: 18
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#656e7eff',
    padding: 16,
  }
});

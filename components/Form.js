// import { Formik} from 'formik';
import { Formik } from 'formik';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Form = () => {
  const [items, setItems] = useState([
    {label: 'Stockholm', value: 'stockholm'},
    {label: 'Oslo', value: 'oslo'},
    {label: 'Amsterdam', value: 'amsterdam'},
  ]);
  return (
    <View>
      <Formik
        initialValues={{departure: '', arrival: ''}}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formikProps) => (
          <View>
            <DropDownPicker
              placeholder='Select departure location'
              onChangeValue={formikProps.handleChange('departure')}
              value={formikProps.values.departure}
              items={items}
              setItems={setItems}
            />
            <DropDownPicker
              placeholder='Select arrival location'
              onChangeValue={formikProps.handleChange('arrival')}
              value={formikProps.values.arrival}
            />
            <Button title='Find' onPress={formikProps.handleSubmit}/>
          </View>
        )}

      </Formik>
    </View>
  )
}

export default Form
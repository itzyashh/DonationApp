import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Touchable,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import Header from '../components/Header';
import Tab from '../components/Tab';
import Badge from '../components/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBackward,
  faCancel,
  faCross,
  faEdit,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import SingleDonationItem from '../components/SingleDonationItem';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../redux/reducers/User';

const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.firstName);
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const onPress = () => {
    dispatch(updateFirstName(updateName));
    setEdit(false);
  };
  console.log(edit);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={{flexDirection: 'row', gap: 30}}>
        <Text>{name}</Text>
        <TouchableOpacity
          disabled={edit}
          onPress={() => {
            setEdit(!edit);
          }}>
          <FontAwesomeIcon icon={faEdit} />
        </TouchableOpacity>
      </View>
      {edit && (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TextInput
            value={updateName}
            onChangeText={setUpdateName}
            placeholder="Enter your name"
          />
          <View>
            <Button title="Update" onPress={onPress} />
            <Button
              color={'red'}
              title="Cancel"
              onPress={() => setEdit(!edit)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

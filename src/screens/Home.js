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

import {signOutUser} from '../../api/user';
import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import {
  resetCategories,
  setSelectedCategoryId,
} from '../../redux/reducers/Categories';
import {
  resetDonations,
  setSelectedDonationId,
} from '../../redux/reducers/Donations';
import {reset} from '../../redux/reducers/User';
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

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingContainer: {},
  greeting: {
    color: '#636776',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    letterSpacing: 0.32,
    marginBottom: verticalScale(5),
  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBarContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  highlightedImageContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    maxHeight: verticalScale(160),
  },
  tabContainer: {
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(24),
  },
  tabItem: {
    marginRight: horizontalScale(10),
  },
  donationsItemContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default Home;

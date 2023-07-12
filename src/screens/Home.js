import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
import HighlightedImage from '../components/HighlightedImage';
import SearchBar from '../components/SearchBar';
import SingleDonationItem from '../components/SingleDonationItem';
import Tab from '../components/Tab';
import {Routes} from '../navigation/Routes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  // dispatch(resetCategories());
  // dispatch(resetDonations());
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [donationsItems, setDonationsItems] = React.useState([]);
  const [categoryPage, setCategoryPage] = React.useState(1);
  const [categoryList, setCategoryList] = React.useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = React.useState(false);
  const categoryPageSize = 4;

  React.useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationsItems(items);
  }, [categories.selectedCategoryId]);

  React.useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Header key={1} title={user.displayName + ' 👋'} />
          </View>
          <View>
            <Image
              resizeMode="contain"
              source={{uri: user.profilePicture}}
              style={styles.image}
            />
            <TouchableOpacity
              onPress={async () => {
                await signOutUser();
                dispatch(reset());
              }}>
              <Header type={3} title={'Logout'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder={'Search'}
            onPress={value => console.log(value)}
          />
        </View>
        <View style={styles.highlightedImageContainer}>
          <HighlightedImage onPress={() => console.log('pressed')} />
        </View>
        <View style={styles.header}>
          <Header type={2} title={'Select Category'} />
        </View>
        <View style={styles.tabContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => {
              return (
                <View style={styles.tabItem}>
                  <Tab
                    title={item.name}
                    key={item.categoryId}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                    onPress={() =>
                      dispatch(setSelectedCategoryId(item.categoryId))
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        {donationsItems.length > 0 && (
          <View style={styles.donationsItemContainer}>
            {donationsItems.map((item, index) => {
              const badgeTitle = categories.categories.filter(
                value => categories.selectedCategoryId === value.categoryId,
              )[0].name;
              return (
                <View
                  style={styles.singleDonationItem}
                  key={item.donationItemId}>
                  <SingleDonationItem
                    BadgeTitle={badgeTitle}
                    donationItemId={item.donationItemId}
                    onPress={selectedDonationId => {
                      dispatch(setSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.donationItemDetails, {
                        badgeTitle,
                      });
                    }}
                    title={item.name}
                    uri={item.image}
                    item={item}
                    price={parseFloat(item.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
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

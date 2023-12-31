import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {DarkTheme, FONTS, SIZES} from '../../constant/themes';
import DashboardStack from '../DashboardStack';
import home_icon from '../../assets/icons/home_icon';
import profileIcon from '../../assets/icons/profile-icon';
import {Icon, Text} from '../../components';
import cartIcon from '../../assets/icons/cart-icon';
import massageIcon from '../../assets/icons/massage-icon';
import msgIcon from '../../assets/icons/msg-icon';
import {COLORS} from '../../constant';

const tabScreens = [
  {
    id: '1',
    name: 'Home',
    component: DashboardStack,
    activeIcon: home_icon,
    title: 'Home',
  },
  {
    id: '2',
    name: 'Profile',
    component: DashboardStack,
    activeIcon: profileIcon,
    title: 'Profile',
  },
  {
    id: '3',
    // name: "Cart",
    // component: QRStack,
    activeIcon: cartIcon,
    title: 'Cart',
  },
  {
    id: '4',
    name: 'Chats',
    component: DashboardStack,
    activeIcon: msgIcon,
    title: 'Chat',
  },
];
const TabBarComponent = ({navigation}) => {
  const [selected_tab, setSelectedTab] = useState(tabScreens[0]);
  return (
    <View style={styles.tab_bar}>
      <FlatList
        data={tabScreens}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedTab(item);
                navigation.navigate(item.name);
              }}
              style={
                selected_tab === item
                  ? styles.active_tab_view
                  : styles.inactive_tab_view
              }>
              <Icon name={item.activeIcon} />
              {selected_tab === item ? (
                <Text
                  text={selected_tab?.title}
                  style={{...FONTS.Bold13, marginLeft: SIZES.padding2}}
                />
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  inactive_tab_view: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    margin: SIZES.padding2,
    alignItems: 'center',
  },
  active_tab_view: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    margin: SIZES.padding2,
    backgroundColor: DarkTheme.primary,
    borderRadius: SIZES.padding2,
    opacity: 0.4,
  },
  tab_bar: {
    height: 75,
    backgroundColor: DarkTheme.text_input,
    justifyContent: 'flex-start',
  },
});

import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button, Icon, InputField, Text} from '../../components';
import {styles} from './index.style';
import notificationIcon from '../../assets/icons/notification-icon';
import {SIZES} from '../../constant';
import searchbarIcon from '../../assets/icons/searchbar-icon';
import filterIcon from '../../assets/icons/filter-icon';
import {DarkTheme} from '../../constant/themes';

const Headers = ({
  style,
  icon,
  searchbar = false,
  onPressIcon,
  heading_Text,
  onpressFilters,
  filter = false,
  searchbar_style
}) => {
  return (
    <View style={[styles.main_view, style]}>
      <View style={styles.sub_view}>
        <View style={{width: '60%'}}>
          <Text text={heading_Text} style={styles.title} />
        </View>
        <TouchableOpacity
          style={{paddingLeft: SIZES.padding * 2}}
          onPress={onPressIcon}>
          <Icon name={notificationIcon} />
        </TouchableOpacity>
      </View>
      {searchbar && (
        <View style={styles.sub_view}>
          <InputField
            icon={searchbarIcon}
            placeholder={'What do you want to order?'}
            style={[styles.search, searchbar_style]}
          />
          {filter && (
            <TouchableOpacity
              onPress={onpressFilters}
              style={styles.filter_btn}>
              <Icon name={filterIcon} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Headers;

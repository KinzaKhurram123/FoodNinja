import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button, Icon, InputField, Text} from '../../components';
import {styles} from './index.style';
import {SIZES} from '../../constant';
import {DarkTheme} from '../../constant/themes';
import {filter_icon, notification_icon} from '../../assets/icons';
import serachbar_icon from '../../assets/icons';

const Headers = ({
  style,
  icon,
  searchbar = false,
  onPressIcon,
  heading_Text,
  onpressFilters,
  filter = false,
  searchbar_style,
  onpressSearch,
  isEdit
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
          <Icon name={notification_icon} />
        </TouchableOpacity>
      </View>
      {searchbar && (
        <View style={styles.searchView}>
          <TouchableOpacity style={styles.search} onPress={onpressSearch}>
            <InputField
              icon={serachbar_icon}
              isEdit={isEdit}
              placeholder={'What do you want to order?'}
              style={[styles.search, searchbar_style]}
            />
          </TouchableOpacity>
          {filter && (
            <TouchableOpacity
              onPress={onpressFilters}
              style={styles.filter_btn}>
              <Icon name={filter_icon} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Headers;

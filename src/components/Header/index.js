import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button, Icon, InputField, Text} from '../../components';
import {styles} from './index.style';
import notificationIcon from '../../assets/icons/notification-icon';

const Headers = ({style, icon, onPressIcon, heading_Text}) => {
  return (
    <View style={[styles.main_view, style]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '60%'}}>
          <Text text={heading_Text} style={styles.title} />
        </View>
        <TouchableOpacity onPress={onPressIcon}>
          <Icon name={notificationIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headers;

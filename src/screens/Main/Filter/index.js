import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components';
import Headers from '../../../components/Header';
import ImageContainer from '../../../components/ImageContainer';
import { styles } from './index.style';

const Filter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Headers
            heading_Text={'Find Your Favorite Food'}
            searchbar={true}
            searchbar_style={{width: '100%'}}
          />
          <View style={styles.main_view}>
            <Text text={'Type'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'Restaurant'} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'Menu'} style={styles.filter_text} />
              </TouchableOpacity>
            </View>
            <Text text={'Location'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'1 km'} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'2 Km '} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} style={styles.filter_text} />
              </TouchableOpacity>
            </View>
            <Text text={'Food'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'1 km'} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'2 Km '} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} style={styles.filter_text} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} style={styles.filter_text} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} style={styles.filter_text} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Filter;

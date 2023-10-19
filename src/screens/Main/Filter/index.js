import {TouchableOpacity, SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import ImageContainer from '../../../components/ImageContainer';
import Headers from '../../../components/Header';
import {Text} from '../../../components';

const Filter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <ScrollView showsHorizontalScrollIndicator={false }>
          <Headers
            heading_Text={'Find Your Favorite Food'}
            searchbar={true}
            searchbar_style={{width: '100%'}}
          />
          <View style={styles.main_view}>
            <Text text={'Type'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'Restaurant'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'Menu'} />
              </TouchableOpacity>
            </View>
            <Text text={'Location'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'1 km'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'2 Km '} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} />
              </TouchableOpacity>
            </View>
            <Text text={'Food'} style={styles.text} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'1 km'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'2 Km '} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_view}>
                <Text text={'10 Km '} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Filter;

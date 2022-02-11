import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DATA from '../Data.js';

const Check = () => {};
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#60B939'}}
    style={{backgroundColor: '#F5F6F8'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: 'black', margin: 8, fontSize: 15}}>
        {route.key == 'first'
          ? '5 People Following'
          : 'Following ' + 5 + ' People'}
      </Text>
    )}
  />
);
const Item1 = ({name, avatar}) => (
  <View style={styles.item}>
    <Image source={avatar} style={styles.avatar} />
    <Text style={styles.nameText1}>{name}</Text>
  </View>
);
const Item2 = ({name, avatar, id_status}) => (
  <View style={styles.item}>
    <Image source={avatar} style={styles.avatar} />
    <Text style={styles.nameText2}>{name}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{id_status}</Text>
    </TouchableOpacity>
  </View>
);
const renderItem1 = ({item}) => <Item1 name={item.name} avatar={item.avatar} />;
const renderItem2 = ({item}) => (
  <Item2 name={item.name} avatar={item.avatar} id_status={item.id_status} />
);
const FirstRoute = () => (
  <View style={styles.scene}>
    <FlatList
      style={{marginTop: 15}}
      data={DATA}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
    />
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
    <FlatList
      style={{marginTop: 15}}
      data={DATA}
      renderItem={renderItem2}
      keyExtractor={item => item.id}
    />
  </View>
);

const initialLayout = {width: '100%'};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Page6 = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: ''},
    {key: 'second', title: ''},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  item: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  nameText1: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'SF Pro Text',
    right: 175,
  },
  nameText2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: -70,
    fontFamily: 'SF Pro Text',
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#666666',
    borderRadius: 29,
    width: 90,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {Page6};

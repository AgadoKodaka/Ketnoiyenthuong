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
import {TabView, SceneMap} from 'react-native-tab-view';
import DATA from '../Data.js';

// const [selectedId1, setSelectedId1] = React.useState(false);
// const [selectedId2, setSelectedId2] = React.useState(false);

// const [selectedId3, setSelectedId3] = React.useState(false);

// const [selectedId4, setSelectedId4] = React.useState(false);

// const [selectedId5, setSelectedId5] = React.useState(false);

const Check = () => {};
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

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '5 people following'},
    {key: 'second', title: 'Following 5 people'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
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
export default App;

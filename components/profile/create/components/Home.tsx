import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { colorpicker } from '../../../../utilities';
import Svg, { Heart } from '../../../svgs';
// import {} from '@react-navigation/bottom-tabs';
const example = [
  {
    data: "Pfizer has made a new development in fighting the pandemic, they've successfully tested a new vaccine with an efficacy of 95%.",
    name: 'Manoj',
    type: 'health',
    id: '0',
  },
  {
    data: 'Results of the 2020 US election are here and Joe Biden is our new president!',
    name: 'srinivas',
    type: 'social',
    id: '1',
  },
];

const Post = ({ data, name, type }) => {
  const [fillheart, setfillheart] = useState('#6D7187');
  const [fillbookmark, setfillbookmark] = useState('#6D7187');

  return (
    <View style={[styles.outer]}>
      <View style={[styles.left]}>
        <View
          style={[{ backgroundColor: colorpicker(type) }, styles.leftin]}
        ></View>
      </View>
      <View style={styles.right}>
        <View style={[styles.upper]}>
          <View style={[styles.name]}>
            <Text style={[styles.nametext]}>You</Text>
          </View>
          <View style={[styles.data]}>
            <Text style={[styles.datatext]}>{data}</Text>
          </View>
        </View>
        <View style={[styles.lower]}>
          <View style={[styles.icon]}>
            <TouchableOpacity
              onPress={() => {
                if (fillheart == '#6D7187') {
                  setfillheart('#FF729F');
                } else {
                  setfillheart('#6D7187');
                }
              }}
            >
              <Heart fillheart={fillheart} />
            </TouchableOpacity>
            <Text
              style={[
                {
                  color: '#6D7187',
                  paddingHorizontal: 4,
                  fontSize: 10,
                  paddingTop: 3,
                },
              ]}
            >
              12k
            </Text>
          </View>
          <View style={[styles.button]}>
            <Text style={[{ fontSize: 9, fontWeight: '500' }]}>
              View Feedbacks
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const NewPost: React.FunctionComponent<MaterialTopTabNavigationProp> = ({
  navigation,
}) => {
  return (
    <View style={{ backgroundColor: '#1F2232' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewEle');
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#6D7187',
            fontSize: 15,
            margin: 10,
          }}
        >
          Share your voice ...
        </Text>
        <View style={{ height: 70 }}></View>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          {/* <Svg type="Pen" />
          <Svg type="Clipboard" />
          <Svg type="Polls" /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <NewPost navigation={navigation} />
      </View>
      <FlatList
        data={example}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post name={item.name} data={item.data} type={item.type} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E42',
    flex: 1,
  },
  outer: {
    paddingVertical: 20,
    flex: 3.5,
    backgroundColor: '#2A2E42',
    flexDirection: 'row',
    marginTop: 10,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftin: {
    flex: 1,
    marginLeft: 10,
    width: 23,
  },
  right: {
    flex: 6,
    paddingHorizontal: 10,
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 1,
    flexDirection: 'row',
  },
  nametext: {
    color: 'white',
    marginBottom: 3,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
    lineHeight: 14.5,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginTop: 6,
    flexDirection: 'row',
    textAlign: 'justify',
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#ffb30f',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {},
  data: {},
});
export default Home;

import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { LineChart } from 'react-native-chart-kit';
 
const datas = [
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(124, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Infrastructure'], // optional
  },
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [90, 45, 18, 80, 49, 43],
        color: (opacity = 1) => `rgba(134, 65, 200, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Social'], // optional
  },
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [10, 25, 38, 40, 69, 73],
        color: (opacity = 1) => `rgba(144, 45, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Technology'], // optional
  },
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [60, 45, 18, 70, 89, 89],
        color: (opacity = 1) => `rgba(134, 68, 249, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Environment'], // optional
  },
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [0, 10, 28, 50, 79, 88],
        color: (opacity = 1) => `rgba(104, 65, 234, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Social Distancing'], // optional
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get('screen').width;

const categories = [
  { id: 0, op: 'Infrastructure' },
  { id: 1, op: 'Social' },
  { id: 2, op: 'Technology' },
  { id: 3, op: 'Environment' },
  { id: 4, op: 'Social Distancing' },
];

const Back = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 54 46" fill="none">
      <Path
        d="M12.4997 19.2003C12.7997 19.2003 13.0997 19.2003 13.3997 19.2003C25.5997 19.2003 37.6997 19.2003 49.8997 19.2003C51.7997 19.2003 53.0997 20.1003 53.5997 21.6003C54.2997 24.0003 52.6997 26.0003 50.1997 26.1003C49.4997 26.1003 48.6997 26.1003 47.9997 26.1003C36.5997 26.1003 25.0997 26.1003 13.6997 26.1003C13.3997 26.1003 12.9997 26.1003 12.6997 26.1003C12.5997 26.2003 12.5997 26.3003 12.4997 26.3003C12.6997 26.5003 12.9997 26.6003 13.1997 26.8003C17.4997 30.8003 21.8997 34.8003 26.1997 38.9003C27.5997 40.2003 27.8997 41.7003 27.1997 43.2003C26.4997 44.6003 25.0997 45.4003 23.5997 45.1003C22.8997 44.9003 22.0997 44.6003 21.5997 44.1003C15.6997 38.8003 9.89969 33.4003 4.19969 28.0003C3.19969 27.0003 2.09969 26.1003 1.09969 25.1003C-0.400313 23.6003 -0.300313 21.5003 1.19969 20.1003C7.99969 13.8003 14.7997 7.40031 21.6997 1.00031C23.7997 -0.899693 26.6997 0.000307322 27.4997 2.70031C27.7997 3.90031 27.4997 5.00031 26.5997 5.90031C23.9997 8.40031 21.3997 10.8003 18.7997 13.3003C16.8997 15.1003 14.8997 16.9003 12.9997 18.7003C12.7997 18.8003 12.5997 18.9003 12.3997 19.0003C12.3997 19.0003 12.3997 19.1003 12.4997 19.2003Z"
        fill="white"
      />
    </Svg>
  );
};
const Filled = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 62 62" fill="none">
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#FFB30F"
        stroke="#FFB30F"
        strokeWidth="8"
      />
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#FFB30F"
        stroke="#FFB30F"
        strokeWidth="8"
      />
      <Path
        d="M27.9345 35.8881C29.1417 34.2254 30.1765 32.9322 31.2113 31.4542C33.6258 28.1288 36.0403 24.6186 38.4548 21.2932C39.1446 20.3695 39.8345 20 40.8693 20C41.7316 20.1847 42.249 20.739 42.5939 21.6627C42.9388 22.4017 42.5939 23.1407 42.249 23.8797C38.2823 29.422 34.1432 34.9644 30.1765 40.6915C29.1417 41.9847 27.762 42.1695 26.5548 41.061C24.3128 38.8441 21.8983 36.4424 19.6562 34.2254C19.1388 33.4864 18.7939 32.5627 19.1388 31.639C19.4838 30.7153 20.1736 30.161 20.8635 29.9763C21.7258 29.7915 22.4157 30.3458 22.933 30.9C24.6577 32.378 26.2099 34.0407 27.9345 35.8881Z"
        fill="#1F2232"
      />
    </Svg>
  );
};
const Unfilled = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 62 62" fill="none">
      <Circle cx="31" cy="31" r="27" stroke="#6D7187" strokeWidth="8" />
    </Svg>
  );
};

const Options = ({ item, selected, setstate, id, setSelected }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 14,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          width: 200,
          fontFamily: 'Poppins-Regular',
          color: '#6D7187',
        }}
      >
        {item}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setstate(datas[id]);
        setSelected(id)
        }}
      >
        {selected == id ? <Filled /> : <Unfilled />}
      </TouchableOpacity>
    </View>
  );
};

const Graph = ({ navigation }) => {
  const [selected, setSelected] = useState(0);
  const [data, setdata] = useState(datas[0]);
  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Back />
        </TouchableOpacity>
      </View>
      <View>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-Regular',
            color: 'white',
            paddingHorizontal: 10,
          }}
        >
          Filter
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Poppins-Regular',
            color: '#6D7187',
            paddingHorizontal: 10,
          }}
        >
          Select 3 at max.
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {categories.map((item, key) => {
          return (
            <Options
              item={item.op}
              key={key}
              id={item.id}
              selected={selected}
              state={data}
              setstate={setdata}
              setSelected={setSelected}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Graph;

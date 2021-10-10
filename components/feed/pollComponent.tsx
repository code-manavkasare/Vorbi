import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
let i= true;
let count = 0;
const PollComponent = ({setbuttoncolor,list}) => {
  const [selectedValue, setSelectedValue] = useState([0, 0, 0, 0, 0]); 
  if(count != 0 && i  )
    {
        i=false;
        setbuttoncolor('white');
    }
  const CustomOption = () => {
    return (
      <View style={styles.buttoncont}>
        
        {list.map((item, key) => {
          return (
            <TouchableOpacity
              style={
                selectedValue[key] == 1 ? styles.touched : styles.untouched
              }
              activeOpacity={0.7}
              key={key}
              onPress={() => {
                let x = [];
                let j = 0;
                count ++;
                selectedValue.forEach(() => {
                  if (j != key) {
                    j++;
                    x.push(0);
                  } else {
                    j++;
                    x.push(1);
                  }
                });
                setSelectedValue(x);
              }}
            >
              <Text style={selectedValue[key] == 1 ? styles.selected:styles.unselected}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CustomOption />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touched: {
    backgroundColor: '#FFB30F',
    flexBasis: '48%',
    height: 30,
    borderRadius: 30,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  untouched: {
    backgroundColor: '#363C5A',
    flexBasis: '48%',
    height: 30,
    borderRadius: 30,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncont: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  selected: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  unselected: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});

export default PollComponent;

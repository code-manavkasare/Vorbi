import React, { useEffect, useState, useCallback, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Surveypageitem from './surveypageitem';
import { firestore, auth } from '../../firebase';
import Theme from '../../theme';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../App';
import theme from '../../theme';
import { Line1, Line2, Line3 } from './Lines';
import { UserContext } from '../../utils/context';
const items = [];
const Main: React.FunctionComponent<
  BottomTabScreenProps<TabsParamList, 'Survey'>
> = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [item, setitem] = useState([]);
  const [refresh, setrefresh] = useState(true);
  useEffect(() => {
    servercall();
  }, []);

  const servercall = useCallback(async () => {
    await firestore
      .collection('areaCodes')
      .doc(user.pinCode)
      .collection('parameters')
      .get()
      .then((snap) => {
        let items = [];
        snap.forEach((x) => {
          let y = x.data();
          items.push(y);
        });
        setitem([]);
        setitem(items);
      })
      .catch((error) => {
        console.log(error);
      });
    setrefresh(false);
  }, []);

  const Graph = () => {
    return (
      <Svg width="30" height="30" viewBox="0 0 75 75" fill="none">
        <Path
          d="M60.4805 23.7316C65.2869 23.7316 70.0933 23.7316 74.8997 23.7316C74.8997 40.7543 74.8997 57.8772 74.8997 74.8999C70.0933 74.8999 65.2869 74.8999 60.4805 74.8999C60.4805 57.9773 60.4805 40.8545 60.4805 23.7316Z"
          fill="white"
        />
        <Path
          d="M63.1842 5.40721C61.5821 5.40721 60.1802 5.40721 58.7784 5.40721C58.7784 3.60481 58.7784 1.90254 58.7784 0.100134C62.4833 -0.100134 66.0881 0.100134 69.793 0C71.6956 0 72.6969 1.10147 72.6969 3.00401C72.6969 6.40855 72.7971 9.81308 72.6969 13.2176C70.8945 13.2176 69.1922 13.2176 67.2897 13.2176C67.2897 11.9159 67.2897 10.7143 67.2897 9.21228C57.1762 18.6248 47.263 28.1375 37.2497 37.6502C35.6475 39.1522 34.8465 39.2523 32.9439 38.4513C21.9292 33.3445 11.0147 28.4379 0 23.5314C0.700935 21.9292 1.502 20.227 2.20294 18.6248C12.6168 23.231 22.9306 27.9372 33.3445 32.6435C33.8451 32.8438 34.2457 33.0441 34.7463 32.5434C44.259 23.3311 53.7717 14.5194 63.1842 5.40721Z"
          fill="white"
        />
        <Path
          d="M17.3235 75C12.5171 75 7.71071 75 2.9043 75C2.9043 63.785 2.9043 52.47 2.9043 41.255C7.71071 41.255 12.5171 41.255 17.3235 41.255C17.3235 52.47 17.3235 63.6849 17.3235 75Z"
          fill="white"
        />
        <Path
          d="M46.1614 52.9706C46.1614 60.2804 46.1614 67.5901 46.1614 75C41.355 75 36.5486 75 31.7422 75C31.7422 67.6903 31.7422 60.3805 31.7422 52.9706C36.5486 52.9706 41.355 52.9706 46.1614 52.9706Z"
          fill="white"
        />
      </Svg>
    );
  };
  return (
    <View style={styles.outer}>
      <View style={styles.linesContainer}>
        <View style={styles.line1}>
          <Line1 />
        </View>
        <View style={styles.line2}>
          <Line2 />
        </View>
        <View style={styles.line3}>
          <Line3 />
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.graphcont}>
          <View style={styles.graphbutt}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('GraphItem');
              }}
            >
              <Graph />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.qualityindexcont}>
          <Text style={styles.indexbottom}>Lifestyle Quality Index</Text>
          <Text style={styles.indexval}>6.4</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomtop}>
          <Text style={styles.yourareaheading}>
            {user.state} - {user.pinCode}
          </Text>
        </View>
        <View style={styles.listcont}>
          <FlatList
            data={item}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => {
                  setrefresh(true);
                  servercall();
                }}
              />
            }
            keyExtractor={(item, index) => {
              return `${item.type}index`;
            }}
            renderItem={({ item }) => {
              return (
                <Surveypageitem
                  completedBy={item.completedBy}
                  type={item.type}
                  title={item.type}
                  progression={parseFloat(item.progress)}
                  navigation={navigation}
                />
              );
            }}
          />
          {/* <TouchableOpacity
            onPress={() => {
              auth.signOut().then(() => {
                navigation.navigate('Landing')
              });
            }}
          >
            <Graph />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
export default Main;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: Theme.background.primary100,
    flex: 1,
  },
  top: {
    flex: 2,
  },
  bottom: {
    backgroundColor: Theme.background.primary200,
    flex: 6,
    paddingLeft: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  graphcont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  graphbutt: {
    marginTop: 20,
    marginRight: 30,
  },
  qualityindexcont: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  indexval: {
    fontSize: 50,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  indexbottom: {
    fontSize: 20,
    color: '#969AB0',
    fontFamily: 'Poppins-Regular',
  },
  yourareaheading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  listcont: { flex: 1 },
  bottomtop: {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  linesContainer: {
    position: 'absolute',
    width: theme.width,
  },
  line1: {
    position: 'absolute',
    top: theme.height * 0.15,
  },
  line2: {
    position: 'absolute',
    top: 30,
  },
  line3: {
    position: 'absolute',
    top: theme.height * 0.125,
    right: 0,
  },
});

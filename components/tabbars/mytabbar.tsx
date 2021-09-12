import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Theme from '../../theme';
import { Index, News, Profile, Feed, Notifications } from '../svgs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
const MyTabBar: React.FunctionComponent<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [bgcolor, setbgcolor] = useState('#1f2232');
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{ backgroundColor: bgcolor }}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          {
            /* <View style={styles.survey} key={route.name}>
                 </View> */
          }
          if (route.name == 'Survey') {
            return (
              <View style={styles.survey} key={route.name}>
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  //style={styles.inner}
                >
                  <Index isFocused={isFocused} />
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {route.name == 'News' && <News isFocused={isFocused} />}
                {route.name == 'Feed' && <Feed isFocused={isFocused} />}
                {route.name == 'Notifications' && (
                  <Notifications isFocused={isFocused} />
                )}
                {route.name == 'Survey' && <Index isFocused={isFocused} />}
                {route.name == 'Profile' && <Profile isFocused={isFocused} />}

                {/* <Text
                  style={[
                    { color: isFocused ? 'white' : '#B2B5C6' },
                    styles.text,
                  ]}
                >
                  {label}
                </Text> */}
              </TouchableOpacity>
            );
            // }
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.background.primary300,
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  survey: {
    width: 80,
    height: 80,
    transform: [{ translateY: -30 }],
    borderRadius: 40,
    backgroundColor: Theme.background.primaryYellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.background.primary100,
    borderWidth: 6,
  },
  icon: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: Theme.background.white,
    paddingBottom: 20,
  },
});
export default MyTabBar;

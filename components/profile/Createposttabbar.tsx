import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../theme';
function MyTabBar({ state, descriptors, navigation, sceneContainerStyle }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  } 

  const Stats = ({ color }) => {
    return (
      <Svg width="30" height="30" viewBox="0 0 102 93" fill="none">
        <Path
          d="M101.775 92.9999C93.2754 92.9999 84.7754 92.9999 76.2754 92.9999C76.2754 92.3894 76.2754 91.9824 76.2754 91.5754C76.2754 63.2888 76.2754 35.0021 76.2754 6.71553C76.2754 2.44201 78.7359 0 83.657 0C87.4596 0 91.2622 0 95.0649 0C99.3149 0 101.999 2.44201 101.999 6.30853C101.999 34.7986 101.999 63.0853 101.999 91.5754C101.775 91.9824 101.775 92.3894 101.775 92.9999Z"
          fill={color}
        />
        <Path
          d="M63.5264 92.9999C55.0263 92.9999 46.75 92.9999 38.25 92.9999C38.25 92.3894 38.25 91.9824 38.25 91.5754C38.25 71.0218 38.25 50.4683 38.25 29.9147C38.25 25.6412 41.6053 23.1992 45.4079 23.4027C49.4342 23.6062 53.4606 23.4027 57.2632 23.4027C60.8421 23.4027 63.5264 25.8447 63.5264 29.1007C63.5264 50.0613 63.5264 71.0218 63.5264 91.9824C63.5264 92.1859 63.5264 92.5929 63.5264 92.9999Z"
          fill={color}
        />
        <Path
          d="M25.2764 93.0001C16.7763 93.0001 8.50001 93.0001 0 93.0001C0 92.5931 0 91.9826 0 91.5755C0 82.6215 0 73.464 0 64.5099C0 60.4399 2.46053 58.2014 6.93422 58.2014C10.9605 58.2014 14.9869 58.2014 19.0132 58.2014C22.5921 58.2014 25.2764 60.6434 25.2764 63.8994C25.2764 73.464 25.2764 82.825 25.2764 92.3896C25.2764 92.3896 25.2764 92.5931 25.2764 93.0001Z"
          fill={color}
        />
      </Svg>
    );
  };
  const Saved = ({ color }) => {
    return (
      <Svg width="30" height="30" viewBox="0 0 42 56" fill="none">
        <Path
          d="M20.9995 39.4C18.1995 41.7 15.4995 44 12.6995 46.3C10.1995 48.4 7.69952 50.5 5.09952 52.6C4.09952 53.4 3.19952 53.4 2.49952 52.6C2.19952 52.3 2.09952 51.9 1.99952 51.5C1.89952 51.3 1.99952 51 1.99952 50.7C1.99952 35.3 1.99952 19.9 1.99952 4.5C1.99952 2.6 2.59952 2 4.49952 2C15.4995 2 26.5995 2 37.5995 2C38.9995 2 39.9995 2.6 39.9995 4.5C39.9995 19.9 39.9995 35.4 39.9995 50.8C39.9995 51.2 39.9995 51.6 39.8995 51.9C39.4995 53.1 37.9995 53.5 36.9995 52.6C32.1995 48.6 27.3995 44.6 22.5995 40.6C22.0995 40.2 21.5995 39.8 20.9995 39.4Z"
          fill={color == '#6D7187' ? 'none' : color}
          stroke={color}
          strokeWidth="6"
          strokeMiterlimit="10"
        />
      </Svg>
    );
  };
  const PostAdd = ({ color }) => {
    return (
      <Svg
        width="30"
        height="30"
        viewBox="0 0 79 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 46.5C0 36.4706 0 26.2588 0 16.2294C0 9.3 3.2765 4.37647 9.46544 1.45882C11.4677 0.364706 13.6521 0 15.8364 0C31.6728 0 47.3272 0 62.9816 0C71.3548 0 78.0899 6.38235 78.818 14.7706C78.818 15.6824 79 16.5941 79 17.5059C79 37.2 79 56.8941 79 76.4059C79 82.7882 76.2696 87.5294 70.8088 90.8118C68.6244 92.2706 66.2581 93 63.7097 93C47.5092 93 31.3088 93 14.9263 93C11.2857 93 8.19124 91.5412 5.46083 89.3529C1.63825 85.7059 0 81.5118 0 76.2235C0 66.3765 0 56.3471 0 46.5ZM9.28341 46.5C9.28341 56.5294 9.28341 66.5588 9.28341 76.4059C9.28341 80.7824 12.1959 83.7 16.5645 83.7C31.8548 83.7 47.1452 83.7 62.4355 83.7C63.1636 83.7 63.8917 83.7 64.6198 83.5176C67.8963 82.6059 69.7166 80.0529 69.7166 76.4059C69.7166 56.5294 69.7166 36.4706 69.7166 16.5941C69.7166 15.8647 69.7166 15.1353 69.5346 14.4059C68.8064 11.1235 66.076 9.3 62.6175 9.3C47.3272 9.3 32.0369 9.3 16.7465 9.3C12.1959 9.3 9.46544 12.0353 9.46544 16.5941C9.28341 26.6235 9.28341 36.4706 9.28341 46.5Z"
          fill={color}
        />
        <Path
          d="M60.9804 49.9647C46.6002 49.9647 32.22 49.9647 17.8398 49.9647C17.8398 47.4118 17.8398 44.8588 17.8398 42.3059C32.22 42.3059 46.6002 42.3059 60.9804 42.3059C60.9804 44.8588 60.9804 47.4118 60.9804 49.9647Z"
          fill={color}
        />
        <Path
          d="M61.162 62.9119C61.162 65.4648 61.162 68.0178 61.162 70.5707C46.7818 70.5707 32.4017 70.5707 18.0215 70.5707C18.0215 68.0178 18.0215 65.4648 18.0215 62.9119C32.4017 62.9119 46.5998 62.9119 61.162 62.9119Z"
          fill={color}
        />
        <Path
          d="M60.9789 21.7C60.9789 24.2529 60.9789 26.8058 60.9789 29.3588C54.79 29.3588 48.601 29.3588 42.4121 29.3588C42.4121 26.8058 42.4121 24.2529 42.4121 21.7C48.601 21.7 54.79 21.7 60.9789 21.7Z"
          fill={color}
        />
      </Svg>
    );
  };

  return (
    <View
      style={[
        { backgroundColor: Theme.background.primary100, height: 70 },
      ]}
    >
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
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                borderBottomColor: isFocused ? '#ffb30f' : '#1f2232',
                borderBottomWidth: 5,
              }}
            >
              <View style={[styles.text]}>
                {route.name === 'NewPost' && (
                  <Text
                    style={{
                      color: isFocused ? '#ffb30f' : '#6D7187',
                      fontSize: 28,
                    }}
                  >
                    Post
                  </Text>
                )}
                {
                  // <Stats color={isFocused ? '#ffff' : '#6D7187'} />
                  route.name === 'NewSurvey' && (
                    <Text
                      style={{
                        color: isFocused ? '#ffb30f' : '#6D7187',
                        fontSize: 28,
                      }}
                    >
                      Survey
                    </Text>
                  )
                }
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.background.primary100,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  survey: {
    flex: 1,
    height: 80,
    transform: [{ translateY: -30 }],
    borderRadius: 50,
    backgroundColor: '#ffb30f',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1f2232',
    borderWidth: 6,
  },
  icon: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
});
export default MyTabBar;

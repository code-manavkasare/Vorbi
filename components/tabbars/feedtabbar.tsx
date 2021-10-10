import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function MyTabBar({ state, descriptors, navigation, sceneContainerStyle }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[{ backgroundColor: '#1f2232', height: 50 }]}>
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
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  { color: isFocused ? 'white' : '#6D7187' },
                  styles.text,
                ]}
              >
                {label}
              </Text>
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
    backgroundColor: '#1f2232',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

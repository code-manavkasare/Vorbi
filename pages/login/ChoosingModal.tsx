import React from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Checkmark from '../../components/icons/Checkmark';
import CrossCircle from '../../components/icons/CrossCircle';
import theme from '../../theme';
import styles from './styles';

export default function ({ visible, setVisible, data, onSelect, selected }) {
  const handleOnPress = (item) => {
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleOnPress(item)}
    >
      <Text style={styles.listItemLabel}>{item}</Text>
      {selected === item && <Checkmark color={theme.text.Yellow} />}
    </TouchableOpacity>
  );

  const handleExit = () => setVisible(false);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.listHeadingContainer}>
          <Text style={styles.listHeading}></Text>
          <TouchableWithoutFeedback onPress={handleExit}>
            <View>
              <CrossCircle />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
}

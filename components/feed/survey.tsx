import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { firestore } from '../../firebase';
import Surveyitem from '../survey/surveyitem';

const data = [];


const Post = () => {
  const [items, setitems] = useState([]);
  const [refresh, setrefresh] = useState(false);
  
  useEffect(() => {
    servercall();
  }, []);
  useEffect(() => {
    setrefresh(false)
  }, [items]);
  const servercall = useCallback(async () => {
    await firestore
      .collection('surveys')
      .get()
      .then((snap) => {
        snap.forEach((x) => {
          let y = x.data();
          y.id = x.id;
          data.push(y);
        });
        setitems(data);
      });
  }, []);
  return (
    <View style={[styles.container]}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
          servercall()
          
            }}
          />
        }
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Surveyitem
              type={item.type}
              data={item.data}
              topic={item.topic}
              list={item.list}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Post;
const posts = [
  {
    type: 'Poll',
    data: 'do you support the huawei ban',
    topic: 'technology',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
  {
    type: 'Rating',
    data:
      'how much do you support the Governments decision to introduce the Farmers Bill',
    topic: 'social',
    list: [],
  },
  {
    type: 'Rating',
    data: 'Rate the health facilities available in your locality',
    topic: 'health',
    list: [],
  },
  {
    type: 'Poll',
    data: 'What do you think govt needs to work on in your locality',
    topic: 'infrastructure',
    list: ['hospitals', 'roads', 'markets', 'safety'],
  },
  {
    type: 'Rating',
    data: 'Rate the cleanliness in your locality',
    topic: 'environment',
    list: [],
  },
  {
    type: 'Poll',
    data: 'Do you think demonetisation was the right step for indian economy',
    topic: 'social',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
];
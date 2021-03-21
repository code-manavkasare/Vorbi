import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import Post from '../../components/feed/post';
import { firestore } from '../../firebase';
const FeedPost = () => {
  const [posts, setposts] = useState([]);
  const [refresh, setrefresh] = useState(true);
  const servercall = useCallback(async () => {
    let data = [];
    await firestore
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .get()
      .then((snap) => {
        snap.forEach((x) => {
          let y = x.data();
          y.id = x.id;
          data.push(y);
        });
        setposts(data);
        setrefresh(false);
      });
  }, []);
  useEffect(() => {
    servercall();
  }, []);
  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <FlatList
        data={posts}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={async () => {
              servercall();
            }}
          />
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post name={item.name} data={item.data} type={item.type} />;
        }}
      />
    </View>
  );
};
export default FeedPost;

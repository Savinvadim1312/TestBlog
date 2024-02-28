import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getAllPosts } from '../repository/posts';
import { Link } from 'expo-router';
import { Post } from '../types/Post';

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());

  // useEffect(() => {
  //   getAllPosts().then(setPosts);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Link href={`/${item.slug}`} asChild>
              <Pressable
                style={{
                  backgroundColor: 'white',
                  marginVertical: 10,
                  padding: 10,
                  gap: 10,
                }}
              >
                <Text style={{ color: 'gray' }}>{item.date}</Text>
                <Text style={{ fontWeight: '500', fontSize: 16 }}>
                  {item.title}
                </Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

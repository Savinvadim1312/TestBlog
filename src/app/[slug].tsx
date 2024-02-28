import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Head from 'expo-router/head';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';

import Markdown from 'react-native-markdown-display';
import { getAllPosts, getPost } from '../repository/posts';

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const posts = getAllPosts();
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return posts.map((post) => ({ slug: post.slug }));
}

const PostPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  // useEffect(() => {
  //   getPost(slug).then(setPost);
  // }, []);

  if (!post) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          height: '100%',
        }}
        contentContainerStyle={{
          width: '100%',
          maxWidth: 960,
          backgroundColor: 'white',
          padding: 20,
          marginHorizontal: 'auto',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginBottom: 30,
          }}
        >
          {post.title}
        </Text>
        <Image
          source={{ uri: `/thumbnails/${post.thumbnail}` }}
          style={{ width: '100%', aspectRatio: 16 / 9 }}
        />
        {post?.content && <Markdown>{post.content}</Markdown>}
      </ScrollView>
    </>
  );
};

export default PostPage;

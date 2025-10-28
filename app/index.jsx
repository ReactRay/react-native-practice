import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import job from '@/assets/images/job3.jpg';

export default function Index() {
  return (
    <View
      style={container}
    >
      <Image source={job} style={image} />
      <Text>welcome to my project!</Text>
      <Text>Hard work before talent!</Text>
    </View>
  );
}


const { container, image } = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  }
})

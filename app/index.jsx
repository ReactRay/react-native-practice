import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import job from '@/assets/images/job3.jpg';
import { useRouter } from "expo-router";

export default function Index() {


  const router = useRouter();
  return (
    <View
      style={container}
    >
      <Image source={job} style={image} />
      <Text>welcome to my project!</Text>
      <Text>Hard work before talent!</Text>

      <TouchableOpacity style={button} onPress={() => router.push('/notes')}>
        <Text>
          get started
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const { container, image, button } = StyleSheet.create({
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
  },
  button: {
    backgroundColor: '#a98f70ff',
    padding: 10,
    borderRadius: 5
  }
  ,
})

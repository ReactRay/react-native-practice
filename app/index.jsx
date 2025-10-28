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
      <View style={textContainer}>

        <Text style={text} >welcome to my project!</Text>
        <Text style={text}>Hard work before talent!</Text>
      </View>


      <TouchableOpacity style={button} onPress={() => router.push('/notes')}>
        <Text>
          get started
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const { text, textContainer, container, image, button } = StyleSheet.create({
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
    backgroundColor: '#ceb99fff',
    padding: 10,
    borderRadius: 5
  }
  ,
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    letterSpacing: 2,
    fontFamily: 'CURSIVE',
  }
})

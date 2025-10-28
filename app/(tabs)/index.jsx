import { ImageBackground } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import job1 from "@/assets/images/job3.jpg";

console.log('hi')
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={job1}
        style={styles.image}
      >
        <Text style={styles.text}>Coffe shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333'
  },
  text: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center'
    , backgroundColor: 'rgba(0,0,0,0.7)'
  }
  ,
  image: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})
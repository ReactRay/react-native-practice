import { ImageBackground } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

        <Link href={'/explore'} style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>

        </Link>

      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333',

  },
  text: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center'
    , backgroundColor: 'rgba(0,0,0,0.7)',
    marginBottom: 120
  }
  ,
  image: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,

  },

})
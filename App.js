import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const data = require('./tp.json');

export default function App() {

  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <View style={styles.container}>
        {data.map((elt) => (
          <View style={styles.eachContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: elt.img }} style={styles.image} />
              <View style={styles.nameContainer}>
                <Text style={styles.title}> {elt.title} </Text>
                <View style={styles.descContainer}>
                  <Text style={styles.description}>{elt.desc}</Text>
                </View>
              </View>
            </View>
          </View>
        ))
        }
      </View >
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  eachContainer: {
    padding: 25,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'column',
  },
  descContainer: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    textAlign: 'center'
  },
  description: {
    textAlign: 'justify'
  }
})

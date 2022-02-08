import * as React from 'react';
import { Text, ScrollView, ImageBackground } from 'react-native'
import { Card, Title, Paragraph, TouchableOpacity } from 'react-native-paper';
import Background from './etc/back1.png'

const imagebg = Background
const IndexScreen = ({navigation}) => (
  <>
  <ScrollView style={{backgroundColor: '#5DADE2'}}>
   <Card style={styles.card} onPress={() => navigation.navigate ("TierSS")}>
 <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/jT6grZV/sss.png' }} />
     <Title style={styles.title}>Tier SS+
      </Title>
    </Card.Content>
  </Card>

   <Card style={styles.card} onPress={() => navigation.navigate ("TierS")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/Pr46Qvq/s1.png' }} />
      <Title style={styles.title}>Герои Tier S
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("TierA")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/NthfY6q/a2.png' }} />
      <Title style={styles.title}>Герои Tier A
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("TierB")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/vHXcDv3/b1.png' }} />
      <Title style={styles.title}>Герои Tier B
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("TierC")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/DtBLKmj/c1.png' }} />
      <Title style={styles.title}>Герои Tier C
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("TierD")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/cyy5jkj/d1.png' }} />
      <Title style={styles.title}>Герои Tier D
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("TierG")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/rZcsBpD/g1.png' }} />
      <Title style={styles.title}>Герои Tier G
      </Title>
    </Card.Content>
  </Card>
  <Card style={styles.card} onPress={() => navigation.navigate ("AboutScreen")}>
   <Card.Content style={styles.item} >
    <Card.Cover style={styles.body_cover} source={{ uri: 'https://i.ibb.co/0txy3F5/about2.png' }} />
      <Title style={styles.title}>О приложении
      </Title>
    </Card.Content>
  </Card>
  </ScrollView>

  </>
);

const styles = {
  body: {
    flex: 1,
    borderWidth: 1
  },
  body_cover: {
    marginBottom: 5,
    width: 100,
    height: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  card: {
    backgroundColor: '#5DADE2',
    borderRadius: 0,
    borderWidth: 1
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#2471A3',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 3,
    borderWidth: 1,
    height: 80,
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
    padding: 5,
    fontSize: 36,
    width: 280,
    maxWidth: "100%",
    height: '90%',
  },
  paragraph: {
  },
}

export default IndexScreen;
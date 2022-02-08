import * as React from 'react';
import { Text, ScrollView } from 'react-native'
import { Card, Title, Paragraph, TouchableOpacity } from 'react-native-paper';

const AboutScreen = ({navigation}) => (
  <>
  <ScrollView style={{backgroundColor: '#800000'}}>
  <Text>В тир SS+ входят наиболее сильные и выбивающиеся из баланса герои. Тир S про героев </Text>
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
    width: 75,
    height: 50,
    borderRadius: 2,
  },
  card: {
    backgroundColor: '#800000', 
    borderRadius: 0,
    borderWidth: 1
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#af3118',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 3,
    borderWidth: 1,
    height: 80
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
    fontFamily: 'OpenSans'
  },
  paragraph: {
  }
}

export default AboutScreen;
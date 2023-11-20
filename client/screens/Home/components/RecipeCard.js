import { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default RecipeCard = ({_id, name, likes, time, img}) => {
  const [isLiked, setIsLiked] = useState(false);

  const onPress = () => {
    setIsLiked((isLiked) => !isLiked);
  }

  return(
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: img || 'https://theme-assets.getbento.com/sensei/cc1b795.sensei/assets/images/catering-item-placeholder-704x520.png' }}
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={onPress} style={[styles.iconBox, styles.red]}>
          {
            isLiked ? (<FontAwesome5 name="heart"  solid color='red'/>)
            :< FontAwesome5  name="heart" outlined color='red'/> 
          }
           <Text style={styles.iconText}>{likes}</Text>
        </TouchableOpacity>
        <View style={styles.iconBox}>
          <FontAwesome5 name="clock" outlined/>
          <Text style={styles.iconText}>{time.hours} hr {time.minutes} min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 168,
    borderRadius: 16,
    borderColor: '#414337',
    borderWidth: 4,
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 11,
    marginVertical: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  image: {
    width: '100%', 
    height: 88,
    width: 120,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#414337',
  },
  iconRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:2
  },
  iconText: {
    fontSize: 12,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  red: {
    color : 'red'
  }
});
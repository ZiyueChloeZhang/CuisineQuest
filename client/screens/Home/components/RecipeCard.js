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
        source={{ uri: img }}
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={onPress} style={[styles.iconText, styles.red]}>
          {
            isLiked ? (<FontAwesome5 name="heart" size={24} solid color='red'/>)
            :< FontAwesome5 size={24} name="heart" outlined color='red'/> 
          }
           <Text>{likes}</Text>
        </TouchableOpacity>
        <View style={styles.iconText}>
          <FontAwesome5 name="clock" size={24} outlined/>
          <Text>{time.hours} hr {time.minutes} min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    gap: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%', 
    height: 150,
    width: 200,
    borderRadius: 10,
  },
  iconRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  red: {
    color : 'red'
  }
});
import { View, FlatList, StyleSheet, Text, Pressable, Image} from "react-native"

const Tag = ({name, setLocation}) => {
  const onPress = () => {
    setLocation(name)
  }

  return (
    <Pressable style={styles.tag} onPress={onPress}>
       <Image
        style={styles.image}
        source={{ uri: `https://source.unsplash.com/random/?${name}/` }}
      />
      <Text  style={styles.tagLabel}>{name}</Text>
    </Pressable>
  )
}

const TagList = ({tagNames, setLocation}) => {
  return (      
    <View style={styles}>
      <FlatList
        horizontal
        style={styles}
        data={tagNames}
        renderItem={({ item }) => <Tag name={item} setLocation={setLocation}/>} 
        keyExtractor={item => item}
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    gap: 6,
  },
  tagLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  }

});

export default TagList
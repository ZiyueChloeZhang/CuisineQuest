import { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { fetchRecipes } from '../../../api/recipes';

  const DATA = [
  {
    _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Boba',
    likes: 100,
    time: {
      hours: 0,
      minutes: 1
    },
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg"
  },
  {
    _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Boba',
    likes: 100,
    time: {
      hours: 0,
      minutes: 1
    },
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg"
  },
];

const RecipeCardList = () => {

  return (
    <View style={styles.cardListContainer}>
          <FlatList
            style={styles.cardList}
            horizontal={true}
            data={DATA}
            renderItem={({item}) => <RecipeCard {...item} />}
            keyExtractor={item => item._id}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  cardListContainer: {
    height : 300
  }
});

export default RecipeCardList;

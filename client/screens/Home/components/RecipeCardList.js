import { View, FlatList } from 'react-native';
import RecipeCard from './RecipeCard';

const RecipeCardList = ({isLoading, data}) => {
  return (
    <View>
          <FlatList
            data={data}
            renderItem={({item}) => <RecipeCard {...item} />}
            keyExtractor={item => item._id}
            numColumns={2}
          />
    </View>
  )
}

export default RecipeCardList;

import { StyleSheet, View, FlatList } from 'react-native';
import RecipeCard from './screens/Home/components/RecipeCard';
import RecipeCardList from './screens/Home/components/RecipeCardList';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <RecipeCardList/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardListContainer: {
    height : 300
  }
});

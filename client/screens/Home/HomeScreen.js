import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import RecipeCardList from './components/RecipeCardList';
import TagList from './components/TagList';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const locations = ['Italy', 'America', 'Greece', 'Peru', 'China', 'Korea', 'Japan'];

  const [location, setLocation] = useState(locations[0]);

  const getRecipes = async (location) => {
    try {
      const response = await fetch(`http://128.189.208.94:8000/recipes?location=${location}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes(location);
  }, [location]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello!</Text>
      </View>
      <View style={styles.cuisineContainer}>
        <Text style={styles.sectionHeader}>Cuisines</Text>
        <TagList tagNames={locations} setLocation={setLocation}/>
        <RecipeCardList isLoading={isLoading} data={data}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#F5F1E3',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  cuisineContainer: {
    gap:12,
    marginVertical: 12,
  }
});

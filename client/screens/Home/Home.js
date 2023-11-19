import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchRecipes } from '../../api/recipes';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const fetchedRecipes = await fetchRecipes();
      setRecipes(fetchedRecipes);
    };

    loadRecipes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      {/* You can add more details like image, description, etc. here */}
    </View>
  );

  return (
    <View>Hello</View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default HomeScreen;

import { View, Button} from "react-native";

const OpeningScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export default OpeningScreen;
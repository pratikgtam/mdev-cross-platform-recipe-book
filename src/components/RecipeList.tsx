import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  timeToPrepare: number;
  description: string;
}

interface Props {
  recipes: Recipe[];
}

const RecipeList: React.FC<Props> = ({ recipes, navigation }: any) => {
  const renderRecipeItem = ({ item }: { item: Recipe }) => {
    return (
      <View style={styles.recipeContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.time}>{`${item.timeToPrepare} mins`}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={recipes}
      numColumns={1}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderRecipeItem}
    />
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default RecipeList;

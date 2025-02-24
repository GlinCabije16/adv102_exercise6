import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} 
        style={styles.avatar}
      />

     
      <Text style={styles.name}>Angeline Cabije</Text>
      <Text style={styles.email}>angeline.cabije@hcdc.edu.ph</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFD700", 
    padding: 20,
    borderRadius: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    

  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#000", 
  },
  name: {
    fontSize: 30, 
    fontWeight: "bold",
    color: "blue", 
  },
  email: {
    fontSize: 18, 
    color: "blue", 
    fontWeight: "bold",
    marginTop: 4,
    
  },
});

export default UserInfo;

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, artist, image } = props.album;
  return (
    <View style={styles.container}>    
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
        <View style={styles.content}>
          <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  image: {
    height: 300,
    width: null,
    borderRadius: 15,
  },
  text: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 40,
  },
  artist: {
    fontSize: 14,
    fontWeight: '400',
  },
});

export default AlbumDetail;
import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions,ScrollView } from "react-native";

export default function ContentBanner({component, page}) {

  if (!component) {
    return null;
  }
  const { text, image: imageRef, title } = component;
  const image = imageRef && page.getContent(imageRef);

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={{ uri: image.getUrl() }}
        style={styles.image}
      >
        
        <View style={styles.centerView}>
        <Text style={styles.title}>{page.rewriteLinks(title)}</Text>
        </View>
        
      </ImageBackground>
        <Text style={styles.content}>{text}</Text>
    </View>
  );
  // return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
const dimensions = Dimensions.get("window");
const imageHeight = dimensions.height ;
const imageWidth = dimensions.width;
const maxWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:200
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    // fontFamily: 'Avenir Next',
   // lineHeight: 50
  },
  content: {
    color: "#444",
    fontSize: 18,
    fontWeight: "600",
    height:50
    // fontFamily: 'Avenir Next',
    //lineHeight: 50
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch',
    justifyContent: "center"
  }, 
  centerView: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: maxWidth,
    resizeMode: 'stretch',
    marginTop: -1,
    marginLeft: -1
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: "cover", // or 'stretch'
  //   height:'100%'
  // }
});


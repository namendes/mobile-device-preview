import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import { BrManageContentButton, BrProps } from "@bloomreach/react-sdk";


function Banner(props) {
  const { document: documentRef } = props.component.getModels();
  const document = documentRef && props.page.getContent(documentRef);

  if (!document) {
    return null;
  }

  const { content, image: imageRef, link: linkRef, title } = document.getData();
  const image = imageRef && props.page.getContent(imageRef);
  const link = linkRef && props.page.getContent(linkRef);

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={{ uri: image.getUrl() }}
        style={styles.spotifyImage}
      >
        <View style={styles.centerView}>
        <Text style={styles.title}>{props.page.rewriteLinks(title)}</Text>
         
        </View>
      </ImageBackground>
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
    flex: 1
  },
  title: {
    color: "#000",
    fontSize: 22,
    fontWeight: "600",
    // fontFamily: 'Avenir Next',
    lineHeight: 50
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
  spotifyImage: {
    height: 100,
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

export default Banner;

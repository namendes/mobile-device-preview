import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrComponent, BrPage, BrPageContext } from "@bloomreach/react-sdk";
import axios from "axios";
import Banner from "../components/Banner";
import NativeBrContainerBox from "./NativeBrContainerBox";
import {TYPE_CONTAINER_BOX} from '@bloomreach/spa-sdk';
//if(Platform.OS !== "web"){
  import 'react-native-url-polyfill/auto';
//}

const mapping = {  
  [TYPE_CONTAINER_BOX]: NativeBrContainerBox,
Banner, 
} ;

export const withBloomreachHOC = PassedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const token = null;
      if(Platform.OS === "web"){
        token = window.location.search;
      }

      this.state = {
        configuration: {
          httpClient: axios,
          cmsBaseUrl: "http://localhost:8080/site",
          request: {
            path: "/"
          }
        },
        token: token
      };
    }

    changeRoute = (url, token) => {
      if (token) {
        this.setState({ token: token });
        this.setState(prevState => ({
          configuration: {
            // object that we want to update
            ...prevState.configuration, // keep all other key-value pairs
            request: {
              path: `${url}${this.state.token}`
            }
          } 
        }));
      }else{
        this.setState(prevState => ({
          configuration: {
            // object that we want to update
            ...prevState.configuration, // keep all other key-value pairs
            request: {
              path: `${url}`
            }
          } 
        }));
      }
      
      
     // console.log(this.state.configuration);
    };

    render() {
      return (
        <BrPage configuration={this.state.configuration} mapping={mapping}>
          <PassedComponent {...this.props} changeRoute={this.changeRoute} />
        </BrPage>
      );
    }
  };
};

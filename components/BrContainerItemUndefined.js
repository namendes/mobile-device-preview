import React from 'react';
import { ContainerItem } from '@bloomreach/spa-sdk';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";

export function BrContainerItemUndefined(props) {
  return <Text>Component "{props.component.getType()}" is not defined.</Text>;
}

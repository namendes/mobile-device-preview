import React from 'react';
import {  View, Fragment } from "react-native";

export default function NativeBrContainerBox(props) {
    return props.children;
      
    // tslint:disable:jsx-no-multiline-js
    // <div className={props.page.isPreview() ? 'hst-container' : undefined}>
    //   {React.Children.map(props.children, child => (
    //     <div className={props.page.isPreview() ? 'hst-container-item' : undefined}>
    //       {child}
    //     </div>
    //   ))}
    // </div>
    // tslint:enable:jsx-no-multiline-js
  ;
}

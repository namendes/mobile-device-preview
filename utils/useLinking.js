import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function(containerRef) {
  
  const linking = useLinking(containerRef, {
    prefixes: ["/"],
    config: {
      sreens: {
        Home: "home",
        Init: "init"
      }
    }
  });
  return linking;
}

import React from "react";
import { Provider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import userTheme from "./src/infrastructure/theme";
import {SafeArea} from "./src/components/SafeAreaView";
import { StatusBar } from "expo-status-bar";
import Index from "./src/Index";

const App = () => {
  return(
  <SafeAreaProvider>
    <Provider theme={userTheme}>
      <SafeArea>
        <Index />
        <StatusBar style="auto" />
  </SafeArea>
  </Provider>
  </SafeAreaProvider>
  )
}

export default App;
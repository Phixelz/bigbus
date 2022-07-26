import { StatusBar } from 'expo-status-bar';
import { Welcome } from './src/pages/Welcome';
import AppLoading from "expo-app-loading";

import { ThemeProvider } from 'styled-components';
import theme from './src/theme/colors';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}

export default App;
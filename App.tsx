import { StatusBar } from 'expo-status-bar';
import {  } from './src/pages/SignIn';
import AppLoading from "expo-app-loading";

import { ThemeProvider } from 'styled-components';
import theme from './src/theme/colors';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { SignIn } from './src/pages/SignIn';

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
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
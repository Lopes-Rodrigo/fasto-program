import { Provider } from "react-native-paper";
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider>
      {/* aqui usamos o provider do RNP */}
      <AppNavigator />
    </Provider>
  );
}




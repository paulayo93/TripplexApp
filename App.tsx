import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Base from './src/navigation';

// LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end

export default function App() {
  return <Base />;
}

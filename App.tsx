import { StatusBar } from 'expo-status-bar';
import { PlayerProvider } from './context/Player';
import Routes from './Routes';

export default function App() {
  return (
    <PlayerProvider>
      <StatusBar style="auto" />
      <Routes />
    </PlayerProvider>
  );
}
import { usePlayer } from '../../context/Player';
import { Container, ImageBanner, MusicTitle } from './styles';
import { Audio } from 'expo-av';
import { useCallback, useEffect, useState } from 'react';

const Player = () => {
  const { title, url } = usePlayer();
  const [sound,setSound] = useState<Audio.Sound>  (null);
  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
    }).then(() => {
      const expoSound = new Audio.Sound();
      setSound(expoSound);
    });
  }, []);
  const playSound = async (musicUrl: string) => {
    await sound.loadAsync({
      uri: musicUrl
    });
    await sound.playAsync();
  };
  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [url]);
  useEffect(() => { playSound(url) }, [url]);
  return (
    <Container>
      <ImageBanner source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/b1d19308255ab3129a65ea2f3a222a89/264x264.jpg' }} />
      <MusicTitle>{title}</MusicTitle>
    </Container>
  );
}

export default Player;
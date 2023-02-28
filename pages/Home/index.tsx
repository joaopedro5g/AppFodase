import { View, TouchableOpacity } from 'react-native';
import { Button, ButtonText } from './styles';

import { usePlayer } from '../../context/Player';

const Home = () => {
  const { playMusic } = usePlayer();
  const musics = [
    {
      title: 'Metallica Nothing Else Matters (Official Music Video)',
      url: 'https://cdn.imaccompany.com.br/Nothing_Else_Matters.mp3'
    },
    {
      title: 'ACDC - Thunderstruck (Official Video)',
      url: 'https://cdn.imaccompany.com.br/Thunderstruck.mp3'
    },
    {
      title: 'ACDC - You Shook Me All Night Long (Official Video)',
      url: 'https://cdn.imaccompany.com.br/You_Shook_Me_All_Night_Long.mp3'
    },
  ]
  return (
    <View>
      {
        musics.map(music => (
          <TouchableOpacity key={music.title} onPress={() => playMusic(music.title, music.url)}>
            <Button>
              <ButtonText>{music.title}</ButtonText>
            </Button>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

export default Home;
import { View, TouchableOpacity } from 'react-native';
import { usePlayer } from '../../context/Player';
import { Button, ButtonText } from './styles';


const Book = () => {
  const { playMusic } = usePlayer();
  const musics = [
    {
      title: 'Metallica Nothing Else Matters (Official Music Video)',
      url: 'https://cdn.imaccompany.com.br/Nothing_Else_Matters.mp3'
    }
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

export default Book;
import { ReactNode, useContext } from 'react';
import { createContext, useState } from 'react';

type PlayerContextTypes = {
  title: string | 'Tocando: Nada';
  url: string | null;
  playMusic(title: string, url: string): void;
}

const Context = createContext({} as PlayerContextTypes);

export const usePlayer = () => useContext(Context);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [title,setTitle] = useState<string | 'Tocando: Nada'>('Tocando: Nada');
  const [url,setUrl] = useState<string | 'Tocando: Nada'>('Tocando: Nada');
  const playMusic = (title: string, url: string) => {
    setTitle(`Tocando: ${title}`);
    setUrl(url);
  }
  return (
    <Context.Provider value={{ playMusic, title, url }}>
      { children }
    </Context.Provider>
  )
}
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height / 10}px;

  flex-direction: row;
  align-items: center;

  padding: 0 10px;

  background: #000;
`;

export const ImageBanner = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 10px;
`;

export const MusicTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #fff;

  margin-left: 10px;
`;
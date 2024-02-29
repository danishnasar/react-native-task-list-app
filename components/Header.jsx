import { Text, Image } from 'react-native';
import { s } from './componentStyles';
import logoImg from '../assets/logo.png';

export function Header() {
  return (
    <>
    <Image style={s.image} source={logoImg} resizeMode='contain'/>
    <Text style={s.subtitle}>You have something to do</Text>
    </>
  );
}

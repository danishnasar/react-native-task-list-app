import { Text, Image, TouchableOpacity } from 'react-native';
import { s } from './componentStyles';
import checkImg from '../assets/check.png';

export function Card({ todo, onCardPress, onLongCardPress }) {
  return (
    <TouchableOpacity style={s.card} onLongPress={() => onLongCardPress(todo)} onPress={() => onCardPress(todo)}>
        <Text style={[s.title, todo.isCompleted && { textDecorationLine: 'line-through'}]}>{todo.title}</Text>
        {todo.isCompleted && <Image style={s.img} source={checkImg}/>}
    </TouchableOpacity>
  );
}

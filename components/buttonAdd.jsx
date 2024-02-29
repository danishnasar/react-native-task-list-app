import { Text, TouchableOpacity } from 'react-native';
import { s } from './componentStyles';

export function Button({ openDialog }) {
  return (
    <TouchableOpacity onPress={() => openDialog(true)} style={s.btn}>
        <Text style={s.btnText}>+ New todo</Text>
    </TouchableOpacity>
  );
}

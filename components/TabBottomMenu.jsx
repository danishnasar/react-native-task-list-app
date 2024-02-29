import { Text, View, TouchableOpacity } from "react-native";
import { s } from "./componentStyles";

export function TabBottomMenu({ onItemPress, selectedTab, todoItems }) {
  function renderColor(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTab === tabName ? "#2F76E5" : "#000",
    };
  }

  const itemCount = todoItems.reduce((acc, currItem) => {
    currItem.isCompleted ? acc.done++ : acc.inprogress++;
    
    return acc;
  }, {all: todoItems.length, inprogress: 0, done: 0});

  return (
    <View style={s.bottomMenuRoot}>
      <TouchableOpacity onPress={() => onItemPress("all")}>
        <Text style={renderColor("all")}>All ({itemCount.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onItemPress("inprogress")}>
        <Text style={renderColor("inprogress")}>In progress ({itemCount.inprogress})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onItemPress("done")}>
        <Text style={renderColor("done")}>Done ({itemCount.done})</Text>
      </TouchableOpacity>
    </View>
  );
}

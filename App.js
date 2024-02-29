import { Text, View, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import { s } from "./App.style";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { TabBottomMenu } from "./components/TabBottomMenu";
import { useEffect, useState, useRef } from "react";
import { Button } from "./components/buttonAdd";

let isFirstLoad = true;
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [isopenDialog, setIsopenDialog] = useState(false);
  const [input, setInput] = useState("");
  const scrollEnd = useRef();

  const saveItem = async () => {
    try {
      await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
    } catch (err) {
      console.log(err);
    }
  };

  const loadItems = async () => {
    try {
      const dataString = await AsyncStorage.getItem("@todoList");
      setTodoList(JSON.parse(dataString));
      isFistStateset = true;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      saveItem();
    } else {
      isFirstLoad = false;
    }
  }, [todoList]);

  const updateCard = (todoItem) => {
    const currList = [...todoList];
    const updatedTodo = { ...todoItem, isCompleted: !todoItem.isCompleted };
    const updateIndex = currList.findIndex(
      (item) => item.id === updatedTodo.id
    );
    currList[updateIndex] = updatedTodo;
    setTodoList(currList);
  };

  const renderCardItems = () => {
    switch (selectedTab) {
      case "all":
        return todoList;
      case "inprogress":
        return todoList.filter((item) => !item.isCompleted);
      case "done":
        return todoList.filter((item) => item.isCompleted);
    }
  };

  const deleteTodo = (todoToDelete) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure that you want to delete the selected todo? ",
      [
        { text: "Cancel" },
        {
          text: "Delete",
          onPress: () =>
            setTodoList(todoList.filter((item) => item.id !== todoToDelete.id)),
        },
      ]
    );
  };

  const addTodo = () => {
    const newTodo = { id: uuid.v4(), title: input, isCompleted: false };
    setTodoList([...todoList, newTodo]);
    setIsopenDialog(false);
    setInput("");
    setTimeout(() => {
      scrollEnd.current.scrollToEnd();
    }, 1000);
  };

  const renderDialog = () => {
    return (
      <View>
        <Dialog.Container
          visible={isopenDialog}
          onBackdropPress={() => setIsopenDialog(false)}
        >
          <Dialog.Title>Add Todo</Dialog.Title>
          <Dialog.Description>Choose a name for your todo</Dialog.Description>
          <Dialog.Input onChangeText={(text) => setInput(text)} />
          <Dialog.Button
            label="Cancel"
            onPress={() => setIsopenDialog(false)}
          />
          <Dialog.Button label="Save" disabled={!input} onPress={addTodo} />
        </Dialog.Container>
      </View>
    );
  };

  const renderCard = () => {
    const filteredData = renderCardItems();
    return filteredData.length > 0 ? (
      filteredData.map((todo) => (
        <View key={todo.id} style={s.cardItem}>
          <Card
            todo={todo}
            onCardPress={updateCard}
            onLongCardPress={deleteTodo}
          />
        </View>
      ))
    ) : (
      <Text style={s.emptyText}>No Data</Text>
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView ref={scrollEnd}>{renderCard()}</ScrollView>
          </View>
          <Button openDialog={() => setIsopenDialog(true)} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          onItemPress={setSelectedTab}
          selectedTab={selectedTab}
          todoItems={todoList}
        />
      </View>
      {renderDialog()}
    </>
  );
}

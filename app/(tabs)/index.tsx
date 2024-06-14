import {
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  function increaseCount() {
    if(input.trim() !== ""){

      setTodoList((prev) => [...prev, input]);
    console.log(todoList);
  setInput("")
  }
  }
  return (
    <>
      <ThemedText style={{ marginTop: 40 }} type="title">
        Todos List
      </ThemedText>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="add todo"
        value={input}
        onChangeText={setInput}
      ></TextInput>
      <Button title="add to todo" onPress={increaseCount} />
      <Link href={"./anothertab"}>About</Link>
      <Pressable
        onPress={() => {
          router.push("./anothertab");
        }}
      >
        <Text>go</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("./user");
        }}
      >
        <Text>user</Text>
      </Pressable>
      {todoList.map((value, index) => (
        <View key={index}>
          <Text>{value}</Text>
          <View style={{width:80, backgroundColor: 'red', borderRadius: 5 }}>
            <Button color={"red"} title="×" onPress={() => {
            let newList = [...todoList]
            newList.splice(index,1)
            setTodoList(newList);
          }} />
          <Button color={"green"} title="update" onPress={() => {
            setInput(todoList[index])
            let newList = [...todoList]
            newList.splice(index,1)
            setTodoList(newList);
          }} />
            </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

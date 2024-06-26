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
  var [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  function increaseCount() {
    setCount((count = count + 1));
    setTodoList((prev) => [...prev, input]);
    console.log(todoList);
  }
  return (
    <>
      <ThemedText style={{ marginTop: 40 }} type="title">
        Todo List
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
      {todoList.map((value, index) => (
        <View key={index}>
          <Text>{value}</Text>
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

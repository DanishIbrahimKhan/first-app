import {
  Image,
  StyleSheet,
  Platform,
  Button,
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import "../users/[id]"
import { useState } from "react";
import { Link, router } from "expo-router";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  function increaseCount() {
    setTodoList((prev) => [...prev, input]);
    console.log(todoList);
    setInput("")
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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

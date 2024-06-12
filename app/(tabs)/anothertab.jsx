import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

function tab3(){
    return(
        <>
          <View><Text>tab3</Text></View>
          <Pressable onPress={() => router.push("/")}><Text>goto home</Text></Pressable>
        </>
    )
}
export default tab3;
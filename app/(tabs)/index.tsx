import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();
	const homeStyles = createHomeStyles(colors);
	const getTodos = useQuery(api.todos.getTodos);
	console.log("todos", getTodos);
	const addTodo = useMutation(api.todos.addTodo);
	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={homeStyles.container}
		>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyles.safeArea}>
				<Header />
				<Text>Edit app/index.tsx to edit this screen.</Text>
				<TouchableOpacity onPress={toggleDarkMode}>
					<Text>Dark Mode</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => addTodo({ text: "hello world." })}>
					<Text>Add Todo</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</LinearGradient>
	);
}

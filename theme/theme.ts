import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import Colors from "@/constants/Colors";

export const BackgroundTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background: Colors.dark,
        card: Colors.dark
    }
}
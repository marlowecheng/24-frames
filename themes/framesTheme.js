import { createTheme } from "@rneui/themed";

const themePalette = {
    DarkOrange:"#E95E0B",
    LightOrange:"#F3B646",
    LightGrey:"#F5EFDF",
    LightBlue:"#56BFD9",
    DarkBlue:"#062C3F",
    White:"#FFFDFA",
    Black:"#232323",
}

export const framesTheme = createTheme({
    components: {
        Button: (buttonProps) => ({
            buttonStyle: {
                raised: true,
                elevation: 2,
                shadowColor: themePalette.Black,
                borderRadius: 8,
                backgroundColor: themePalette.DarkBlue,
            },
            titleStyle: {
                fontFamily: "Poppins_600SemiBold",
                fontWeight: "regular",
                fontSize: "16",
                color: themePalette.White
            },
            type: "clear"
        }),
        Text: {
            displayTitle: {
                fontFamily:"Poppins_700Bold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:32,
            },
            h1Style: {
                fontFamily:"Poppins_700Bold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:26,
            },
            h2Style: {
                fontFamily:"Poppins_700Bold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:24,
            },
            h3Style: {
                fontFamily:"Poppins_700Bold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:32,
            },
            h4Style: {
                fontFamily:"Poppins_600SemiBold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:18,
            },
            style: {
                fontFamily:"Poppins_400Regular",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:16,
            },
            callout: {
                fontFamily:"Poppins_600SemiBold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:15,
            },
            subhead: {
                fontFamily:"Poppins_600SemiBold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:14,
            },
        },
    },
});
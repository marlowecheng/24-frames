import { createTheme } from "@rneui/themed";

const themePalette = {
    DarkOrange:"#E95E0B",
    LightOrange:"#F3B646",
    Beige:"#F5EFDF",
    LightBlue:"#56BFD9",
    DarkBlue:"#062C3F",
    White:"#FFFDFA",
    Black:"#232323",
}

const themeFonts = {
    Heading: "Poppins_700Regular",
    Body: "Poppins_400Regular",
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
                fontSize:18,
            },
            h4Style: {
                fontFamily:"Poppins_700Bold",
                fontWeight:"regular",
                color:themePalette.Black,
                fontSize:16,
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
        SearchBar: (searchBarProps) => ({
            containerStyle: {
                backgroundColor: themePalette.Beige,
            },
            inputContainerStyle: {
                backgroundColor: themePalette.White,
            }
        }),
        Input: {
            containerStyle: {
                width: "100%",
                paddingHorizontal: 0,
                marginVertical: 0,
                
            },
            inputContainerStyle: {
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: themePalette.White,
                height: 42,
                paddingLeft: 13,
            },
            inputStyle: {
                fontSize: 10,
                fontFamily: themeFonts.Body,
            },
            labelStyle: {
                fontSize: 10,
                fontFamily: themeFonts.Body,
                fontWeight: 400,
                color: themePalette.Black,
                marginBottom: 8,
            },
        },
        CheckBox: {
            containerStyle: {
                backgroundColor: themePalette.Beige,
                width: "100%",
            },
            textStyle: {
                fontWeight: 400,
                fontFamily: themeFonts.Body,
                fontSize: 10,
            },
            wrapperStyle: {
                padding: 0,
                margin: 0,
            }
        },
    }
});
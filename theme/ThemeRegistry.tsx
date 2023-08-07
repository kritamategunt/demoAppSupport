"use client"

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { Roboto } from "next/font/google";
import { red } from '@mui/material/colors';

const roboto = Roboto({
    weight: ["300","400","500","700"],
    style: ["normal","italic"],
    subsets: ["latin"]
})

const ThemeOptions: ThemeOptions = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize:12
    },
    palette: {
        primary: {
          main: '#556cd6',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
      },
    components:{}
};

const theme = createTheme(ThemeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
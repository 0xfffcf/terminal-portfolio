import { extendTheme } from "@chakra-ui/react"

const theme = {
    config: {
        initialColorMode: "light",
        useSystemColorMode: true
    },
    styles: {
        global: {
            body: {
                "font-family": "'Monaco', Consolas, Lucida Console, monospace"
            }
        }
    }
}

export default extendTheme(theme)
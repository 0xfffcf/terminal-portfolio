import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    initial: {
        opacity: 0,
        y: -40
    },
    animate: {
        opacity: 1,
        y: 0
    }
}
import styles from "./Button.module.css"

// INLINE STYLES (CREATE A JS VALUE INSIDE THE COMPONENT, ALL VALUES ARE STRINGS)
function Button() {
    return (<button className={styles.button}> Click me </button>);
}
export default Button;
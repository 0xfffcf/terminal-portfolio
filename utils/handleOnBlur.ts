export function handleOnBlur(e: any) {
    window.setTimeout(() => {
        e.target.focus();
    }, 0);
}
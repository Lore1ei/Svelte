export function match(param) {
    return /^\d*\.?\d+\$?$/.test(param)
}
export const formatDouble = (num, afterDot = 2) => {
    return (Math.round(num * 100) / 100).toFixed(afterDot)
}

export const formatCurency = (price, afterDot = 2, curency = "VND ") => {
    return curency + formatDouble(price)
}
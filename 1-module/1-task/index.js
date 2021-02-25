function factorial(n) {
  // ваш код...
  let result = 1
for (let i = n; i > 0; i--) {
 result *= i;
}
return result
}

let number = +prompt('Введите число, и я рассчитаю факториал!')
if (!number) {
 alert('Скорей всего ты не ввел число, или ввел не число, бро ..')
} else {
alert("Дайте-ка подумать ...ок?")
alert(`Факториал = ${factorial(number)}`)

}

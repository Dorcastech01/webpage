function num_division(n) {
    for (let a = 1; a < n; a++) {

        if (a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz")
        }

        else if (a % 3 == 0) {
            console.log("Fizz")
        }

        else if (a % 5 == 0) {
            console.log("Buzz")
        }

        else if (a % 3 || a % 5 != 0) {
            console.log(a)
        }
    }
}

num_division(50)
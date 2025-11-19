class Calculator {
    addTwo(n: number, m: number): number {
        return n + m;
    }

    subtractTwo(n: number, m: number): number {
        return this.addTwo(n, -m);
    }

    divide(dividend: number, divisor: number): { quotient: number, remainder: number } | undefined {
        if (divisor == 0) return undefined;
        if (dividend >= divisor) {
            var quotient = 0;
            var remainder = dividend;
            while (remainder >= divisor) {
                quotient++;
                remainder = this.subtractTwo(remainder, divisor);
            }

            return {
                quotient,
                remainder
            };
        } else {
            return {
                quotient: 0,
                remainder: dividend
            }
        }
    }
}

const calculator = new Calculator();
console.log(`3 + 10 = ${calculator.addTwo(3, 10)}`); // 3 + 10 = 13
console.log(`3 - 10 = ${calculator.subtractTwo(3, 10)}`); // 3 - 10 = -7

let result = calculator.divide(10, 3);
console.log(`10 / 3 = ${result?.quotient} rem ${result?.remainder}`); // 10 / 3 = 3 rem 1
result = calculator.divide(3, 10);
console.log(`3 / 10 = ${result?.quotient} rem ${result?.remainder}`); // 3 / 10 = 0 rem 3
result = calculator.divide(3, 0);
console.log(`3 / 0 = ${result?.quotient} rem ${result?.remainder}`); // 3 / 0 = undefined rem undefined
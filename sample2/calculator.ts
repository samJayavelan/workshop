class Calculator {
    private inputs: any[] = [];

    input(n: number) {
        this.inputs.push(n);
    }

    inputOperand(o: "+" | "-") {
        this.inputs.push(o);
    }

    clear = () => { this.inputs = [] }

    equate() {
        var running = this.inputs[0];
        for (var i = 0; i < this.inputs.length; i += 2) {
            const o: string = this.inputs[i];
            const n: number = this.inputs[i + 1];
            switch (o) {
                case "+":
                    running += n;
                    break;
                case "-":
                    running -= n;
                    break;

            }
        }
        console.log(`Result is ${running}`);
    }
}

const calculator = new Calculator();
calculator.input(4);
calculator.inputOperand("+");
calculator.input(23);
calculator.inputOperand("-");
calculator.input(78);
calculator.equate(); // Result is -51
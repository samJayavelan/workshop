class TraditionalCalculator {
    private inputs: any[] = [];

    input(n: number) {
        this.inputs.push(n);
    }

    inputOperand(o: "+" | "-") {
        this.inputs.push(o);
    }

    clear = () => { this.inputs = [] }

    equate() {
        let running = this.inputs[0];
        for (let i = 1; i < this.inputs.length; i += 2) {
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

const calculator = new TraditionalCalculator();
calculator.input(4);
calculator.inputOperand("+");
calculator.input(23);
calculator.inputOperand("-");
calculator.input(78);
calculator.equate(); // Result is 4...wait a minute, this isn't right. There must be a bug somewhere.
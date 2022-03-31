class MinStack {
    private min: number[] = []
    private stack: number[] = []

    constructor() {
    }

    push(val: number): void {
        if (this.min.length === 0 || val <= this.getMin()) {
            this.min.push(val)
        }
        this.stack.push(val)
    }


    pop(): void {
        const pop = this.stack.pop()
        if (pop === this.getMin()) {
            this.min.pop()
        }
    }

    top(): number {
        const topIndex = this.stack.length - 1
        return this.stack[topIndex]
    }

    getMin(): number {
        const topIndex = this.min.length - 1
        return this.min[topIndex]
    }
}
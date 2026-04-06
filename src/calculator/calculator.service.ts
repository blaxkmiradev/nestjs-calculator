import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  divide(a: number, b: number) {
    if (b === 0) return 'Cannot divide by zero';
    return a / b;
  }
}

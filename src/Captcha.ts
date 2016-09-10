import { Operand, NumberOperand, TextOperand } from './Operand';
import TextOperator from './TextOperator';

export class Captcha {
  generate(
    pattern: number,
    left: number,
    right: number,
    operator: number
  ): string {
    let leftText: Operand;
    let rightText: Operand;

    const operatorText = new TextOperator(operator).toText();

    switch (pattern) {
      case 1:
        leftText = new NumberOperand(left);
        rightText = new TextOperand(right);
        break;
      case 2:
        leftText = new TextOperand(left);
        rightText = new NumberOperand(right);
        break;
      default:
    }

    return `${leftText.toText()} ${operatorText} ${rightText.toText()}`

  }
}

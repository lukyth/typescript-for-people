export default class TextOperator {
  static OPERATOR: Object = {
    1: '+',
    2: '-',
    3: '*'
  }

  number: number

  constructor(number: number) {
    this.number = number
  }

  toText(): string {
    return TextOperator.OPERATOR[this.number]
  }
}

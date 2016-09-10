export interface Operand {
  mapTable: Object;
  number: number;
  toText(): string;
}

export class NumberOperand implements Operand {
  mapTable: Object;
  number: number;

  constructor(number: number) {
    this.mapTable = {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9'
    };
    this.number = number;
  }

  toText(): string {
    return this.mapTable[this.number]
  }
}

export class TextOperand implements Operand {
  mapTable: Object;
  number: number;

  constructor(number: number) {
    this.mapTable = {
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine'
    };
    this.number = number;
  }

  toText(): string {
    return this.mapTable[this.number]
  }
}

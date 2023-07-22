// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

// the code below is the shorter way of creating the class above
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

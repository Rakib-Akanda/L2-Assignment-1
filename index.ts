{
  type TFormatString = (inpForLower: string, inpForUpper?: boolean) => string;
  const formatString: TFormatString = (inpForLower, inpForUpper) => {
    if (inpForUpper || typeof inpForUpper === "undefined") {
      return inpForLower.toUpperCase();
    } else {
      return inpForLower.toLowerCase();
    }
  };
  type TBooks = { title: string; rating: number }[];
  type TFilterByRating = (items: TBooks) => TBooks;
  const filterByRating: TFilterByRating = (items) => {
    const response: TBooks = items.filter((item) => item.rating >= 4);
    return response;
  };
  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const res: T[] = arrays.reduce((acc, curr) => acc.concat(curr), []);
    return res;
  };
  class Vehicle {
    private make: string;
    constructor(make: string, public year: number) {
      this.make = make;
    }
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }
    getModel() {
      return `Model: ${this.model}`;
    }
  }
  type TProcessValue = (value: string | number) => number;
  const processValue: TProcessValue = (value) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };
  interface IProduct {
    name: string;
    price: number;
  }
  const getMostExpensiveProduct = (products: IProduct[]): IProduct | null => {
    if (products.length <= 0) {
      return null;
    } else {
      const expensiveProduct = products.reduce((maxPriceProd, currProd) => {
        return currProd.price > maxPriceProd.price ? currProd : maxPriceProd;
      }, products[0]);
      return expensiveProduct;
    }
  };
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  const getDayType = (day: Day): string => {
    const responseDay: string = day === Day.Sunday ? "Weekend" : "Weekday";
    return responseDay;
  };
  const squareAsync = async (n: number): Promise<number> => {
    return new Promise<number>((res, rej) => {
      setTimeout(() => {
        if (n < 0 ) {
          rej(new Error("Negative number not allowed"));
        } else {
          res(n * n);
        }
      }, 1000);
    });
  };
}

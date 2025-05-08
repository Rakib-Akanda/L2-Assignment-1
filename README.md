# 📘 TypeScript Assignment Solutions

This repository contains solutions to 8 core TypeScript problems, covering functions, classes, enums, generics, and async/await logic. Each solution demonstrates a real-world application of TypeScript’s type system and syntax.

---

## ✍️ 1: Differences between Type and Interface in TypeScript

In TypeScript, we can easily declare types using type and interface. The type keyword is mainly used for both objects and primitive data types, while interface is used specifically for objects.

###  Declaration

```ts
type TProduct = {
  name: string;
  price: number;
};
type TName = string;

interface IUser {
  name: string;
  age: number;
}
```

---

## ✍️ 2: The explanation of Union Type and Intersection Type has been given.

A union type behaves like an OR. In a TStudent type that uses union, all properties of either TStudentName or TStudentType are required — but not both. On the other hand, an intersection type requires all the properties from both TStudentName and TStudentType. Using type or interface makes the code more readable and maintainable. 

```ts
type TStudentName = {
  name: string;
  age: number;
};

type TStudentType = {
  roll: number;
  department: string;
  institute;
};
type TStudent = TStudentName | TStudentType;
type TStudent1 = TStudentName & TStudentType;

```

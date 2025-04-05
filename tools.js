// MODULARITY 
export const PI = 3.14159;
export const COMPANY = "TechCorp";

export function circleArea(radius) {
  return PI * radius * radius;
}

export function greet(name) {
  return `Hello, ${name}! Welcome to ${COMPANY}`;
}


// CLASSES
export class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}

export class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks loudly!`;
  }

  getBreed() {
    return `${this.name} is a ${this.breed}`;
  }
}


export class MathUtils {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

export async function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John Doe",
        email: "john@example.com",
        status: "active"
      });
    }, 1500);
  });
}
export async function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ success: true, token: "xyz123" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}

// PROMISES
export function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Input must be a number"));
    } else if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      resolve(`${num} is odd`);
    }
  });
}

export function processOrder(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, status: "processed" });
    }, 800);
  });
}

export function shipOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...order, status: "shipped", trackingId: "TRK" + Math.floor(Math.random() * 10000) });
    }, 1200);
  });
}

// MAPS
export function createProductMap() {
  const productMap = new Map();
  

  productMap.set("p101", { 
    id: "p101", 
    name: "Laptop", 
    price: 999.99 
  });
  
  productMap.set("p102", { 
    id: "p102", 
    name: "Phone", 
    price: 699.99 
  });

  return productMap;
}

export function createUserRolesMap() {
  const user1 = { id: 1, name: "Alice" };
  const user2 = { id: 2, name: "Bob" };
  
  const roleMap = new Map();
  roleMap.set(user1, "Admin");
  roleMap.set(user2, "Editor");
  
  return roleMap;
}
export function mapToObject(map) {
  return Object.fromEntries(map.entries());
}

export function objectToMap(obj) {
  return new Map(Object.entries(obj));
}
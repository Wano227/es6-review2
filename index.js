import { 
    PI, COMPANY, circleArea, greet,
    Animal, Dog, MathUtils,
    fetchUserData, loginUser,
    checkEvenNumber, processOrder, shipOrder,
    createProductMap, createUserRolesMap, mapToObject, objectToMap
  } from './tools.js';
  
  const log = (title) => {
    console.log(`\n=== ${title} ===`);
  };
  
  // Test Modularity
  log("MODULARITY");
  console.log("PI:", PI);
  console.log("Company:", COMPANY);
  console.log("Area of circle (r=5):", circleArea(5));
  console.log(greet("Sarah"));
  
  // Test Classes
  log("CLASSES");
  const animal = new Animal("Generic", 3);
  console.log(animal.speak());
  console.log(animal.getInfo());
  
  const dog = new Dog("Rex", 5, "Golden Retriever");
  console.log(dog.speak());
  console.log(dog.getInfo());
  console.log(dog.getBreed());
  
  console.log("Square of 4:", MathUtils.square(4));
  console.log("Cube of 3:", MathUtils.cube(3));
  

  // Test Async/Await
  log("ASYNC/AWAIT");
  (async () => {
    const user = await fetchUserData(101);
    console.log("Fetched user:", user);
    
    try {
      const loginResult = await loginUser("admin", "1234");
      console.log("Login success:", loginResult);
    } catch (error) {
      console.log("Login failed (expected for wrong credentials)");
    }
  })();

  // Test Promises
  log("PROMISES");
  checkEvenNumber(4).then(console.log).catch(() => {}); // Silent error
  
  checkEvenNumber("abc")
    .then(console.log)
    .catch(() => console.log("Expected error: Input must be a number"));
  
  processOrder("ord123")
    .then(order => {
      console.log("Order processed:", order);
      return shipOrder(order);
    })
    .then(shippedOrder => {
      console.log("Order shipped:", shippedOrder);
    });
  
  // Test Maps
  log("MAPS");
  const products = createProductMap();
  console.log("Product Map:");
  products.forEach((value, key) => {
    console.log(`${key}:`, value);
  });
  
  const roles = createUserRolesMap();
  console.log("\nUser Roles Map:");
  roles.forEach((value, key) => {
    console.log(`${key.name}:`, value);
  });
  
  const sampleObj = { a: 1, b: 2, c: 3 };
  console.log("\nObject to Map:", objectToMap(sampleObj));
  console.log("Map to Object:", mapToObject(createProductMap()));
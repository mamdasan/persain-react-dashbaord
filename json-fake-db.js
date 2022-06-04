module.exports = () => {
  const { faker } = require("@faker-js/faker");
  // a simple db with a list of 1000 users, 100 products, 20 employees, 5 sellers, and 5000 orders

  const data = {
    orders: [],
    customers: [],
    products: [],
    employees: [],
    sellers: [],
  };

  for (let i = 1; i <= 1000; i++) {
    data.customers.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      avatar: faker.image.avatar(),
      address: faker.address.country(),
    });
  }

  // Create 5 users
  for (let i = 1; i <= 5; i++) {
    data.sellers.push({
      id: i,
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
    });
  }

  // create 100 products
  for (let i = 1; i <= 100; i++) {
    data.products.push({
      id: i,
      name: faker.commerce.product(),
      price: faker.commerce.price(50, 250, 0),
      description: faker.commerce.productDescription(),
      available: faker.random.numeric(),
    });
  }

  // create 20 employees
  for (let i = 1; i <= 20; i++) {
    data.employees.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      avatar: faker.image.avatar(),
    });
  }

  // Create 5000 orders
  for (let i = 1; i <= 5000; i++) {
    data.orders.push({
      id: i,
      date: faker.date.past(1),
      customerId: faker.datatype.number({ min: 1, max: 1000 }),
      sellerId: faker.datatype.number({ min: 1, max: 5 }),
      employeeId: faker.datatype.number({ min: 1, max: 20 }),
    });
  }

  return data;
};

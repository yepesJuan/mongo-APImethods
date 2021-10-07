// import { createClient } from './src/client'
 
// // const getCarsCollection = async () => {
// //   const dealer = await createClient();
// //   const db = dealer.db("dealership");
// //   return db.collection("cars");
// // };

// // const getCars = async () => {
// //   const col = await getCarsCollection()
// //   col.find().toArray

// // }

// const getBuyersCollection = async () => {
//   const dealer = await createClient();
//   const db = dealer.db("dealership");
//   return db.collection("cars");
// };

// const getOrdersCollection = async () => {
//   const dealer = await createClient();
//   const db = dealer.db("dealership");
//   return db.collection("orders");
// };

// const createCars = async ({ make, model, price }) => {
//   const carsCollection = await getCarsCollection();
//   return await carsCollection.insertOne({ make, model, price });
//   // await carsCollection.insertOne({ make, model, price });
//   // return { make, model, price };
// };

// const createBuyers = async ({ name, address, phone }) => {
//   const buyersCollection = await getBuyersCollection();
//   return await buyersCollection.insertOne({ name, address, phone });
//   // await buyersCollection.insertOne({ name, address, phone });
//   // return { name, address, phone };
// };

// const createOrders = async ({ date, carID, buyerID }) => {
//   const ordersCollection = await getOrdersCollection();
//   await ordersCollection.insertOne({ date, carID, buyerID });
//   return { date, carID, buyerID };
// };

// // const readOrder = async () => {
// //     const userCollection = await getCarsCollection();
// //     //const ret = await userCollection.find({"make": "CTS"});
// //     const ret = await userCollection.findOne({"_id": ObjectId("6156027771005f7645ea9a5e")});
// //    return ret // object single doc
// //     //return ret.toArray()
// //   };





// const run = async () => {
//   const client = await createClient();
//   //const orders = await readOrder();
//   //console.log(orders);

//   const newCar = await createCars({
//     make: faker.vehicle.model(),
//     model: faker.vehicle.type(),
//     price: faker.datatype.number(),
//   });
//   const newBuyer = await createBuyers({
//     name: `${faker.name.firstName()} ${faker.name.lastName}`,
//     address: faker.address.streetAddress(),
//     phone: faker.phone.phoneNumber(),
//   });
//   await createOrders({
//     date: faker.date.month(),
//     carID: newCar._id,
//     buyerID: newBuyer._id,
//   });
//   console.log(newCar);
//   console.log(newBuyer);
//   await client.close();
// };

// run().then();

// to get ids you have to =
//1.return on create functions line 37,43,49
//2. create a variable for each on line 55,60
// and console.log before closing connection

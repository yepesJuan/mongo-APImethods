import { createClient } from "./client.js";
//import { getOrdersById } from "./orders.js";

const getCarsCollection = async () => {
  const dealer = await createClient();
  const db = dealer.db("dealership");
  return db.collection("cars");
};

export const getCarById = async (id) => {
  const carsCollection = await getCarsCollection();
  const ret = carsCollection.findOne(id);
  return ret;
};

export const getCars = async () => {
  const col = await getCarsCollection();
  const cars = col.find();
  return cars.toArray();
};

export const createCars = async ({ make, model, price }) => {
  const carsCollection = await getCarsCollection();
  const ret = await carsCollection.insertOne({ make, model, price });
  return ret.insertedId;
  // await carsCollection.insertOne({ make, model, price });
  // return { make, model, price };
};

export const updateCars = async (id, { make, model, price }) => {
  const carsCollection = await getCarsCollection();
  const ret = await carsCollection.updateOne({ _id: id },{$set :{ make, model, price }});
  return ret;
};

export const deleteCars = async (id) => {
  const carsCollection = await getCarsCollection();
  const ret = await carsCollection.deleteOne(id)
  return ret;
};


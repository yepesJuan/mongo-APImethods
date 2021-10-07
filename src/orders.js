import { createClient } from "./client.js";

const getOrdersCollection = async () => {
  const dealer = await createClient();
  const db = dealer.db("dealership");
  return db.collection("orders");
};

export const getOrdersById = async (id) => {
  const ordersCollection = await getOrdersCollection();
  const ret = ordersCollection.findOne(id);
  return ret;
};

export const getOrders = async () => {
  const col = await getOrdersCollection();
  const orders = col.find();
  return orders.toArray();
};

export const createOrders = async ({ date, carID, buyerID }) => {
  const ordersCollection = await getOrdersCollection();
  const ret = await ordersCollection.insertOne({ date, carID, buyerID });
  return ret.insertedId;
};

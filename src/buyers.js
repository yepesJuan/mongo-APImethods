import { createClient } from "./client.js";

const getBuyersCollection = async () => {
  const dealer = await createClient();
  const db = dealer.db("dealership");
  return db.collection("buyers");
};

export const getBuyerById = async (id) => {
  const buyersCollection = await getBuyersCollection();
  const ret = buyersCollection.findOne(id);
  return ret;
};

export const getBuyers = async () => {
  const col = await getBuyersCollection();
  const buyers = col.find();
  return buyers.toArray();
};

export const createBuyers = async ({ name, address, phone }) => {
  const buyersCollection = await getBuyersCollection();
  const ret = await buyersCollection.insertOne({ name, address, phone });
  return ret.insertedId;
};

export const updateBuyers = async (id, { name, address, phone }) => {
  const buyersCollection = await getBuyersCollection();
  const ret = await buyersCollection.updateOne({ _id: id },{$set :{ name, address, phone }});
  return ret;
};

export const deleteBuyers = async (id) => {
  const buyersCollection = await getBuyersCollection();
  const ret = await buyersCollection.deleteOne(id)
  return ret;
};

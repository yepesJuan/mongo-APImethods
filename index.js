import dotenv from "dotenv";
import express from "express";
// import functions from 'firebase-functions'
import { getCars, createCars, getCarById } from "./src/cars.js";
import { createBuyers, getBuyerById, getBuyers } from "./src/buyers.js";
import { getOrders, getOrdersById, createOrders } from "./src/orders.js";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
app.use(express.json());

/* ++++++++++ Get ALL ++++++++++*/
app.get("/cars", async (req, res) => {
  try {
    let cars = await getCars(req.body);
    res.status(200).send(cars);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/buyers", async (req, res) => {
  try {
    let buyers = await getBuyers(req.body);
    res.status(200).send(buyers);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/orders", async (req, res) => {
  try {
    let orders = await getOrders(req.body);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});
/*+++++++++++++ Get by Id +++++++++++*/
app.get("/cars/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    let cars = await getCarById(id);
    res.status(200).send(cars);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/buyers/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    let buyers = await getBuyerById(id);
    res.status(200).send(buyers);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/orders/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    let orders = await getOrdersById(id);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});
/*+++++++++++++ Post +++++++++++++++*/
app.post("/cars", async (req, res) => {
  try {
    let cars = await createCars(req.body);
    res.status(201).send(cars);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});
app.post("/buyers", async (req, res) => {
  try {
    let buyers = await createBuyers(req.body);
    res.status(201).send(buyers);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});
app.post("/orders", async (req, res) => {
  try {
    let carID = new ObjectId(req.body.carID)
    let buyerID = new ObjectId(req.body.buyerID)
    let orders = await createOrders({carID,buyerID, date: new Date()});
    res.status(201).send(orders);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

// exports.app = functions.https.onRequest(app)

app.listen(3000, () => console.log("listening on port 3000"));

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
let _client;

// connect to cluster to cache client connection;
//function to keep using for each clientt
// only create1 client, if already exits just return
const createClient = async () => {
  if (!_client) {
    _client = new MongoClient(process.env.MONGO_URL);
    await _client.connect();
  }
  return _client;
};

const getUserCollection = async () => {
  const client = await createClient();
  const db = client.db("db2");
  return db.collection("user");
};

const createUser = async ({ name, dob, email }) => {
  const userCollection = await getUserCollection();
  await userCollection.insertOne({ name, dob, email });
  return { name, dob, email };
};

const run = async () => {
  const client = await createClient();
  await createUser({
    name: "Juan",
    dob: new Date("02/26/1997"),
    email: "jy@hotmail.com",
  })
  await client.close();
};

run().then();

/*

const createUser = async ({name, dob, email}) => {
  const client = await createClient()

}
const createUser = async ({name, dob, email}) => {
  const client = await createClient()

}
const createUser = async ({name, dob, email}) => {
  const client = await createClient()

}



createClient().then();

// try {
//   client = await createClient()

//   if(!client){
//       console.error("Something went horribly wrong")
//     }
//   }
//  catch (error) {
//   console.log("Oh No no no no no.", error)
// } */

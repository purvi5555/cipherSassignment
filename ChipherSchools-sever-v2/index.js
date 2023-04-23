const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port =  5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://tanwarpurnima05:demopurnima05@clusterdemo.zgd346e.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersCollection = client.db("chipherSchools").collection("allUser");
    const followerCollection = client.db("chipherSchools").collection("allFollowers");

    // ------- Authentication section start --------//
    // User registration endpoint
    app.post("/register", async (req, res) => {
      const { firstName, lastName, image, email, password } = req.body;
      // Check if user already exists
      const user = await usersCollection.findOne({ email });
      if (user) {
        return res
          .status(409)
          .json({ message: "Email already in use", status: 409 });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Insert the new user into the database
      const result = await usersCollection.insertOne({
        firstName,
        lastName,
        image,
        email,
        password: hashedPassword,
      });

      res.status(200).json({
        message: "User created successful",
        status: 200,
        result,
        user: req.body,
      });
    });

    // User login endpoint
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;

      // Check if user exists
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid email or password", status: 401 });
      }

      // Check if password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Invalid email or password", status: 401 });
      }
      const users = await usersCollection.find({ email }).toArray();

      res
        .status(200)
        .json({ message: "Login successful", status: 200, user: users[0] });
    });

    // ------ Authentication section  END ---------//

    // reset password
    app.put("/password-reset/:email", async (req, res) => {
      const { currentPassword, newPassword } = req.body;
      const email = req.params.email;
      // Check if user exists
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid email or password", status: 401 });
      }
      // Check if password is correct
      const passwordMatch = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Invalid your current password", status: 401 });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const password = { password: hashedPassword };
      const query = { email };
      const update = { $set: password };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(query, update, options);

      res
        .status(200)
        .json({ message: "Password Changed successful", status: 200, result });
    });

    // about profile data save
    app.put("/profile/:email", async (req, res) => {
      const email = req.params.email;
      const data = req.body;
      console.log(data, email);
      const query = { email };
      const update = { $set: data };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(query, update, options);
      res.send(result);
    });


    // all followers
    app.get("/follower", async (req, res) => {
      const query = {}
      const result = await followerCollection.find(query).toArray()
      res.send(result);
    });

    //add demo followers
    app.post("/follower", async (req, res) => {
      const {fname,
        college,
        followers,
        follow} = req.body;

      const result = await followerCollection.insertOne({
        fname,
        college,
        followers,
        follow
      });
      res.status(200).json({
        message: "follower created successful",
        status: 200,
        result,
        user: req.body,
      });
    });

  } finally {
  }
}
run().catch((err) => console.error(err));

app.get("/", async (req, res) => {
  res.send("ChipherSchools server is running");
});

app.listen(port, () => console.log(`ChipherSchools server running on ${port}`));

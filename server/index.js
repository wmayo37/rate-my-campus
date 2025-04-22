const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const PlaceModel = require("./models/Place");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://wmayo37:CollegeStuff37!@campusreviews.jth7ixi.mongodb.net/"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success!");
      } else {
        res.json("The password was incorrect :(");
      }
    } else {
      res.json("The user you input does not exist :(");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});

// GET places with their reviews
app.get("/map", async (req, res) => {
  try {
    const places = await PlaceModel.find();
    res.json(places);
  } catch (error) {
    res.json({ error: "Server error" });
  }
});

// Add review to a place
app.post("/reviews", async (req, res) => {
  try {
    const { placeId, text, rating } = req.body;

    // Validation
    if (!text || !rating || !placeId) {
      return res.json({ error: "Missing required fields" });
    }

    const place = await PlaceModel.findById(placeId);

    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    place.reviews.push({
      text,
      rating,
      date: Date.now(),
    });

    await place.save();

    res.json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ error: "Server error" });
  }
});

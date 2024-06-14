import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//to serve static pages
app.use(express.static('public'));

// Use the Secrets API documentation: https://secrets-api.appbrewery.com/

const yourBearerToken = "enter_your_token_here";

//for adding authentication header:
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  // console.log(req.body);   op:{ id: '4', secret: '', score: '' }
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// axios.post(url[, data[, config]])
app.post("/post-secret", async (req, res) => {
  // console.log(req.body); 
  try {
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// axios.put(url[, data[, config]])
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // console.log(req.body); 
  try {
    const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// axios.patch(url[, data[, config]])
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // console.log(req.body); 
  try {
    const result = await axios.patch(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

//axios.delete(url[, config])
app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // console.log(req.body); 
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

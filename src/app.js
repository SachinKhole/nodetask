const express = require("express");
require("../src/db/conn");
const Project = require("./models/project");
const app = express();
const port = process.env.port || 3000;

// we will handle post request
app.post("/product", async (req, res) => {
  const user = new Project(req.body);
  user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// we will handle get request

app.get("/product", async (req, res) => {
  try {
    const ProjectData = await Project.find();
    res.send(ProjectData);
  } catch (e) {
    res.send(e);
  }
});

// get the individual data using id

app.get("/product/:id", async (req, res) => {
  try {
    const _id = get.params.id;
    const ProjectData = await Project.findbyId(_id);
    res.send(ProjectData);
  } catch (error) {
    res.send(error);
  }
});

// we will handle update request

app.patch("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpdateData = await ProjectData.findbyIdAndUpdata(_id, req.body);
    res.send(UpdateData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// we will handle delete request

app.delete("product/:id", async (req, res) => {
  try {
    const deleteProject = await Project.findbyIdAndDelete(req.params.id);
    res.send(deleteProject);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is live at port no .${port}`);
});





app.get("/notes", (req, res) => {
    res.json(notes);
  });
  
  app.post("/notes", (req, res) => {
      // req.body is where our incoming content will be
      console.log(req.body);
      res.json(req.body);
    });
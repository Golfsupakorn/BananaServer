const app = require("./src/config/app");

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server is running");
})

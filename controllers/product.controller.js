const Product = require("../models/product.model");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};
exports.product_create = (req, res) => {
  console.log("****************************");
  console.log(req.body);
  console.log("*********************************");
  // let product = new Product({
  //   name: "Nashpati",
  //   quantity: 90,
  //   imageUrl: "/",
  // });

  //you should use express-validaor or joi to validate inputs

  let product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    imageUrl: req.body.imageUrl,
  });
  console.log(product);
  console.log("******************");
  product.save((err, product) => {
    if (err) {
      console.log("failure in adding product");
      //console.log(err);
      res.status(500).json({ productStatus: "failure", err: err });
    } else {
      console.log("product added");
      res.status(200).json({
        productStatus: "added",
        productId: product._id,
        product: product,
      });
    }
  });
};
exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err)
      return res.status(500).send({ productStatus: "failure", err: err });
    res.send(product);
  });
};

exports.getAllProducts = (req, res) => {
  console.log(" i m gonna get all products");
  Product.find({}, (err, products) => {
    if (err) {
      console.log("ERROR in database............");
      console.log(err);
      res.status(500).send({ productStatus: "failure", err: err });
    } else {
      res.status(200).json({ productStatus: "fetched", products: products });
    }
  });
};

exports.deleteProducts = (req, res) => {
  console.log("got in get uploaded properties");
  Product.deleteMany({}, (err, orders) => {
    if (err) {
      res.status(500).json({ PropertyShow: "Unsuccessful", err: err });
    } else {
      console.log("Got all Properties");
      res.status(200).json({ PropertyShow: "Successful", properties: orders });
    }
  });
};

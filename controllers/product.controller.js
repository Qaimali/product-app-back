const Product = require("../models/product.model");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};
exports.product_create = function (req, res) {
  let product = new Product({
    name: req.body.name,
    quantity: req.body.price,
    imageUrl: req.body.url,
  });

  product.save(function (err) {
    if (err) {
      return err;
    }
    res.send("Product Created successfully");
  });
};
exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

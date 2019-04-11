module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(error);
      });
  },
  getOne: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .read_product(id)
      .then(product => res.status(200).json(product))
      .catch(error => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(error);
      });
  },
  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).json(products))
      .catch(error => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(error);
      });
  },
  update: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(error);
      });
  },
  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product(id)
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(error);
      });
  }
};

const Datastore = require('nedb');

const db = new Datastore({ filename: 'nedb', autoload: true });

exports.list_all_items = (req, res) => {
  db.find({}, (err, docs) => {
    res.json(docs);
  });
};

exports.create_an_item = (req, res) => {
  console.log(req.body)
  const body = req.body;
  if (!body) {
    res.json({
      error: 'Body is missing!',
    });
  } else {
    const doc = {
      name: body.name,
      checked: body.checked,
      id: body.id,
    };
    db.insert(doc);
    res.json({ doc });
  }
};

exports.delete_an_item = (req, res) => {
  const itemId = req.params.itemId;
  if (!itemId) {
    res.json({
      error: 'Item id is missing!',
    });
  } else {
    db.remove({ id: itemId }, {}, (err, numDeleted) => {
      res.json({
        deleted: numDeleted,
      });
    });
  }
};

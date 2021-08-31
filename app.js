const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santosh:santosh@cluster0.mlxpt.mongodb.net/QandADatabase?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  const schema = new Schema({ number: Number, question: String, responses: Array })
  schema.path('_id')
  const model = mongoose.model('model',schema)

  model.find({})

});

ReactDom.document.getElementByID('question')

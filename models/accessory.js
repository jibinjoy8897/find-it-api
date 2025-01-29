import mongoose from "mongoose";
const modelDetailSchema = new mongoose.Schema({
  modelNumber: { 
    type: String, 
    required: true
  },
  sku: { 
    type: Number, 
    required: true
  },
  accessories: [ { 
    type: String, 
    required: true
  }],
  url: { 
    type: String, 
    required: true
  }
}, { timestamps: true });

const ModelDetail = mongoose.model('ModelDetail', modelDetailSchema);

export default ModelDetail;

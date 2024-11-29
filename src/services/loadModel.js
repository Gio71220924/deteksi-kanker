const tf = require('@tensorflow/tfjs-node');
require('dotenv').config();

const MODEL_URL = process.env.MODEL_URL;

async function loadModel() {
    try {
        console.log('Loading model from:', MODEL_URL);
        const model = await tf.loadGraphModel(MODEL_URL); 
        console.log('Model loaded successfully.');
        return model; 
    } catch (error) {
        console.error('Error loading model:', error);
        throw error; 
    }
}

module.exports = loadModel;

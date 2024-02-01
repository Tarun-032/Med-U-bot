# app.py

from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io

app = Flask(__name__)

# Load the trained model
model = load_model("D:\med-bot\backend\model\full_model_weights.h5")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the image data from the request
        image_data = request.files.get('image').read()

        # Convert image data to a numpy array
        img = image.img_to_array(image.load_img(io.BytesIO(image_data), target_size=(224, 224)))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        # Make predictions using the loaded model
        predictions = model.predict(img)

        # Assuming predictions is a 2D array, you might want to extract the class with the highest probability
        predicted_class = np.argmax(predictions[0])

        # Send the predicted class back to the frontend
        return jsonify({'predicted_class': str(predicted_class)})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

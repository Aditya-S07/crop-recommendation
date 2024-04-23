from flask import Flask, request, render_template
import numpy as np
import joblib

# Creating Flask app
app = Flask(__name__)

# Load the model and scalers using joblib

model = joblib.load("model.pkl")
sc = joblib.load('standscaler.pkl')
ms = joblib.load('minmaxscaler.pkl')

# Define routes
@app.route('/')
def index():
    return render_template("index.html")

@app.route("/predict", methods=['POST'])
def predict():
    # Extracting data from the form
    N = request.form['Nitrogen']
    P = request.form['Phosporus']
    K = request.form['Potassium']
    temp = request.form['Temperature']
    humidity = request.form['Humidity']
    ph = request.form['Ph']
    rainfall = request.form['Rainfall']

    # Construct feature list
    feature_list = [N, P, K, temp, humidity, ph, rainfall]
    single_pred = np.array(feature_list).reshape(1, -1)

    # Scale the features
    scaled_features = ms.transform(single_pred)
    final_features = sc.transform(scaled_features)

    # Make prediction
    prediction = model.predict(final_features)

    # Dictionary to map prediction to crop
    crop_dict = {
        1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
        8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
        14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
        19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"
    }

    # Generate result message
    result = crop_dict.get(prediction[0], "Sorry, we could not determine the best crop to be cultivated with the provided data.")

    return render_template('index.html', result=result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)

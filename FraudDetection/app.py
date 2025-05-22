from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/check', methods=['POST'])
def check():
    name = request.form['name']
    age = int(request.form['age'])
    account = request.form['account']
    amount = float(request.form['amount'])
    merchant = request.form['merchant'].lower()

    # Dummy fraud logic
    is_fraud = amount > 10000 or merchant == "unknown"

    result = "⚠️ Fraudulent Transaction" if is_fraud else "✅ Non-Fraudulent Transaction"
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True, port=8000)

from flask import Flask, request, jsonify
from flask_cors import CORS
import whois


app=Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def get_info():
	domain = request.json['domain']
	data = whois.whois(domain)
	response = jsonify(data), 200
	return response
		

if __name__=='__main__':
	app.run(debug=True)


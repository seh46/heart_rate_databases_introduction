from pymodm import connect
import models
import datetime
from flask import Flask, jsonify, request
import main as mmod
connect("mongodb://vcm-3483.vm.duke.edu:27017/heart_rate_app")
app = Flask(__name__)

@app.route("/api/heart_rate", methods=["POST"])
def storeHR():
	"""
	Check if user exists.  If so, append new HR to user.
	If user does not exist, create new user.
	"""
	s = request.get_json()
	try:
		em = s["email"]
		hr = s["heart_rate"]
		t = s["time"]
		try:
			mmod.add_heart_rate(em, hr, t)
			return 'Successfully added heart rate to user', 200
		except:
			try:
				ag = s["age"]
				mmod.create_user(em, ag, hr, t)
				return 'Successfully created new user', 200
			except:
				return 'To create new user, specify age', 400
	except:
		return 'Please enter user email, heart rate, and time', 400
		

@app.route("/api/heart_rate/<user_email>", methods=["GET"])
def returnHRs(user_email):
	mmod.print_user(user_email)
	return jsonify(user_email), 200


@app.route("/api/heart_rate/average/<user_email>", methods=["GET"])
def returnAvg(user_email):
	mmod.avg_HR(user_email)
	return jsonify(avg), 200


@app.route("/api/heart_rate/interval_average", methods=["POST"])
def returnIntAvg():
	s = request.get_json()
	try:
		em = s["email"]
		t = s["time"]
		mmod.int_avg_HR(em, t)
		return jsonify(int_avg), 200
	except:
		return 'Please specify user email and start time to calculate average HR', 400




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
        try:
            mmod.add_heart_rate(em, hr)
            return 'Successfully added heart rate to user', 200
        except:
            try:
                ag = s["age"]
                mmod.create_user(em, ag, hr)
                return 'Successfully created new user', 200
            except:
                return 'To create new user, specify age', 400
    except:
        return 'Please enter user email, heart rate, and time', 400
		

@app.route("/api/heart_rate/<user_email>", methods=["GET"])
def returnHRs(user_email):
    vals = mmod.print_user(user_email)
    emp = vals["em"]
    hrp = vals["hr"]
    tp = vals["t"]
    return jsonify(emp,hrp,tp),200


@app.route("/api/heart_rate/average/<user_email>", methods=["GET"])
def returnAvg(user_email):
    vals = mmod.avg_HR(user_email)
    uavg = vals["avg"]
    utach = vals["tach"]
    return jsonify(uavg,utach), 200


@app.route("/api/heart_rate/interval_average", methods=["POST"])
def returnIntAvg():
    s = request.get_json()
    try:
        em = s["email"]
        t = s["time"]
        vals = mmod.int_avg_HR(em, t)
        uiavg = vals["int_avg"]
        utach = vals["tach"]
        return jsonify(uiavg,utach), 200
    except:
        return 'Please specify user email and start time to calculate average HR', 400

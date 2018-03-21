from pymodm import connect
import models
import datetime

def add_heart_rate(email, heart_rate, time):
    user = models.User.objects.raw({"_id": email}).first() # Get the first user where _id=email
    user.heart_rate.append(heart_rate) # Append the heart_rate to the user's list of heart rates
    user.heart_rate_times.append(time) # append the current time to the user's list of heart rate times
    user.save() # save the user to the database

def create_user(email, age, heart_rate):
    u = models.User(email, age, [], []) # create a new User instance
    u.heart_rate.append(heart_rate) # add initial heart rate
    u.heart_rate_times.append(datetime.datetime.now()) # add initial heart rate time
    u.save() # save the user to the database

def print_user(email):
    user = models.User.objects.raw({"_id": email}).first() # Get the first user where _id=email
    print(user.email)
    print(user.heart_rate)
    print(user.heart_rate_times)

def avg_HR(email):    
    user = models.User.objects.raw({"_id": email}),first()
    hrs = user.heart_rate
    avg = sum(hrs)/len(hrs)

def int_avg_HR(email, time):
    user = modes.User.objects.raw({"_id": email}),first()
    hrs = user.heart_rate
    times = user.heart_rate_times
    ahrs = []
    for i,n in enumerate(times):
        if i>time:
            ahrs.append(hrs[n])
    avg = sum(ahrs)/len(ahrs)

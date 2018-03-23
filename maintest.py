from pymodm import connect
import models
import datetime
import main
import pytest

def add_heart_rate(email, heart_rate, time):
    """
    Append a heart rate and time to an existing user
    :param email: user email address
    :param heart_rate: heart rate reading
    :param time: time at which heart rate was taken
    :return:
    """
    t1 =


def create_user(email, age, heart_rate):
    """
    Create new user with initial heart rate reading
    :param email: user email address
    :param age: user age
    :param heart_rate: initial heart rate reading
    :return:
    """



def print_user(email):
    """
    Print user email and list of heart rates and times
    :param email: user email address
    :return:
    """



def avg_HR(email):
    """
    Find the average heart rate for a user over complete time history
    :param email: user email address
    :return:
    """



def int_avg_HR(email, time):
    """
    Find the average heart rate for a user since a user-specified time point
    :param email: user email address
    :param time: time of first measurement to be included in average
    :return:
    """


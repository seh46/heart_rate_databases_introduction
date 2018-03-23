from pymodm import connect
import models
import datetime
import main
import pytest


def test_add_heart_rate(email, heart_rate, time):
    t1 = main.create_user('seh46@duke.edu', 22, 58)
    t2 = main.create_user('eab69@duke.edu', 22, 62)
    t1.add_heart_rate('seh46@duke.edu', 84)
    t2.add_heart_rate('eab69@duke.edu', 59)
    assert t1.heart_rate == [58, 84]
    assert t2.heart_rate == [62, 59]


def test_create_user(email, age, heart_rate):
    t1 = main.create_user('seh46@duke.edu', 22, 58)
    t2 = main.create_user('eab69@duke.edu', 22, 62)
    assert t1.heart_rate == 58
    assert t2.heart_rate == 62
    assert t1.heart_rate_times == datetime.datetime.now()
    assert t2.heart_rate_times == datetime.datetime.now()


def test_avg_hr(email):
    t1 = main.create_user('seh46@duke.edu', 22, 58)
    t2 = main.create_user('eab69@duke.edu', 22, 62)
    t1.add_heart_rate('seh46@duke.edu', 84)
    t2.add_heart_rate('eab69@duke.edu', 59)
    t1.add_heart_rate('seh46@duke.edu', 50)
    t2.add_heart_rate('eab69@duke.edu', 140)
    t1.avg_HR('seh46@duke.edu')
    t2.avg_HR('eab69@duke.edu')
    assert t1.avg == 64
    assert t2.avg == 87


# def test_int_avg_hr(email, time):

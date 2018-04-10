Heart Rate Databases Introduction
=================================

Overview
--------
A restful API that can interface with a database containing users and timestamped heart rate measurements.  Allows for creating new users with an initial heart rate, adding new heart rates to existing users, and retrieving them as data sets or averages.

## Basic setup instructions:
  1. Startup database using Docker ```docker run -v $PWD/db:/data/db -p 27017:27017 mongo```
  2. Create virtual environment populated by packages listed in environment.yml ```conda env create -f environment.yml```
  3. Install the following packages using pip:
  ```
  pip install Flask
  pip install Flask-Cors
  pip install pymodm
  ```
  4. Launch using gunicorn ```gunicorn --bind 0.0.0.0:5000 webservice:app```

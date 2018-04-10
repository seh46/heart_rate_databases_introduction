A restful API that can interface with a database containing users and timestamped heart rate measurements.  Allows for creating new users with an initial heart rate, adding new heart rates to existing users, and retrieving them as data sets or averages.


Basic setup instructions:

conda env create -f environment.yml

gunicorn --bind 0.0.0.0:5000 webservice:app

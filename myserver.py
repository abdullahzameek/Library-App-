from flask import *
from functools import wraps
import sqlite3
app = Flask(__name__)

@app.route('/') #@ is a decorator basically takes the function that goes after and spits a modified version of it.
def home():
    return render_template('webapp.html')

@app.route('/404/')
def do_shit():
    return 'Does shit!'

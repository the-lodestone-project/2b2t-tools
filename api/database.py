"""
Sqlite database
"""

import sqlite3
import datetime
import time

conn = sqlite3.connect('2b2t.db', check_same_thread=False)
cursor = conn.cursor()

# Create table for player positions
cursor.execute('''
CREATE TABLE IF NOT EXISTS position (
    username TEXT,
    position LIST
)''')
conn.commit()

cursor.execute('''
CREATE TABLE IF NOT EXISTS chat (
    username TEXT,
    message TEXT,
    timestamp TEXT
)''')
conn.commit()

cursor.execute('''
CREATE TABLE IF NOT EXISTS join_event (
    username TEXT,
    timestamp TEXT
)''')
conn.commit()

cursor.execute('''
CREATE TABLE IF NOT EXISTS leave_event (
    username TEXT,
    timestamp TEXT
)''')
conn.commit()

def add_player_join(name):
    """
    Add a player join to the database
    """
    
    date = datetime.datetime.now()
    
    cursor.execute(f"INSERT INTO join_event VALUES (?, ?)", (name, date))
    conn.commit()

def get_player_join(name):
    """
    Get a players join from the database
    """
    cursor.execute("SELECT * FROM join_event WHERE name=?", (name,))
    return cursor.fetchone()

def add_player_leave(name):
    """
    Add a player leave to the database
    """
    
    date = datetime.datetime.now()
    
    cursor.execute(f"INSERT INTO leave_event VALUES (?, ?)", (name, date))
    conn.commit()

def get_player_leave(name):
    """
    Get a players leave from the database
    """
    cursor.execute("SELECT * FROM leave_event WHERE name=?", (name,))
    return cursor.fetchone()


def add_player_location(name, position):
    """
    Add or update a player location in the database
    """
    cursor.execute("SELECT 1 FROM position WHERE name = ?", (name,))
    if cursor.fetchone():
        # Player name exists, update position 
        cursor.execute("UPDATE position SET position = ? WHERE name = ?", 
                       (position, name))
    else:
        # Insert new player 
        cursor.execute("INSERT INTO position VALUES (?, ?)", (name, position))
    conn.commit()
    

def get_player_location(name):
    """
    Get a players location from the database
    """
    cursor.execute("SELECT * FROM position WHERE name=?", (name,))
    return cursor.fetchone()
    
def add_player_chat(name, chat):
    """
    Add a player chat message to the database
    """
    
    date = datetime.datetime.now()
    
    cursor.execute(f"INSERT INTO chat VALUES (?, ?, ?)", (name, chat, date))
    conn.commit()
        

def get_player_chat(name):
    """
    Get a players chat from the database
    """
    cursor.execute("SELECT * FROM chat WHERE name=?", (name,))
    return cursor.fetchall()


def stop():
    """
    Close the database
    """
    conn.close()
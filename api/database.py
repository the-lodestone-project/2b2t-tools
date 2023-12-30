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
    cursor.execute("SELECT 1 FROM position WHERE username = ?", (name,))
    if cursor.fetchone():
        # Player name exists, update position 
        cursor.execute("UPDATE position SET position = ? WHERE username = ?", 
                       (position, name))
    else:
        # Insert new player 
        cursor.execute("INSERT INTO position VALUES (?, ?)", (name, position))
    conn.commit()
    

def get_player_location(name):
    """
    Get a players location from the database
    """
    cursor.execute("SELECT * FROM position WHERE username=?", (name,))
    result = cursor.fetchone()
    if result:
        return result
    else: 
        return None
    
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
    cursor.execute("SELECT * FROM chat WHERE username=?", (name,))
    return cursor.fetchall()


def get_player_play_time(name):
    """
    Get a players play time from the database
    """
    cursor.execute("SELECT * FROM join_event WHERE username=?", (name,))
    join = cursor.fetchone()
    cursor.execute("SELECT * FROM leave_event WHERE username=?", (name,))
    leave = cursor.fetchone()
    
    if not join:
        return 0
    
    if not leave:
        leave = datetime.datetime.now()
    else:
        leave = datetime.datetime.strptime(leave[1], "%Y-%m-%d %H:%M:%S.%f")
        
    join = datetime.datetime.strptime(join[1], "%Y-%m-%d %H:%M:%S.%f")
    
    return (leave - join).total_seconds()

def get_random_message():
    """
    Get a random message from the database
    """
    cursor.execute("SELECT * FROM chat ORDER BY RANDOM() LIMIT 1")
    return cursor.fetchone()

def get_total_chat_messages():
    """
    Get the total amount of chat messages from the database
    """
    cursor.execute("SELECT COUNT(*) FROM chat")
    return cursor.fetchone()[0]

def get_total_players():
    """
    Get the total amount of players from the database
    """
    cursor.execute("SELECT COUNT(*) FROM join_event")
    return cursor.fetchone()[0]



def get_player_first_join(name):
    """
    Get a players first join from the database
    """
    cursor.execute("SELECT * FROM join_event WHERE username=? ORDER BY timestamp ASC", (name,))
    result = cursor.fetchone()
    if result is None:
        return None
    else:
        return result

def get_player_last_join(name):
    """
    Get a players last join from the database
    """
    cursor.execute("SELECT * FROM join_event WHERE username=? ORDER BY timestamp DESC", (name,))
    result = cursor.fetchone()
    if result is None:
        return None
    else:
        return result

def get_player_last_leave(name):
    """
    Get a players last leave from the database 
    """
    cursor.execute("SELECT * FROM leave_event WHERE username=? ORDER BY timestamp DESC", (name,))
    result = cursor.fetchone()
    if result is None:
        return None
    else:
        return result

def get_player_join_count(name):
    """
    Get a players join count from the database
    """
    cursor.execute("SELECT COUNT(*) FROM join_event WHERE username=?", (name,))
    result = cursor.fetchone()
    if result is None:
        return 0
    return result[0]


def stop():
    """
    Close the database
    """
    conn.close()
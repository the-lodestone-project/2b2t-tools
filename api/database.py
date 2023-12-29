"""
Sqlite database
"""

import sqlite3


conn = sqlite3.connect('2b2t.db', check_same_thread=False)
cursor = conn.cursor()

# Create table for player positions
cursor.execute('''
CREATE TABLE IF NOT EXISTS position (
    name TEXT,
    position LIST
)''')
conn.commit()




def add_player_location(name, position):
    """
    Add a player location to the database
    """
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
    
    cursor.execute(f'''
    CREATE TABLE IF NOT EXISTS {name} (
        chat TEXT
    )''')
    conn.commit()
    cursor.execute(f"INSERT INTO {name} VALUES (?)", (chat,))
    conn.commit()
        

def get_player_chat(name):
    """
    Get a players chat messages from the database
    """
    cursor.execute(f"SELECT * FROM {name}")
    return cursor.fetchall()
    
def stop():
    """
    Close the database
    """
    conn.close()
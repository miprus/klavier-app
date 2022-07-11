from flask import Flask, render_template
from flaskext.mysql import MySQL
app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'd267euqrhnw8kwgb'
app.config['MYSQL_DATABASE_PASSWORD'] = 'eddxjs9fz5rjyhf1'
app.config['MYSQL_DATABASE_DB'] = 'li5xq3acpdr914e0'
app.config['MYSQL_DATABASE_HOST'] = 'nuepp3ddzwtnggom.chr7pe7iynqr.eu-west-1.rds.amazonaws.com'
mysql.init_app(app)

@app.route('/')
def landing_page():
	return render_template('index.html')

@app.route('/music_library/<category>')
def music_library(category):
	#checks if category is supplied in the url, if not - a default query is send to display all records with 'classic' tag assigned to them	
	if category:
		con = mysql.connect()
		cur = con.cursor()
		cur.execute("SELECT mp.pieceID, mp.piece_name, i.img_url FROM music_pieces mp, images i, tags t, tag_map tm WHERE mp.pieceID = i.pieceID AND t.tagID = tm.tagID AND mp.pieceID = tm.pieceID AND t.tag_name = (%s)", [category])
		rows = cur.fetchall()
		con.close() 

		return render_template('music_library.html', rows = rows)
	else:
		con = psycopg2.connect()
		cur = con.cursor()
		cur.execute("SELECT mp.pieceID, mp.piece_name, i.img_url FROM music_pieces mp, images i, tags t, tag_map tm WHERE mp.pieceID = i.pieceID AND t.tagID = tm.tagID AND mp.pieceID = tm.pieceID AND t.tag_name = 'classic'")
		rows = cur.fetchall()
		con.close()  

		return render_template('music_library.html', rows = rows)

	
@app.route('/game/<int:pieceID>')
def game_screen(pieceID):
	#check if ID for music piece in the library is provided. If no ID is present the game screen page is displayed in 'free mode' and no JS level builder is called.
	#If ID is present - SQL query data will be stored in hidden input. Its value will be raed by JS game engine and build level/load music piece based on the data 
	if pieceID:
		con = psycopg2.connect()
		cur = con.cursor()  
		cur.execute("SELECT piece_name, piece_url FROM music_pieces WHERE pieceID = (%s)", [pieceID])
		pieceInfo = cur.fetchall()
		con.close()  

		return render_template('klavier_game.html', pieceInfo = pieceInfo)
	else:
		return render_template('klavier_game.html', pieceInfo = False)

if __name__ == "__main__":
	app.run(host = '0.0.0.0', debug=True)
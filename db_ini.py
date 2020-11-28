#DB creation file containg all scripts to create tables for klavierDB.db file
#The SQL syntax may be to complex for sqlite - needs more testing
#conn.execute() function should be execute once per python file launch, otherwise a problems may arrise
#the actual database was expanded with SQLite Browser tool
  
import sqlite3

conn = sqlite3.connect("klavierDB.db")

conn.execute("""
CREATE TABLE IF NOT EXISTS `images` (
  `imgID` int(4) NOT NULL,
  `pieceID` int(4) NOT NULL,
  `img_url` text NOT NULL,
  PRIMARY KEY (`imgID`,`pieceID`)
);
""")

conn.execute("""
INSERT INTO `images` (`imgID`, `pieceID`, `img_url`) VALUES
(1, 1, 'piece_placeholder.png'),
(2, 2, 'piece_placeholder.png'),
(3, 3, 'piece_placeholder.png'),
(4, 4, 'piece_placeholder.png'),
(5, 5, 'piece_placeholder.png'),
(6, 6, 'piece_placeholder.png'),
(7, 7, 'piece_placeholder.png'),
(8, 8, 'piece_placeholder.png'),
(9, 9, 'piece_placeholder.png'),
(10, 10, 'piece_placeholder.png'),
(11, 11, 'piece_placeholder.png');
""")

data = conn.execute("""
SELECT * FROM images
""")

for row in data:
  print("imgID = ", row[0])
  print("pieceID = ", row[1])
  print("img_url = ", row[2])

#############################################

data = conn.execute("""
CREATE TABLE IF NOT EXISTS music_pieces (
  `pieceID` int(4) NOT NULL,
  `piece_name` text NOT NULL,
  `piece_url` text NOT NULL,
  PRIMARY KEY (`pieceID`)
);
""")

conn.execute("""
INSERT INTO `music_pieces` (`pieceID`, `piece_name`, `piece_url`) VALUES
(1, 'Fur Elise - Beethoven', 'beethoven_fur_elise.json'),
(2, 'Raindrop - Chopin', 'chopin_raindrop.json'),
(3, 'Drunken Sailor', 'drunken_sailor.json'),
(4, 'God Save The Queen', 'god_save_the_queen.json'),
(5, 'Greensleeves', 'greensleeves.json'),
(6, 'Kalinka - Folklore', 'kalinka.json'),
(7, 'Lilium', 'lilium.json'),
(8, 'Moonlight Sonata - 1st movement', 'moonlight_sonata.json'),
(9, 'Eine Kleine - Mozart', 'mozart_eine_kleine.json'),
(10, 'Spring - Vivaldi', 'vivaldi_spring.json'),
(11, 'Will of The Heart', 'will_of_the_heart.json');
""")

data = conn.execute("""
SELECT * FROM music_pieces
""")

for row in data:
  print("pieceID = ", row[0])
  print("piece_name = ", row[1])
  print("piece_url = ", row[2])

########################################################

data = conn.execute("""
CREATE TABLE IF NOT EXISTS `tags` (
  `tagID` int(4) NOT NULL,
  `tag_name` text NOT NULL,
  PRIMARY KEY (`tagID`)
);
""")

conn.execute("""
INSERT INTO `tags` (`tagID`, `tag_name`) VALUES
(1, 'classic'),
(2, 'other'),
(3, 'pop'),
(4, 'tv'),
(5, 'folklore');
""")

data = conn.execute("""
SELECT * FROM tags
""")

for row in data:
  print("tagID = ", row[0])
  print("tag_name = ", row[1])

#########################################################

data = conn.execute("""
CREATE TABLE IF NOT EXISTS `tag_map` (
  `tag_mapID` int(4) NOT NULL,
  `pieceID` int(4) NOT NULL,
  `tagID` int(4) NOT NULL,
  PRIMARY KEY (`tag_mapID`,`pieceID`,`tagID`)
);
""")

conn.execute("""
INSERT INTO `tag_map` (`tag_mapID`, `pieceID`, `tagID`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 1),
(5, 5, 1),
(6, 6, 5),
(7, 7, 2),
(8, 8, 1),
(9, 9, 1),
(10, 10, 1),
(11, 11, 2);
""")

data = conn.execute("""
SELECT * FROM tag_map
""")

for row in data:
  print("tag_mapID = ", row[0])
  print("pieceID = ", row[1])
  print("tagID = ", row[2])

#############################################################

conn.close() 
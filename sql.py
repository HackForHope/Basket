import mysql.connector
con = mysql.connector.connect(
  host="localhost",
  port="3306",
  user="root",
  passwd="12345678"
)
mycursor = con.cursor()

#cart table
mycursor.execute("USE mydatabase")

def initialize():
    # create seven tables request, helpbinding, user, market, shopping cart, order table, supermarkets.
    # user table
    mycursor.execute("CREATE TABLE users (userID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL,google_id varchar(255) NOT NULL,live_address varchar(80),address varchar(80), lat FLOAT(6),lng FLOAT(6));")

    # request table
    mycursor.execute("CREATE TABLE request(requestID int AUTO_INCREMENT PRIMARY KEY, helperUserID int(10), requestedUserID int(10), status boolean);")

    # market table
    mycursor.execute("CREATE TABLE market(goodID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, price FLOAT(4),category varchar(255), supermarketID int(10));")

    # cart table
    mycursor.execute("CREATE TABLE cart(cartID int AUTO_INCREMENT PRIMARY KEY,userID int(10),goodID int(10), num int(10),num int(10), price FLOAT(2));")

    #order table
    mycursor.execute("CREATE TABLE order_list(orderID int AUTO_INCREMENT PRIMARY KEY,userID int(10),order_summary varchar(255), lat FLOAT(4), lng FLOAT(4));")

    #supermaket table
    mycursor.execute("CREATE TABLE supermarket (supermarketID int AUTO_INCREMENT PRIMARY KEY, name varchar(255), address varchar(80), lat FLOAT(4) NOT NULL,lng FLOAT(4) NOT NULL);")

#register a user
def register(name, google_id):
	sql = "INSERT INTO users (name, google_id) VALUES (%s, %s);"
	val = (name,google_id)
	mycursor.execute(sql,val)

#update profile

#create a request
def add_to_request(helperID,requestedUserID,status=False):
	sql = "INSERT INTO request (helperUserID, requestedUserID,status) VALUES (%s,%s, %s);"
	val = (helperID,requestedUserID,status)
	mycursor.execute(sql,val)

#create a good
def add_to_market(name,price,category,supermarketID):
	sql = "INSERT INTO market(name,price,category,supermarketID) VALUES (%s,%s, %s,%s);"
	val = (name,price,category,supermarketID)
	mycursor.execute(sql,val)

# create a cart
def add_to_cart(goodID,userID, num,price):
	sql = "INSERT INTO cart(goodID,userID,num,price) VALUES (%s,%s, %s,%s);"
	val = (goodID,userID,num,price)
	mycursor.execute(sql,val)

#create an order
def add_to_order(userID,order_summary,lat,lng):
	sql = "INSERT INTO order(userID,order_summary,lat,lng) VALUES (%s,%s, %s,%s);"
	val = (userID,order_summary,lat,lng)
	mycursor.execute(sql,val)

 #add a supermarket to the table of supermarket
def add_supermarket(name,address,lat,lng):
	sql = "INSERT INTO supermaket(goodID,userID,num,price) VALUES (%s,%s, %s,%s);"
	val = (name,address,lat,lng)
	mycursor.execute(sql,val)

#return a request by helper ID
def get_request_by_helper(helperID):
    sql = "SELECT * FROM request WHERE helperUserID = %s;"
    val = (helperID)
    mycursor.execute(sql,val)



#return a request by helped ID
def get_request_by_requested(requestedUserID):
    sql = "SELECT * FROM request WHERE requestedUserID = %s;"
    val = (requestedUserID)
    mycursor.execute(sql,val)


def get_order_by_user(userID):
    sql = "SELECT * FROM order_list WHERE userID = %s;"
    val = (userID);
    mycursor.execute(sql,val)

def get_order_by_ID(orderID):
    sql = "SELECT * FROM order_list WHERE orderID = 1;"
    val = (orderID)
    mycursor.execute(sql,val)
    result = mycursor.fetchall()
    return result
print(get_order_by_ID(1))
con.close()
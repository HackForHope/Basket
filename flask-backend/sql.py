import mysql.connector

con = mysql.connector.connect(
  host="basket-squad.mysql.database.azure.com",
  port="3306",
  user="basket@basket-squad",
  passwd="mohmu7-qopvif-bynFez",
)
mycursor = con.cursor()
def initialize():
    mycursor.execute("DROP database IF EXISTS basketdata;")
    # create seven tables request, helpbinding, user, market, shopping cart, order table, supermarkets.

    mycursor.execute("create database basketdata")

    mycursor.execute("USE basketdata")

    # username, email, password, isActive: true/false
    mycursor.execute("CREATE TABLE users (userID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, live_address varchar(80), address varchar(80), lat FLOAT(6),lng FLOAT(6), isActiveHelper boolean);")

    # market table: name, price, superMarketID, imgURL
    mycursor.execute("CREATE TABLE market(goodID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, price FLOAT(4), supermarketID int(10), imgURL varchar(255));")

    # cart table: 
    mycursor.execute("CREATE TABLE cart(cartID int AUTO_INCREMENT PRIMARY KEY, orderID int(10), userID int(10), goodID int(10), num int(10), price FLOAT(2));")
    
    # order table: helperUserID requestedUserID order_title order_note  lat long    isTaken isFinished
    mycursor.execute("CREATE TABLE order_list(orderID int AUTO_INCREMENT PRIMARY KEY, helperUserID int(10), requestedUserID int (10), order_title varchar(40), order_note varchar (40), lat FLOAT(4), lng FLOAT(4), isTaken boolean, isFinished boolean);")

    #supermarket table
    mycursor.execute("CREATE TABLE supermarket(supermarketID int AUTO_INCREMENT PRIMARY KEY, name varchar(255), address varchar(80), lat FLOAT(4) NOT NULL,lng FLOAT(4) NOT NULL);")

    #pair
    mycursor.execute("create table userNameID (userID, name)")
#register a user
def register(username, email, password, isHelper=False):
    sql = "INSERT INTO users (name, email, password, isActiveHelper) VALUES (%s, %s, %s, %s); "
    val = (username, email, password, isHelper)
    mycursor.execute(sql,val)
    con.commit()

#register a user
def register_full(username, email, password, lat, lng, isActiveHelper=False):
    sql = "INSERT INTO users (name, email, password, lat, lng, isActiveHelper) VALUES (%s, %s, %s, %s, %s, %s); "
    val = (username, email, password, lat, lng, isActiveHelper)
    mycursor.execute(sql,val)
    con.commit()

#create a good
def add_to_market(name,price,supermarketID):
    sql = "INSERT INTO market(name,price,supermarketID) VALUES (%s, %s,%s);"
    val = (name,price,supermarketID)
    mycursor.execute(sql,val)
    con.commit()

# create a cart
def add_to_cart(goodID,userID, num,price):
    sql = "INSERT INTO cart(goodID,userID,num,price) VALUES (%s,%s, %s,%s);"
    val = (goodID,userID,num,price)
    mycursor.execute(sql,val)
    con.commit()

#create an order helperUserID int(10), requestedUserID int (10), order_title varchar(40), order_note varchar (40), lat FLOAT(4), lng FLOAT(4), isTaken boolean, isFinished boolean);")
def add_to_order(requestedUserID, order_title ,order_note, lat,lng):
    sql = "INSERT INTO order_list(requestedUserID,order_title, order_note, lat, lng, isTaken, isFinished) VALUES (%s,%s, %s,%s, %s, False, False);"
    val = (requestedUserID,order_title,order_note,lat,lng)
    mycursor.execute(sql,val)
    con.commit()


 #add a supermarket to the table of supermarket
def add_supermarket(name,address,lat,lng):
    sql = "INSERT INTO supermarket(name, address, lat, lng) VALUES (%s,%s, %s,%s);"
    val = (name,address,lat,lng)
    mycursor.execute(sql,val)
    con.commit()

#get active request
def get_active_request():
    sql = "SELECT * FROM order_list WHERE isTaken=False;"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    return result


#get active request
def get_active_helper():
    sql = "SELECT * FROM order_list WHERE isActive=True;"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    print(result)
    return result


#return a request by helper ID
def get_request_by_helper (helperID):
    sql = "SELECT * FROM request WHERE helperUserID = %s;"
    mycursor.execute(sql%helperID)
    result = mycursor.fetchall()
    con.commit()
    return result


#return a request by helped ID
def get_request_by_requested(requestedUserID):
    sql = "SELECT * FROM request WHERE requestedUserID = %s;"
    mycursor.execute(sql%requestedUserID)
    result = mycursor.fetchall()
    con.commit()
    return result


def get_order_by_user(userID):
    sql = "SELECT * FROM order_list WHERE helperUserID = %s;"
    mycursor.execute(sql % userID)
    result = mycursor.fetchall()
    con.commit()
    return result

def get_order_by_ID(orderID):
    sql = "SELECT * FROM order_list WHERE orderID = %s;"
    mycursor.execute(sql % orderID)
    result = mycursor.fetchall()
    con.commit()
    return result

def get_all_market():
    sql = "SELECT * FROM market"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    return 
    
def get_all_orders():
    sql = "SELECT * FROM order_list;"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    con.commit()
    return result

def get_all_users():
    sql = "SELECT * FROM users;"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    con.commit()
    return result

def delete(table_name):
    sql = "TRUNCATE TABLE %s;"
    mycursor.execute(sql % table_name)

#initialize()
mycursor.execute("USE basketdata")
con.commit()
#register("jl", "mike@qq.com", "1234")
# get_active_request()

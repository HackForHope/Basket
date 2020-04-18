import mysql.connector

con = mysql.connector.connect(
  host="basket-squad.mysql.database.azure.com",
  port="3306",
  user="basket@basket-squad",
  passwd="mohmu7-qopvif-bynFez"
)
mycursor = con.cursor()
def initialize():
    mycursor.execute("DROP database IF EXISTS basketdata;")
    # create seven tables request, helpbinding, user, market, shopping cart, order table, supermarkets.

    mycursor.execute("create database basketdata")

    mycursor.execute("USE basketdata")

    # user table
    mycursor.execute("CREATE TABLE users (userID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, live_address varchar(80), address varchar(80), lat FLOAT(6),lng FLOAT(6), isActiveHelper boolean);")
    mycursor.execute("alter table users add unique (name)")

    # market table
    mycursor.execute("CREATE TABLE market(goodID int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, price FLOAT(4),category varchar(255), supermarketID int(10));")

    # cart table
    mycursor.execute("CREATE TABLE cart(cartID int AUTO_INCREMENT PRIMARY KEY, orderID int(10), userID int(10), goodID int(10), num int(10), price FLOAT(2));")

    #order table
    mycursor.execute("CREATE TABLE order_list(orderID int AUTO_INCREMENT PRIMARY KEY, helperUserID int(10), requestedUserID int (10),cartID int(10),order_summary varchar(255), lat FLOAT(4), lng FLOAT(4), isTaken boolean, isFinished boolean);")

    #supermaket table
    mycursor.execute("CREATE TABLE supermarket (supermarketID int AUTO_INCREMENT PRIMARY KEY, name varchar(255), address varchar(80), lat FLOAT(4) NOT NULL,lng FLOAT(4) NOT NULL);")

#register a user
def register(username, email, password):
    sql = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s); "
    val = (username, email, password)
    mycursor.execute(sql,val)
    con.commit()

#create a request
def add_to_request(helperID,requestedUserID,status=False):
    sql = "INSERT INTO request (helperUserID, requestedUserID,status) VALUES (%s,%s, %s);"
    val = (helperID,requestedUserID,status)
    mycursor.execute(sql,val)
    con.commit()

#create a good
def add_to_market(name,price,category,supermarketID):
    sql = "INSERT INTO market(name,price,category,supermarketID) VALUES (%s,%s, %s,%s);"
    val = (name,price,category,supermarketID)
    mycursor.execute(sql,val)
    con.commit()

# create a cart
def add_to_cart(goodID,userID, num,price):
    sql = "INSERT INTO cart(goodID,userID,num,price) VALUES (%s,%s, %s,%s);"
    val = (goodID,userID,num,price)
    mycursor.execute(sql,val)
    con.commit()

#create an order
def add_to_order(userID, order_summary, lat,lng):
    sql = "INSERT INTO order(userID,order_summary,lat,lng) VALUES (%s,%s, %s,%s);"
    val = (userID,order_summary,lat,lng)
    mycursor.execute(sql,val)
    con.commit()

 #add a supermarket to the table of supermarket
def add_supermarket(name,address,lat,lng):
    sql = "INSERT INTO supermaket(goodID,userID,num,price) VALUES (%s,%s, %s,%s);"
    val = (name,address,lat,lng)
    mycursor.execute(sql,val)
    con.commit()

#get active request
def get_active_request():
    sql = "SELECT * FROM order_list WHERE isTaken=False;"
    mycursor.execute(sql)
    result = mycursor.fetchall()
    return result

#return a request by helper ID
def get_request_by_helper(helperID):
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
print(get_order_by_user(1))
get_active_request()
import csv
from sql import *
from flask import jsonify
# initialize()
# add_supermarket("Whole Foods", "788 S Grand Ave, Los Angeles, CA 90017", "34.0425633", "-118.2625614")
# add_supermarket("Trader Joes",	"3131 S Hoover St Ste 1920, Los Angeles, CA 90089" ,"34.0254377" ,"-118.2851281")
# add_supermarket("Ralphs",	"2600 S Vermont Ave, Los Angeles, CA 90007", "34.0463405", "-118.3216435")
# add_supermarket("Costco Wholesale", "6333 Telegraph Rd, Commerce, CA 90040","34.0107194", "-118.1936379")

# with open('/Users/jyshi/Desktop/MarkerTable.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 0:
#             print(f'Column names are {", ".join(row)}')
#             line_count += 1
#         else:
#             add_to_order( line_count, row[2], row[3], row[4], row[5])
#             line_count += 1
#     print(f'Processed {line_count} lines.')

# #pair
# mycursor.execute("create table userNameID(userID int(10), name varchar(255) )")

sql = "SELECT * FROM order_list"
mycursor.execute(sql)
result = mycursor.fetchall()

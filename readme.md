# Model description
## Item
This table contains fundamental information of items such as name, detail, and so on.
* id : identify of each item
* name : name of each item
* detail : detail of each item
* price : base price of each item
* start_date : the date that start to sale
* end_date : the date that stop to sale
* limit_type : the limit type of item
  * LIMIT : item has limit to sale (indicate by limit column)
  * UNLIMIT : item does not has limit to sale
* limit : limit to sale item
* stock_type : type of item code to sale
  * IN_STOCK : sale item code only in Item Stock table
  * CREATE_ON_SALE : generate item code when sale and store to Item Stock

## Item Stock
This table contains item code that prepare for sale and already sale.
* id : identify of item code
* item_id : item relate to this item code
* code : item code
* status : status of item code
  * READY : ready to sale
  * SOLD_OUT : already sale

## Item Sale
This table contains information of item that sale on platform. The Item sale can contain more than one item to sale (bundle).
* id : identify of each item sale
* price : price to sale
* start_date : the date that start to sale
* end_date : the date that stop to sale

## Item Sale Map
This table uses for map Item Sale and Item table.
* item_sale_id : ID of Item Sale
* item_id : ID of Item

## Promotion
This table contains information for Item Sale.
* id : identify of each promotion
* item_sale_id : ID of relate Item Sale
* type : promotion type
  * OVERRIDE : override Item Sale price
  * PERCENT : use percentage of Item Sale price
* value : value of promotion (override price/percentage price)
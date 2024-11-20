/* 
 Special price scenarios in pence

 if one item scanned
    add item price
 if three items scanned, 
    the third one is discounted 40%
  if one item
    add item price
 if two items
    the second one is discounted by 50%


 Example scenario 2
 if one item
    add item price
 if three A items
    discount on each item is 13.32%
 if two B items
    discount on each item is 25%

 if click on button A and item A is not a multiple of 3
        add item price associated to A
    else if item A is a multiple of 3
        add a 13.32% discount on each of the items.

SpecialPriceA()
click on button A, the count is added to an array
    a loop a running in the array, when it detects more than 3 items, it does a division to 3, and saves the result
    then it checks for the remainder of that division, if it's bigger than 0, then it adds the normal price to the amount of items in this remainder.
SpecialPriceB()
click on button B, the count is added to an array
    a loop a running in the array, when it detects more than 2 items, it does a division to 2, and saves the result
    then it checks for the remainder of that division, if it's bigger than 0, then it adds the normal price to the amount of items in this remainder.
    division result price = price*(division result)
    remainder result price = price*(remainder of that division)
    then sum of division result price + remainder result price

SpecialPriceB()
click on button B, the count is added to an array
    a loop a running in the array, when it detects more than 2 items, it does a division to 2, and saves the result (special price count = 2)
    The count is then multiplied by 45 -> 2 * 45 = 90 (specialPrice)
    then it checks for the remainder of that division, if it's bigger than 0, multiplied by 30 (UnitPrice)
    else if only 1 item is scanned
        add item price (SingleUnit)
    SpecialPrice + UnitPrice + SingleUnit = Total

*/


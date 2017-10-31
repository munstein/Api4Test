# Api4Test
A fake data provider for test and study purposes made with Node.js.

The project is live at ~~http://localhost~~

Just kidding it's: http://api4test.azurewebsites.net

## GET examples:

URL: http://api4test.azurewebsites.net

Returns: [{"word" : "lorem", "number" : 1},{"word" : "ipsum", "number" : 2},{"word" : "dolor", "number" : 3}]

URL: http://api4test.azurewebsites.net/9

Returns: {"word" : "lorem", "number" : 9}

URL: http://api4test.azurewebsites.net/hello

Returns: {"word" : "hello", number : 1}

## POST examples(also supports x-www-form-urlencoded):

URL: http://api4test.azurewebsites.net/

Body: {"word":"lorem","number":11}

Type: application/json

Returns: You posted: {"word":"lorem","number":11}

## PUT examples:

URL: http://api4test.azurewebsites.net/test

Returns: "test was updated."

URL: http://api4test.azurewebsites.net/12

Returns: "12 was updated."

## DELETE examples:

URL: http://api4test.azurewebsites.net/test

Returns: "test was deleted."

URL: http://api4test.azurewebsites.net/12

Returns: "12 was deleted."


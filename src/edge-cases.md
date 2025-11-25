# The edge-cases are:

1. When the user first type:

- a symbol ["*", "+", "/"] returns null as userInput and null as result
  ?- a symbol ["="] returns null as userInput and null as result
- a symbol ["-"] returns the symbol itself as userInput and null as result and after clicking "=" returns null as result
- a symbol ["%"] returns the symbol itself as userInput and null as result and after clicking "=" returns "Expression error" as result
- a digit ["1", "2", "3", "4", "5", "6", "7", "8", "9"] returns the digit as userInput and null as result and after clicking "=" returns null as result
- a digit ["0", "00"] returns "0" as userInput and null as result and after clicking "=" returns null as result
- a digit ["."] returns "0." as userInput and null as result and after clicking "=" returns null as result

2. When the user equation starts with 0, 0. or digit followed by:

- ["+", "-", "*", "/"] returns "(0 or digit) symbol" as userInput and null as result and after clicking "=" returns null as result
- ["%"] returns the "digit symbol" as UserInput and directly the mathematical result as result and after clicking "=" returns the mathematical result

3. When the user types a digit followed by 2 or more symbols:

- first symbol = ["+", "*", "/", "-"] and second symbol = ["+", "*", "/"] the symbol changes its value into the last one typed as userInput and after clicking "=" it returns null as result
  eg. 9+- is 9-

- first symbol = ["+", "*", "/", "-"], second symbol = ["+", "*", "/", "-"] (the symbol changes its value into the last one typed) followed by another digit returns the ecuation as userInput and the mathematical result as result.
  eg. 9+-1 is 9-1 as userInput and 8 as result

- first symbol = ["*", "/"] and second symbol = ["-"] returns the digit and both symbols as userInput but after clicking "=" it returns null as result

- first symbol = ["*", "/"], second symbol = ["-"] followed by another digit returns the digit, both symbols and the last digit as userInput and after clicking "=" it returns the mathematical result as result

- first symbol = ["+", "*", "/", "-"] followed by the second symbol = ["%"] followed by any other symbols returns the digit and all the symbols or digits as userInput but after clicking "=" it returns "Expression error" as result
  eg. 9+%

4. Inside an ecuation a "." can be followed only by a digit or any symbol except another "."

5. The symbol "00" returns:

- "0" as userInput if the ecuation begins with it and null as a result
- "0" as userInput if it's after another symbol like ["+", "-", "*", "/", "%"] and the mathematical result as a result (except "/" which returns null)
- "00" as userInput if it's typed after another digit returns and null as result.

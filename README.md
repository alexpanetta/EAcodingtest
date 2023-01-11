# EAcodingtest
Note: Can't get fetch request to work, payload can be hardcoded to run the tests.
  **Assumption is bands don't have to have record labels**

Includes checks for negative scenarios by validating each entry's keys in the payload match to both MusicFestival and Bands schemas, as well as null and empty string verifications. It can check if a festival or band is missing or includes an extra field.

Test cases:
  1. Status code == 200
  2. Response is valid JSON format
  3. Verifying each festival has a name 
  4. Each band has a name
  5. Record label value optional for bands but field still exists
  
  
Results:
  Missing festival name for this festival entry: {"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}
  
  Missing recordLabel field for this band entry: {"name":"Squint-281"}

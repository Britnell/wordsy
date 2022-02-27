As a little coding challenge I built a clone of Wordle : [https://www.powerlanguage.co.uk/wordle/](https://www.powerlanguage.co.uk/wordle/)
The original is obviously the best, and has a much nicer vocabulary.
This was a little coding challenge to implement this with next.js

This offers unlimited words but does not track scores or anything

# Dictionary

see `/dict` folder

- to build dict i used [wordest-dictionary](https://github.com/wordset/wordset-dictionary) dataset
- clone [https://github.com/wordset/wordset-dictionary](https://github.com/wordset/wordset-dictionary) into `/dict` folder
  then run dict-builder to "build" the dictionary
  this simply loads all dictionaries.json and filter for 5 letter words and a few more

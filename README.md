### TEXTSEARCH BACKEND (EXPRESS JS)
- Backend RESTAPI  https://github.com/AtulRaj151/textsearch-backend using EXPRESJS

### TEXTSEARCH FRONTEND


### Description
- A service / program which should be able to insert new questions in a question
bank. This service / program should also provide a way to retrieve the question based
on a text.

### This service / program should support at least 2 operations:
- Insertion
    - Service / Program should be able to take input of question in following format
      - Query or Question < string > 
      - Topic: <string, enum>
      - Tags: <array<string, enum>
- Search
  - Service / Program should be able to retrieve the questions based on the string passed.
The passed string should be matched with <Query> OR <Tags> field of Questions and
if any of these fields of questions has the passed string in them then service / program
should return the question in the searched result


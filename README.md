# MSSE 667 Solo Blog Project

This is a Spring-boot, MongoDB, React, React-Native project that pulls from a mongodb database on Blog Posts. You can 
signup, login, create, update, read, and delete your posts, and view other published posts.

## Installation/Usage

There are multiple steps to setup each part of the project. The backend connects to a MongoDB db named *blog*

### Backend/Spring-boot

Simply navigate to project root folder and run:
```bash
./mvnw spring-boot:run
```
EACH TIME YOU RUN THIS COMMAND, YOUR DATABASE WILL RESET AND PRE-POPULATE WITH DATA! TO DISABLE, REMOVE THE COMMANDS IN 
'src/main/java/com/react_blog/ReactBlogApplication' ON LINES 39-41 TO NOT RESET DATABASE. DO NOT REMOVE LINES 42-47 AS 
THEY ENSURES THE PROPER ROLES ARE IN THE DB. FINALLY, REMOVE LINES 48-68 TO NOT ADD A NEW USER AND NEW POSTS. TO JUST 
ADD A USER, REMOVE THE CREATE_POSTS COMMAND ON LINES 62 AND 66.

### Frontend/React
Navigate to the frontend folder where the React project is stored, install the node_modules, then start the project:
```bash
cd src/main/frontend
npm install
npm start
```

### Native/React-Native
Navigate to the native folder where the React-Native project is stored, install the node_modules, then start the project
 on your preferred emulator:
 
 Test Username and password (CASE SENSITIVE!, USERNAME AND PASSWORD START WITH CAPITALIZED "T":
 
 Username: *Testman*
 
 Password: *Testman1234*
 
```bash
cd src/main/native
npm install

react-native run-ios
// OR 
react-native run-android
```


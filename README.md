##Task: Develop Node.js APIs for School Management
###Objective: Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

####Requirements:
Database Setup:
Description: Create a schools table in MySQL with the following fields:
id (Primary Key)
name (VARCHAR)
address (VARCHAR)
latitude (FLOAT)
longitude (FLOAT)
API Development:
Add School API:

####Endpoint: /addSchool
Method: POST
Payload: Includes name, address, latitude, and longitude.
Functionality: Validates the input data and adds a new school to the schools table.
Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).
List Schools API:

####Endpoint: /listSchools
Method: GET
Parameters: User's latitude and longitude.
Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.
Hosting and Testing:
Hosting: Deploy the APIs on a suitable hosting service.
Postman Collection:
Create a Postman collection for both APIs.
Include example requests and document expected responses.
Share the collection with stakeholders for testing purposes.

####Deliverables:
Source code repository with complete API implementation.
Live API endpoints accessible for testing.
Postman collection shared via email or accessible through a shared link.

Not Hosted API , I get No free platform for store MySQL DB DATA
Localy Tested

## ADD SCHOOLS
###API END Point :- http://localhost:8000/api/addSchool
####Add school list into Mysql Database. 

![image](https://github.com/user-attachments/assets/b81ff1ed-26fb-4292-a472-738388efd959)

## LIST SCHOOLS 
###API END POINT : http://localhost:8000/api/listSchools?latitude=10.7128&longitude=-94.0060
####User give current cordinates: To find shortest nearest Schools List. 

![image](https://github.com/user-attachments/assets/a52d554a-0b52-4818-a7ac-0ff3575965a2)
![image](https://github.com/user-attachments/assets/51d16781-bee6-42e0-bdc9-25aae7c492e3)


  

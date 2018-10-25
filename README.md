# React.js Coding Assignment

### Commands
Install dependencies: `yarn install`

Build & run: `yarn run dev-server`

Run tests: `yarn run test`

### Requirements
The aim of this exercise is to assess your problem-solving approach, your ability to turn your solution into working code and the way in which you structure your code.

You are required to: 
* Produce working code together with appropriate tests to solve the problem 
* State clearly any assumptions made (either in code comments or as a separate README file) 

##### Food Hygiene Ratings 
The Food Standards Agency rates restaurants and other food outlets with a hygiene rating from 1-5 stars (or an “Exempt” rating). In Scotland, they are rated as “Pass” or “Needs Improvement”. 
You must create a simple web application using the API and data sources at http://api.ratings.food.gov.uk/help that fulfils the user story below. 

#### User Story 
The following user story needs to be implemented. 

```As a user I want to see how food hygiene ratings are distributed by percentage across a selected Local Authority so that I can understand the profile of establishments in that authority.``` 

###### Acceptance Criteria 
Given a local authority with establishments rated as follows: 
* Establishment A: 5
* Establishment B: 5
* Establishment C: 1
* Establishment D: Exempt 

When I select that local authority then I should see a tabular breakdown as follows: 

* Rating 	Percentage
* 5-star 	50% 
* 4-star 	0% 
* 3-star 	0% 
* 2-star 	0% 
* 1-star 	25% 
* Exempt 	25% 

##### Further implementation notes 
1. Your application should provide a drop-down list of Local Authorities for the user to select from and then display a table of data as per the acceptance criteria above for that authority.
2. The FSA’s API is a simple RESTful API that returns JSON. Note that contrary to the API documentation in recent versions the pageSize and pageNumber parameter is not optional and must be supplied. 
3. The code and design should meet the requirements, and should consider future extension or maintenance. 
4. The code should be well-structured, commented, have error handling and include a suitable selection of tests. 

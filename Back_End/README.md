# CRM App backend 

This code base contains logic/structure  for creating the Restful APIs for the CRM app
## Features
More details around this can be found [here](https://docs.google.com/document/d/1eUkGVsfqzAmDMvqdeO8MzthWlYHlAib7HvsQ46YA1sY/edit?usp=sharing) 

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running
- JWT tokens

## Tech
- Node.js
- Mongodb


## Installation

this app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

Before starting the server please ensure mongodb server is locally installed and running on the default port

```sh
cd CRM-Application--FSD-Bootcamp
npm install
npm run devStart
```

## Rest endpoints
#### 1. Sign Up request 

```sh
POST /crm/api/v1/auth/signup
Sample request body :
{
        "name": "Vishwa",
        "userId": "Vish07",
        "email" : "abc@xyz.com",
        "password" : "Welcome1",
        "userType" : "ENGINEER"
}

Sample response body :
{
    "name": "Vishwa",
    "userId": "Vish07",
    "email": "abc@xyz.com",
    "userTypes": "ENGINEER",
    "userStatus": "PENDING",
    "createdAt": "2022-02-20T04:47:43.842Z",
    "updatedAt": "2022-02-20T04:47:43.842Z"
}
```
Details about the JSON structure
- name : Mandatory 
- userId : Manadatory + Unique
- email : Manadatory + Unique
- passworod : Mandatory
- userType : Optional, default value is CUSTOMER. Other possible value : ADMIN | ENGINEER
- userStatus : It reperesents the status of the user registered. Customer are by default approved. ADMIN and Engineers need approval from Admin. Possible values : APPROVED | PENDING | REJECTED

---
#### 2. Login request

```sh
POST /crm/api/v1/auth/signin
Sample request body :
{
        "userId": "Vish01",
        "password" : "Welcome1"
    
}
Sample response body :
{
    "name": "Vishwa",
    "userId": "Vish01",
    "email": "abc@xyz1.com",
    "userTypes": "CUSTOMER",
    "userStatus": "APPROVED",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZpc2gwMSIsImlhdCI6MTY0NTMzMjg3NiwiZXhwIjoxNjQ1NDE5Mjc2fQ.21IRt9VIL-suvP7Z_lamH1PcchOB1TJOhZPSpX9kqt8"
}
```
#### 3. Get all users 

```sh
GET /crm/api/v1/users/
Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
Sample request body :


Sample response body :
[
    {
        "name": "Vishwa",
        "userId": "admin",
        "email": "kankvish@gmail.com",
        "userTypes": "ADMIN",
        "userStatus": "APPROVED"
    },
    {
        "name": "Vishwa",
        "userId": "Vish01",
        "email": "abc@xyz1.com",
        "userTypes": "ENGINEER",
        "userStatus": "APPROVED"
    },
    {
        "name": "Mohan",
        "userId": "Mohan01",
        "email": "abc@mohan.com",
        "userTypes": "CUSTOMER",
        "userStatus": "APPROVED"
    }
]
```
Details about the JSON structure
- name : Mandatory 
- userId : Manadatory + Unique
- email : Manadatory + Unique
- passworod : Mandatory
- userType : Optional, default value is CUSTOMER. Other possible value : ADMIN | ENGINEER
- userStatus : It reperesents the status of the user registered. Customer are by default approved. ADMIN and Engineers need approval from Admin. Possible values : APPROVED | PENDING | REJECTED

---
#### 4. Get user based on the userId

```sh
GET /crm/api/v1/users/{userId}

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0


Sample response body :
[
    {
        "name": "Vishwa",
        "userId": "Vish01",
        "email": "abc@xyz1.com",
        "userTypes": "ENGINEER",
        "userStatus": "APPROVED"
    }
]
```
#### 5. Update the user information- Type and Status
```sh
PUT localhost:8080/crm/api/v1/users/Vish01

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0


Sample request body :
{
        "name": "Vishwa",
        "userId": "Vish01",
        "email": "abc@xyz1.com",
        "userTypes": "ENGINEER",
        "userStatus": "APPROVED"
}

Sample response body :
{
    "message": "User record has been updated successfully"
}

```

#### 6. Create a new ticket 

```sh
POST /crm/api/v1/tickets/
Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
Sample request body :
{
        "title": "Not able to use the device",
        "description" : "Device is not turning on with power"
}

Sample response body :
{
    "title": "Not able to use the device",
    "ticketPriority": 4,
    "description": "Device is not turning on with power",
    "status": "OPEN",
    "reporter": "Vish01",
    "assignee": "Vish07",
    "id": "6215d8288d78a94e0a5a0610",
    "createdAt": "2022-02-23T06:46:00.414Z",
    "updatedAt": "2022-02-23T06:46:00.414Z"
}
```
--- 
#### 7. Get all tickets

```sh
GET /crm/api/v1/tickets/

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0


Sample response body :
[
    {
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215c1e85e0d5a53afcd4e68",
        "createdAt": "2022-02-23T05:11:04.841Z",
        "updatedAt": "2022-02-23T05:11:04.841Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power yessss",
        "status": "CLOSED",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215ceb86ba4fcbac9433282",
        "createdAt": "2022-02-23T06:05:44.352Z",
        "updatedAt": "2022-02-23T06:05:44.353Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215d8288d78a94e0a5a0610",
        "createdAt": "2022-02-23T06:46:00.414Z",
        "updatedAt": "2022-02-23T06:46:00.414Z"
    }
]
```
#### 8. Get all tickets fitered by status
```sh
GET /crm/api/v1/tickets?status=OPEN

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
Response :
[
    {
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215c1e85e0d5a53afcd4e68",
        "createdAt": "2022-02-23T05:11:04.841Z",
        "updatedAt": "2022-02-23T05:11:04.841Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215d8288d78a94e0a5a0610",
        "createdAt": "2022-02-23T06:46:00.414Z",
        "updatedAt": "2022-02-23T06:46:00.414Z"
    }
]

```

#### 9. Update the given ticket ( Only the creator of the ticket should be able to update it)
```sh
PUT /crm/api/v1/tickets/6215c1e85e0d5a53afcd4e68

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0

Request body :
{
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "CLOSED"
        
}

Response body :
{
    "title": "Not Able to update",
    "ticketPriority": 4,
    "description": "Update functionality is not working for my device",
    "status": "CLOSED",
    "reporter": "Vish01",
    "assignee": "Vish07",
    "id": "6215c1e85e0d5a53afcd4e68",
    "createdAt": "2022-02-23T05:11:04.841Z",
    "updatedAt": "2022-02-23T05:11:04.841Z"
}

```

#### 10. Get the ticket based on the ticket id
```sh
GET /crm/api/v1/tickets/{id}

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
Response :
{
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215c1e85e0d5a53afcd4e68",
        "createdAt": "2022-02-23T05:11:04.841Z",
        "updatedAt": "2022-02-23T05:11:04.841Z"
}

```

#### 11. API for authenticated Engineer to be able to see the complete list of tickets assigned to him/her

```sh
GET /crm/api/v1/tickets/
Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0

Sample response body :
[
    {
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "CLOSED",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215c1e85e0d5a53afcd4e68",
        "createdAt": "2022-02-23T05:11:04.841Z",
        "updatedAt": "2022-02-23T05:11:04.841Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power yessss",
        "status": "CLOSED",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215ceb86ba4fcbac9433282",
        "createdAt": "2022-02-23T06:05:44.352Z",
        "updatedAt": "2022-02-23T06:05:44.353Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215d8288d78a94e0a5a0610",
        "createdAt": "2022-02-23T06:46:00.414Z",
        "updatedAt": "2022-02-23T06:46:00.414Z"
    }
]
```
--- 
#### 12. API for authenticated Engineer to search for the ticket

```sh
GET /crm/api/v1/tickets/{id}

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0


Sample response body :
{
    "title": "Not Able to update",
    "ticketPriority": 4,
    "description": "Update functionality is not working for my device",
    "status": "CLOSED",
    "reporter": "Vish01",
    "assignee": "Vish07",
    "id": "6215c1e85e0d5a53afcd4e68",
    "createdAt": "2022-02-23T05:11:04.841Z",
    "updatedAt": "2022-02-23T05:11:04.841Z"
}
```
#### 13. API for the authenticated Engineer to update the ticket/reassign the ticket assigned to him/her
```sh
PUT /crm/api/v1/tickets/6215c1e85e0d5a53afcd4e68

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
 
 Request :
 {
    "title": "Not Able to update",
    "ticketPriority": 4,
    "description": "Update functionality is not working for my device",
    "status": "CLOSED",
    "reporter": "Vish01",
    "assignee": "Shiv01",
    "id": "6215c1e85e0d5a53afcd4e68"

}
Response :
{
    "title": "Not Able to update",
    "ticketPriority": 4,
    "description": "Update functionality is not working for my device",
    "status": "CLOSED",
    "reporter": "Vish01",
    "assignee": "Shiv01",
    "id": "6215c1e85e0d5a53afcd4e68",
    "createdAt": "2022-02-23T05:11:04.841Z",
    "updatedAt": "2022-02-23T05:11:04.841Z"
}

```

#### 14. API for the authenticated ADMIN to get the list of all the issues
```sh
GET /crm/api/v1/tickets/

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0



Response body :
[
    {
        "title": "Not Able to update",
        "ticketPriority": 4,
        "description": "Update functionality is not working for my device",
        "status": "CLOSED",
        "reporter": "Vish01",
        "assignee": "Shiv01",
        "id": "6215c1e85e0d5a53afcd4e68",
        "createdAt": "2022-02-23T05:11:04.841Z",
        "updatedAt": "2022-02-23T05:11:04.841Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power yessss",
        "status": "CLOSED",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215ceb86ba4fcbac9433282",
        "createdAt": "2022-02-23T06:05:44.352Z",
        "updatedAt": "2022-02-23T06:05:44.353Z"
    },
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215d8288d78a94e0a5a0610",
        "createdAt": "2022-02-23T06:46:00.414Z",
        "updatedAt": "2022-02-23T06:46:00.414Z"
    },
    {
        "title": "Not able to use the device again",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "62270ca27db35f99978ac346",
        "createdAt": "2022-03-08T07:58:26.362Z",
        "updatedAt": "2022-03-08T07:58:26.362Z"
    },
    {
        "title": "Not able to use the device again",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish02",
        "assignee": "Vish07",
        "id": "6227127436d167dde19c2a3b",
        "createdAt": "2022-03-08T08:23:16.902Z",
        "updatedAt": "2022-03-08T08:23:16.903Z"
    }
]

```

#### 15. API for the authenticated ADMIN to get the list of all the issues based on filters
```sh
GET /crm/api/v1/tickets?status=OPEN

Headers :
 Content-Type:application/json
 x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ1NTA4NDY0LCJleHAiOjE2NDU1OTQ4NjR9.PgKiGRN_J8aDGwrBLOGhWUKArcfegDd76dEgGtV6Qh0
Response :
[
    {
        "title": "Not able to use the device",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "6215d8288d78a94e0a5a0610",
        "createdAt": "2022-02-23T06:46:00.414Z",
        "updatedAt": "2022-02-23T06:46:00.414Z"
    },
    {
        "title": "Not able to use the device again",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish01",
        "assignee": "Vish07",
        "id": "62270ca27db35f99978ac346",
        "createdAt": "2022-03-08T07:58:26.362Z",
        "updatedAt": "2022-03-08T07:58:26.362Z"
    },
    {
        "title": "Not able to use the device again",
        "ticketPriority": 4,
        "description": "Device is not turning on with power",
        "status": "OPEN",
        "reporter": "Vish02",
        "assignee": "Vish07",
        "id": "6227127436d167dde19c2a3b",
        "createdAt": "2022-03-08T08:23:16.902Z",
        "updatedAt": "2022-03-08T08:23:16.903Z"
    }
]

POSTMAN collection [link](https://www.getpostman.com/collections/9168e824f523fb659502)

## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com




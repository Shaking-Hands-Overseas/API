# API
(I am currently working on a better version, you can check it out on the branch "development")
This API code allows for a connection to be made between two instances of our [Driver](https://github.com/Shaking-Hands-Overseas/SHA-Driver).
It allows to exchange data between these two in the following manner:
```
{
    "s1": 0,
    "s2": 1,
    "s3": 2,
    "s4": 3,
    "s5": 4
}
```
Where each "s+number" refers to an especific data.

# Routing & Methods

- POST /1/servo => To send data to the API using a JSON containing all sensor data
JSON FILE: 
{
  "s1": 0,
  "s2": 0,
  "s3": 0,
  "s4": 0,
  "s5": 0
}
- GET /1/receiver => To receive the data sent to the API previously
- POST /1/custom => To alter the order of the data values 
JSON FILE:
{
  "F1": "s1",
  "F2": "s2",
  "F3": "s3",
  "F4": "s4",
  "F5": "s5"
}
# Swagger Docs
To access swagger documentation, access the route /api-docs, where all routes and methods are explained with detail.
## Installation Guide:
To setup this API, it depends on you hosting service, so i recommend checking with your host provider, in our case, if you use heroku and hook this repo, the server should deploy without issues.

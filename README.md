# Stack

* React
* Typescript
* NodeJS
* GraphQL
  * Apollo
* Sequelize
  * Postgres
* Circle CI


# Queries

```
query GetLaunches {
  launches {
    id
    mission {
      name
    }
  }
}
```

```
query GetLaunchById {
  launch(id: 60) {
    id
    rocket {
      id
      type
    }
  }
}
```

### Add the following query variable to enable the query below

```
{
  "id": 60
}
```

```
query GetLaunchById($id: ID!) {
  launch(id: $id) {
    id
    rocket {
      id
      type
    }
  }
}
```

```
query GetLaunches {
  launches(pageSize: 3) {
    launches {
      id
      mission {
        name
      }
    }
  }
}
```


### Add this query variable to execute the Login operation
```
{
  "email": "lucaswilliam@gmail.com"
}
```

```
mutation Login($email: String!) {
  login(email: $email) {
    id
    token
    email
  }
}
```

### You need to add authorization header to access this operation

```
mutation BookTrips {
  bookTrips(launchIds: [67, 68, 69]) {
    success
    message
    launches {
      id
    }
  }
}
```

```
{
  "authorization": "bHVjYXN3aWxsaWFtQGdtYWlsLmNvbQ=="
}
```
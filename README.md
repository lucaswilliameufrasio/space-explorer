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
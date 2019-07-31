# Schemas

To facilitate the normalization of the data, some API responses are transformed directly after
the fetch:



## GET /task/:id/comment
````json
{
  "id": taskId,
  "comments": originalResponse
}
````

## GET /task/:id/comment/:commendId
````json
{
  "id": taskId,
  "comments": [originalResponse]
}
````

## GET /task/:id/attachment
````json
{
  "id": taskId,
  "attachments": originalResponse
}
````

## GET /task/:id/attachment/:attachmentId
````json
{
  "id": taskId,
  "attachments": [originalResponse]
}
````



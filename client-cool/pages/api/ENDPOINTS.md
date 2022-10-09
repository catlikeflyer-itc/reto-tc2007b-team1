# Endpoints for API

## GET 
### Documents by category
`/api/get/documents?category=categoryName`
Description: Get all documents by category
Params: category
Response: list of document data objects

### Document by id
`/api/get/document?id=docId`
Description: Get document by id
Params: id
Response: document data object

### All documents
`/api/get/documents`
Description: Get all documents
Params: none
Response: list of document data objects

## POST
### Create document
`/api/post/document`
Description: Create document
Params: document data object
Response: document data object

## PUT
### Update document data by id
`/api/put/document?id=docId`
Description: Update document data by id
Params: id
Response: document data object

### Update document status
`/api/put/documentStatus?id=docId`
Description: Update document status
Params: id
Response: document data object

## DELETE
### Delete document by id
`/api/delete/document?id=docId`
Description: Delete document by id
Params: id
Response: document data object

## User Authentication



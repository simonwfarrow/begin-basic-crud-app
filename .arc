@app
panda-5cn

@static

@http
get /todos
post /todos
post /todos/delete

@events
test-event

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

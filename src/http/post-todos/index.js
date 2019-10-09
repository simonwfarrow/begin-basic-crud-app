let arc = require('@architect/functions')

exports.handler = async function post (req) {
  let todo = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  todo.created = todo.created || Date.now()

  let name = 'test-event'
  let payload = {body: todo}
  await arc.events.publish({name, payload})

  return {
    statusCode: 302,
    headers: {'location': '/'}
  }

}

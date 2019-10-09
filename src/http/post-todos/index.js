let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let todo = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  todo.created = todo.created || Date.now()
  await data.set({
    table: 'todos',
    ...todo
  })

  /*let name = 'test-event'
  let payload = {body: todo}
  await arc.events.publish({name, payload})
*/
  return {
    statusCode: 302,
    headers: {'location': '/'}
  }

}

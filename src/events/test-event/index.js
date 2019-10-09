// learn more about event functions here: https://arc.codes/primitives/events
let data = require('@begin/data')

exports.handler = async function subscribe(payload) {

  let body  = JSON.parse(payload.Records[0].Sns.Message);
  let todo  = body.body;
  await data.set({
    table: 'todos',
    ...todo
  })
  return
}
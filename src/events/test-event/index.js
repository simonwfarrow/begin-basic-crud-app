// learn more about event functions here: https://arc.codes/primitives/events
let data = require('@begin/data')

exports.handler = async function subscribe(payload) {

  let todo  = JSON.stringify(payload, null, 2)
  await data.set({
    table: 'todos',
    ...todo
  })
  return
}
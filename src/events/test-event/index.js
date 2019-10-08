// learn more about event functions here: https://arc.codes/primitives/events
exports.handler = async function subscribe(payload) {
  console.log(JSON.stringify(payload, null, 2))
  return
}
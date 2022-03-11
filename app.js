//data structures : maps

const rest = new Map();
 rest.set('name', 'Classico Itakiano');
 rest.set(1, 'Firenzze, Italy');
 rest.set(2, 'Lisbon, Portugal');

 rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are opened')
  .set(false, 'We are closed');


  const time = 21;
 console.log (rest.get(time > rest.get('open')
  && time < rest.get('closed')));
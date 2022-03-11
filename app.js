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

  //conveting objects to maps

  const hoursMap = new Map(Object.entries(openingHours));

  //iteration in maps


const question = new Map( [
['question', 'whats your best programming language'],
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct', 3],
[true, 'correct'],
[false, 'Try again'],

]);

//using for loop

for(const [key, value] of question) {

    if( typeof key ==='number'){

        console.log(
            `Answer ${key}: ${value}`);
        

}
}



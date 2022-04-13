const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity that you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (favouiteMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (eat) => {
          rl.question("Which sport is your favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`${name}'s Bio: \n Hi there! My name is ${name} and I love ${activity}. While I'm doing ${activity} I like to listen to ${music}. My favourite meal of the day is ${favouiteMeal} and that's because I eat ${eat}. When I'm not doing ${activity}, I enjoy watching ${sport} on TV. If I had to choose a superpower I would say it is ${superpower}.`);
              rl.close();
            })
          });
        });
      });
    });
  });
});

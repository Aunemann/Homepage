console.log('i splashtext.js');
const splashtext = document.getElementById('splashtext');

const splashes = ['When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.',
    'Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives',
    'Within all of us is a varying amount of space lint and star dust, the residue from our creation. Most are too busy to notice it, and it is stronger in some than others. It is strongest in those of us who fly and is responsible for an unconscious, subtle desire to slip into some wings and try for the elusive boundaries of our origin.',
    'I fly because it releases my mind from the tyranny of petty things.',
    'The desire to fly is an idea handed down to us by our ancestors who, in their grueling travels across trackless lands in prehistoric times, looked enviously on the birds soaring freely through space, at full speed, above all obstacles, on the infinite highway of the air.',
    'Sometimes, flying feels too God-like to be attained by man. Sometimes, the world from above seems too beautiful, too wonderful, too distant for human eyes to see',
    'Fighter pilots have ice in their veins. They don\'t have emotions. They think, anticipate. They know that fear and other concerns cloud your mind from what\'s going on and what you should be involved in.',
    'Learning to fly an airplane taught me a way of thinking, an approach to problem-solving that was applicable and effective. Pilots are very methodical and meticulous, and artists tend not to be',
    'Pilots are a rare kind of human. They leave the ordinary surface of the word, to purify their soul in the sky, and they come down to earth, only after receiving the communion of the infinite.',
    'Let\'s get one thing straight. There\'s a big difference between a pilot and an aviator. One is a technician; the other is an artist in love with flight.',
    'He moves not through distance, but through the ranges of satisfaction that come from hauling himself up into the air with complete and utter control; from knowing himself and knowing his airplane so well that he can come somewhere close to touching, in his own special and solitary way, that thing that is called perfection.',
    'A \"good\" landing is one from which you can walk away. A \"great\" landing is one after which they can use the plane again.',
    'Every takeoff is optional. Every landing is mandatory.',
    'If you push the stick forward, the houses get bigger. If you pull the stick back, they get smaller. That is, unless you keep pulling the stick all the way back, then they get bigger again.',
    'The propeller is just a big fan in front of the plane used to keep the pilot cool. When it stops, you can actually watch the pilot start sweating.',
    'Airspeed, altitude, and brains. Two are always needed to successfully complete the flight.',
    'A fool and his money are soon flying more aircraft than he can handle.',
    'Remember, you fly an airplane with you head, not your hands and feet.',
    'There are old pilots and there are bold pilots. However, there are no old, bold pilots.',
    'What is the similarity between air traffic controllers and pilots? If a pilot screws up, the pilot dies; If ATC screws up, the pilot dies.',
    'The only mystery in life is why the kamikaze pilots wore helmets.',
    'If black boxes survive air crashes, why don\'t they make the whole plane out of that stuff?',
    'Both optimists and pessimists contribute to our society. The optimist invents the airplane and the pessimist the parachute.',
];

const index = Math.floor(Math.random() * splashes.length);
console.log('randomized', 'Splashtext="', splashes[index], '"');

splashtext.innerHTML = splashes[index]

import { Element, Composite } from './classes/composit.class.js';
import { Fruits, Packages } from './data/data.constants.js';

// creating Leaves elements
const bananaSet = () => new Element(Fruits.Banana, 12, 0.67);
const appleSet = () => new Element(Fruits.Apple, 80, 0.15);
const peanappleSet = () => new Element(Fruits.Pineapple, 4, 3.99);
const watermelonSet = () => new Element(Fruits.Watermelon, 2, 11.05);

// creating Nodes elements
const box1 = new Composite(Packages.Package + ' 1');
box1.add([bananaSet(), bananaSet(), bananaSet()]);

const box2 = new Composite(Packages.Package + ' 2');
box2.add([appleSet(), appleSet(), watermelonSet()]);

const box3 = new Composite(Packages.Package + ' 3');
box3.add([bananaSet(), peanappleSet(), watermelonSet()]);

const bigBox1 = new Composite(Packages.Box + ' 1');
bigBox1.add([box1, watermelonSet(), watermelonSet()]);

const bigBox2 = new Composite(Packages.Box + ' 2');
bigBox2.add([box2, peanappleSet(), appleSet(), appleSet(), appleSet()]);

const truck = new Composite(Packages.Truck);
truck.add([bigBox1, bigBox2, box3, appleSet()]);

setTimeout(() => {
  console.clear();
  console.log('// global structure as a tree');
  console.log(truck.title, truck);
  console.log(`${truck.title} total summ:`, +truck.getTotalSumm().toFixed(2));
  console.log(`${box1.title} total summ:`, +box1.getTotalSumm().toFixed(2));
  console.log('Banana set total summ:', +bananaSet().getTotalSumm().toFixed(2));
  console.log(`${truck.title} fruits total info:`, truck.getPackegeInfo());
  console.log(`${bigBox1.title} fruits total info:`, bigBox1.getPackegeInfo());
}, 500);

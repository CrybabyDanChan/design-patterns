// GENERATING PATTERNS

// factory
import { AutoFactory } from './factory';

const factory = new AutoFactory();
const x5 = factory.create('BMW');

x5.run();

// singleton
import { Counter } from './singleton';

const a = new Counter();
const b = new Counter();
console.log(a === b);

// builder
import { AutoBuilder, Director } from './builder';

const autoBuilder = new AutoBuilder();
const director = new Director(autoBuilder);

director.startAutoBuilder();

// prototype
import { Rect} from './prototype';

const rect = new Rect();
rect.clone();

// STRUCTURAL PATTERNS

// adapter
import {
  RoundHole,
  RoundPeg,
  SquarePegAdapter,
  SquarePeg,
} from './adapter';

const hole = new RoundHole(5);
const peg = new RoundPeg(4);
const squarePeg = new SquarePeg(4);
const squarePegWithAdapter = new SquarePegAdapter(squarePeg);

hole.fits(peg);
hole.fits(squarePegWithAdapter);


// composite;
import {
  ImageEditor,
  Circle,
  Dot,
} from './composite';

const imageEditor = new ImageEditor();
const components = [new Dot(3, 4), new Circle(3, 5, 9)];
const group = [new Circle(3, 78, 6), new Circle(13, 45, 76)];

imageEditor.load(components);
imageEditor.groupSelected(group);

// bridge
import {
  Tv,
  Remote,
} from './bridge';

const tv = new Tv();
const remote = new Remote(tv);

remote.togglePower();
remote.channelUp();

// decorator
import { Application } from './Decorator';

const app = new Application();
app.dumbUsageExample('data');



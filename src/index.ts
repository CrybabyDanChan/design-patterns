import { AutoFactory } from './factory';
import { Counter } from './singleton';
import { AutoBuilder, Director } from './builder';
import { Rect} from './prototype';
import { Application } from './decorator';
import {
  RoundHole,
  RoundPeg,
  SquarePegAdapter,
  SquarePeg,
} from './adapter';
import {
  ImageEditor,
  Circle,
  Dot,
} from './composite';
import {
  Tv,
  Remote,
} from './bridge';
import { Editor } from './memento';
import { App } from './command';


// GENERATING PATTERNS

// factory
const factory = new AutoFactory();
const x5 = factory.create('BMW');

x5.run();

// singleton
const a = new Counter();
const b = new Counter();
console.log(a === b);

// builder
const autoBuilder = new AutoBuilder();
const director = new Director(autoBuilder);

director.startAutoBuilder();

// prototype
const rect = new Rect();
rect.clone();

// STRUCTURAL PATTERNS

// adapter
const hole = new RoundHole(5);
const peg = new RoundPeg(4);
const squarePeg = new SquarePeg(4);
const squarePegWithAdapter = new SquarePegAdapter(squarePeg);

hole.fits(peg);
hole.fits(squarePegWithAdapter);

// composite;
const imageEditor = new ImageEditor();
const components = [new Dot(3, 4), new Circle(3, 5, 9)];
const group = [new Circle(3, 78, 6), new Circle(13, 45, 76)];

imageEditor.load(components);
imageEditor.groupSelected(group);

// bridge
const tv = new Tv();
const remote = new Remote(tv);

remote.togglePower();
remote.channelUp();

// decorator

const app = new Application();
app.dumbUsageExample('data');

// BEHAVIOR

// Memento
const editor = new Editor('Hello', 12, 23);
const snapshot = editor.createSnapshot();
editor.text = 'goodbye';
snapshot.restore();

// Command
const application = new App();
const button = document.createElement('button');

application.createUI([{ name: 'put', node: button}]);


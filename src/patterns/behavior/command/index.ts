class Driver {
    command: Command

    constructor(command: Command) {
      this.command = command;
    }

    execute() {
      this.command.execute();
    }
}

class Engine {
    state: boolean

    constructor() {
      this.state = false;
    }

    on() {
      this.state = true;
    }

    off() {
      this.state = false;
    }
}

abstract class Command {
    engine: Engine

    constructor(engine) {
      this.engine = engine;
    }

    abstract execute()
}

class OnStartCommand extends Command {
  execute() {
    this.engine.on();
  }
}

class OnSwitchOffCommand extends Command {
  execute() {
    this.engine.off();
  }
}

export {
  Driver,
  Engine,
  OnStartCommand,
  OnSwitchOffCommand,
};


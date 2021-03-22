type status = 'enable' | 'disable';

interface Device {
    status: status;
    channel: number;
    enable: () => void;
    disable: () => void;
}

class Remote {
    device: Device;

    constructor(device: Device) {
      this.device = device;
    }

    togglePower(): void {
       this.device.status === 'enable' ?
           this.device.disable() :
           this.device.enable();
    }

    channelUp() {
      this.device.channel += 10;
    }
}

class Tv implements Device {
    channel: number;
    status: status;

    constructor() {
      this.channel = 1;
      this.status = 'enable';
    }

    enable() {
      this.status = 'enable';
    }

    disable() {
      this.status = 'disable';
    }
}

export {
  Tv,
  Remote,
};

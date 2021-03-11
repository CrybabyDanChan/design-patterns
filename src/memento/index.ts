class Editor {
    public text: string
    public x: number
    public y: number

    constructor(
        text: string,
        x: number,
        y: number
    ) {
      this.text = text;
      this.x = x;
      this.y = y;
    }

    createSnapshot(): Snapshot {
      return new Snapshot(this, this.text, this.x, this.y);
    }
}

class Snapshot {
    editor: Editor;
    text: string;
    x: number;
    y: number;

    constructor(
        editor: Editor,
        text: string,
        x: number,
        y: number
    ) {
      this.editor = editor;
      this.text = text;
      this.x = x;
      this.y = y;
    }

    restore(): void {
      this.editor.text = this.text;
      this.editor.x = this.x;
      this.editor.y = this.y;
    }
}

export { Editor };

interface Button {
    name: string;
    node: HTMLButtonElement;
}

abstract class Command {
    static type: string
    protected app: App
    protected editor: Editor
    protected backup: string

    constructor(app: App, editor: Editor) {
      this.app = app;
      this.editor = editor;
    }

    // Сохраняем состояние редактора.
    saveBackup(): void {
      this.backup = this.editor.text;
    }

    // Восстанавливаем состояние редактора.
    undo(): void {
      this.editor.text = this.backup;
    }

    // Главный метод команды остаётся абстрактным, чтобы
    // каждая конкретная команда определила его по-своему.
    // Метод должен возвратить true или false, в зависимости
    // от того, изменила ли команда состояние редактора, а
    // значит, нужно ли её сохранить в истории.
    execute(): boolean {
      return false;
    }
}

// Конкретные команды.
class CopyCommand extends Command {
  static type = 'copy'

  execute(): boolean {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}

// Команда копирования не записывается в историю, так
// как она не меняет состояние редактора.
class CutCommand extends Command {
    static type = 'cut'

    execute(): boolean {
      this.saveBackup();
      this.app.clipboard = this.editor.getSelection();
      this.editor.deleteSelection();
      return true;
    }
}

// Команды, меняющие состояние редактора, сохраняют
// состояние редактора перед своим действием и
// сигнализируют об изменении, возвращая true.
class PasteCommand extends Command {
  static type = 'paste'

  execute(): boolean {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}

// Отмена это тоже команда.
class UndoCommand extends Command {
  execute(): boolean {
    this.app.undo();
    return false;
  }
}

// Глобальная история команд — это стек.
class CommandHistory {
    private history: Command[]

    // Последний зашедший...
    push(c: Command): void {
      this.history.push(c);
    }
    // Добавить команду в конец массива-истории.

    // ...выходит первым.
    pop(): Command {
      return this.history.pop();
    }
    // Достать последнюю команду из массива-истории.
}

// Класс редактора содержит непосредственные операции над
// текстом. Он отыгрывает роль получателя – команды
// делегируют ему свои действия.
class Editor {
    text: string

    getSelection(): string {
      return this.text;
    }
    // Вернуть выбранный текст.

    deleteSelection(): void {
      this.text = '';
    }
    // Удалить выбранный текст.

    replaceSelection(text: string): void {
      this.text = text;
    }
    // Вставить текст из буфера обмена в текущей позиции.
}

// Класс приложения настраивает объекты для совместной
// работы. Он выступает в роли отправителя — создаёт
// команды, чтобы выполнить какие-то действия.
class App {
    commands: any[]
    clipboard: string
    editors: Editor[]
    activeEditor: Editor
    history: CommandHistory

    constructor(commands: any[] = [
      PasteCommand,
      CopyCommand,
      CutCommand,
    ]) {
      this.commands = commands;
    }

    // Код, привязывающий команды к элементам интерфейса
    // может выглядеть примерно так.
    createUI(buttons: Button[]): void {
      buttons.forEach((btn: Button) => {
        this.createCommand(btn.name);
      });
    }

    createCommand(type: string): void {
      const CommandClass = this.commands
          .find((command: any) => command.type === type);

      const currentCommand = new CommandClass(this, this.activeEditor);
      currentCommand.execute();
    }

    undo(): void {
      const undo = new UndoCommand(this, this.activeEditor);
      undo.execute();
    }
}

export { App };



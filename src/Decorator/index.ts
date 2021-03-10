interface DataSource {
    writeData: (data: string) => void;
    readData: () => string
}

class FileDataSource implements DataSource {
  constructor(filename: string) {

  }

  // Записать данные в файл.
  writeData(data: any): void {

  }

  // Прочитать данные из файла.
  readData(): any {

  }
}

// Родитель всех декораторов содержит код обёртывания.
class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource;

    constructor(source: DataSource) {
      this.wrappee = source;
    }

    writeData(data: any): void {
      this.wrappee.writeData(data);
    }

    readData():any {
      return this.wrappee.readData();
    }
}

// Конкретные декораторы добавляют что-то своё к базовому
// поведению обёрнутого компонента.
class EncyptionDecorator extends DataSourceDecorator {
  // 1. Зашифровать поданные данные.
  // 2. Передать зашифрованные данные в метод writeData
  // обёрнутого объекта (wrappee).
  writeData(data: any): void {
    this.wrappee.writeData(data);
  }
  // 1. Получить данные из метода readData обёрнутого
  // объекта (wrappee).
  // 2. Расшифровать их, если они зашифрованы.
  // 3. Вернуть результат.
  readData(): any {
    const result = this.wrappee.readData();
    return result;
  }
}

// Декорировать можно не только базовые компоненты, но и уже
// обёрнутые объекты.
class CompressionDecorator extends DataSourceDecorator {
  // 1. Запаковать поданные данные.
  // 2. Передать запакованные данные в метод writeData
  // обёрнутого объекта (wrappee).
  writeData(data: any): void {
    this.wrappee.writeData(data);
  }
  // 1. Получить данные из метода readData обёрнутого
  // объекта (wrappee).
  // 2. Расшифровать их, если они зашифрованы.
  // 3. Вернуть результат.
  readData(): any {
    const result = this.wrappee.readData();
    return result;
  }
}

class Application {
    source: DataSource;

    dumbUsageExample(salaryRecords: any) {
      this.source = new FileDataSource('somefile.dat');
      this.source.writeData(salaryRecords);
      // В файл были записаны чистые данные.

      this.source = new CompressionDecorator(this.source);
      this.source.writeData(salaryRecords);
      // В файл были записаны сжатые данные.

      this.source = new EncyptionDecorator(this.source);
      // source — это связка из трёх объектов:
      // Encryption > Compression > FileDataSource

      this.source.writeData(salaryRecords);
      // В файл были записаны сжатые и
      // зашифрованные данные.
    }
}

export { Application };



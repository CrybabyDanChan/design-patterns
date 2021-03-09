interface Graphic {
    move: () => void;
    draw: () => void;
}

class Dot implements  Graphic {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(): void {
        console.log('move')
    }

    draw(): void {
        console.log('draw')
    }
}

// Компоненты могут расширять другие компоненты.
class Circle extends  Dot {
    radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);

        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

// Контейнер содержит операции добавления/удаления дочерних
// компонентов. Все стандартные операции интерфейса
// компонентов он делегирует каждому из
// дочерних компонентов.
class CompoundGraphic implements Graphic {
    children: Graphic[];

    constructor() {
        this.children = [];
    }

    add(child: Graphic): void {
        this.children.push(child);
    }

    remove(child: Graphic): void {
        const index = this.children.findIndex(item => item === child)

        if(index === -1) {
            return;
        }

        this.children = [
            ...this.children.slice(0, index),
            ...this.children.slice(index, this.children.length - 1)
        ]
    }

    move(): void {
        this.children.forEach((child: Graphic) => child.move())
    }

    draw(): void {
        this.children.forEach((child: Graphic) => child.draw())
    }
}

class ImageEditor {
    all: CompoundGraphic;

    load(components: Graphic[]): void {
        this.all = new CompoundGraphic()

        components.forEach((component: Graphic) => this.all.add(component))
        this.all.add(new Dot(1, 2))
        this.all.add(new Circle(5, 3, 10))
    }

    // Группировка выбранных компонентов в один
    // сложный компонент.
    groupSelected(components: Graphic[]): void {
        const group = new CompoundGraphic()

        components.forEach(component => group.add(component))
        this.all.add(group);
        this.all.draw()
    }
}

export {
    ImageEditor,
    Dot,
    Circle
};






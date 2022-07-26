function parseCount(value) {
    let number = Number.parseInt(value, 10);
        if(isNaN(number)){
            throw new Error("Невалидное значение");
        }
    return number;
}

function validateCount(value){
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}



class Triangle {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if((this.sideA + this.sideB < this.sideC) || 
        (this.sideA + this.sideC < this.sideB) || 
        (this.sideB + this.sideC < this.sideA)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
    }

    getPerimeter(){
        this.perimeter = this.sideA + this.sideB + this.sideC;
        return this.perimeter;
    }

    getArea() {
        this.square = Math.sqrt((this.perimeter * 0.5) * (this.perimeter * 0.5 - this.sideA) * 
        (this.perimeter * 0.5 - this.sideB) * (this.perimeter * 0.5 - this.sideC));

        return +this.square.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC){
    try {
        let triangle = new Triangle(sideA, sideB, sideC);
        return triangle;
    } catch(error) {
        return { 
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}
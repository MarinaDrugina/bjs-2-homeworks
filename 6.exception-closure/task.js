function parseCount(value) {
    let number = Number.parseInt(value, 10);
        if(isNaN(number)) {
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
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if((sideA + sideB < sideC) || (sideA + sideC < sideB) || (sideB + sideC < sideA)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        const p = (this.sideA + this.sideB + this.sideC) * 0.5;
        this.square = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));

        return +this.square.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC){
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch(error) {
        return { 
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}
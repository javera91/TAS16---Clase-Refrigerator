'use strict'
/*EJEMPLO BASE:
class Course {
    constructor(level, students) {
        this.level = level;
        this.students = students;
    }
    addStudent(student) {
        this.students.push(student);
        alert(this.students);
    }
}
let course = new Course('1A Noc', ["Jose"]);
course.addStudent("Juan");

*/

//TAREA: TAS16_REFRIGERATOR
class Refrigerator {
    constructor() {
      this.meals = [];
    }
  
    // Método/acción para añadir una comida
    addMeal(meat) {
      // Agrega la comida al arreglo de comidas
      this.meals.push(meat);
      alert(`El refrigerador contiene actualmente: ${this.meals.join(' ')}`);

    }
  }
  
// Instanciar un nuevo refrigerador
let refrigerator = new Refrigerator();
  
// Agregar comidas
refrigerator.addMeal("pescado, pollo y cerdo.");
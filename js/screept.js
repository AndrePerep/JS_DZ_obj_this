//________________________________________Домашнее задание JS obj_this______________________________________________



/*______________________________________________ЗАДАЧА 1_______________________________________________________
    Дан объект person. Необходимо написать метод getInfo(), который будет возвращать информацию о человеке в виде сообщения: "Меня зовут name. Мне age лет. Я -prefession.". Вместо name нужно подставить имя человека, вместо age - возраст, а вместо prefession - профессию.
    Информацию (name, age, profession) необходимо брать из объекта person.
const person = {
    name: 'Валера',
    age: 25,
    profession: 'Frontend-developer'
};
person.getInfo(); // => Меня зовут Валера. Мне 25 лет. Я - Frontend-developer.*/


console.log(`
________________________ ЗАДАЧА 1 ________________________`)
const person = {
    name: 'Валера',
    age: 25,
    profession: 'Frontend-developer',
    getInfo() {
        return console.log(`Меня зовут ${this.name}. Мне ${this.age} лет. Я - ${this.profession}.`)
    }
};
person.getInfo();



/*______________________________________________ ЗАДАЧА 2 _______________________________________________________
Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:
    1. name - имя человека
    2. age - количество полных лет
Также вам необходимо реализовать метод compareAge в классе Person. Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого, то выводите сообщение через console “name1 старше, чем name2”. Иначе же “name1 младше, чем name2”.
    Запускайте данный код для теста работы вашего класса Person
const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
    person1.compareAge(person2); // Максим младше, чем Светлана
    person2.compareAge(person3); // Светлана старше, чем Ирина
    person3.compareAge(person1); // Ирина младше, чем Максим*/ 


console.log(`
________________________ ЗАДАЧА 2 ________________________`)
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    compareAge(element) {
        if(this.age >= element.age){
            return console.log(`${this.name} старше, чем ${element.name}`)
        } else {
            return console.log(`${this.name} младше, чем ${element.name}`)
        }
    }
}
const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);




/*______________________________________________ ЗАДАЧА 3 _______________________________________________________
    3) Создать класс Programmer который создает объекты с полями: name, age, tech (массив)
    Создать массив из 10 программеров
    Отфильтровать массив так, чтобы в нем находились только программеры старше 30 и со стеком больше 3*/
    

console.log(`
________________________ ЗАДАЧА 3 ________________________`)
class Programmer {
    constructor (name, age, tech = []){
        this.name = name
        this.age = age
        this.tech = tech
    }
}
const p1 = new Programmer ('Анастасия', 20, ['HTML', 'JS', 'CSS'])
const p2 = new Programmer ('Катя', 30, ['HTML', 'JS'])
const p3 = new Programmer ('Вася', 40, ['HTML', 'JS', 'CSS'])
const p4 = new Programmer ('Петя', 25, ['HTML', 'JS'])
const p5 = new Programmer ('Женя', 21, ['HTML', 'CSS', 'JS'])
const p6 = new Programmer ('Саша', 23, ['HTML', 'JS'])
const p7 = new Programmer ('Андрей', 32, ['HTML', 'JS', 'CSS', 'Java'])
const p8 = new Programmer ('Вова', 36, ['HTML', 'JS'])
const p9 = new Programmer ('Коля', 20, ['HTML', 'JS', 'CSS', 'Java'])
const p10 = new Programmer ('Света', 60, ['HTML', 'JS','CSS', 'Java'])
const persons = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]
const goodProg = persons.filter(function(e) {
    return e.age > 30 && e.tech.length > 3
})
console.log(goodProg)
console.log(persons)


    
/*______________________________________________ ЗАДАЧА 4 _______________________________________________________
    4) У вас есть 2 объекта dog и bird, в которых содержится их описание.
    const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
    return 'Гав-Гав';
    }
    };
    const bird = {
    name: 'Петя',
    type: 'Ворон',
    makeSound() {
    return 'Кар-кар';
    }
    };
    Вам необходимо создать функцию makeDomestic, которая будет работать с ключевым словом this (пример использования ниже). Она должна выводить в консоль всю информацию о животном с помощью сообщения: “type по имени name говорит sound”, где name - имя животного, type - его тип и sound - результат вызова функции makeSound.
    Также функция makeDomestic должна возвращать новый объект животного, в котором будут все прошлые параметры (name, type, makeSound), а также будет добавлен новый параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли животное или нет. Значение для свойства isDomestic (true либо false) вам необходимо передать как параметр в функцию makeDomestic. Кроме этого для обращения к свойствам животного функция makeDomestic должна использовать только this. Т.е. вам разрешено обращаться к свойствам только через this.name либо this.makeSound, но никак не bird.name либо bird.makeSound.
    Вам необходимо решить эту задачу 3-мя способами: через bind, call и apply. Вызовите функцию makeDomestic 3 раза используя данные методы. При использовании bind, функция makeDomestic должна работать с объектом dog, при apply и call - с объектом bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.
    Примеры использования:
    function makeDomestic(isDomestic) {
    // Ваша реализация
    }
    // Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"
    // domesticDog = {
    // name: 'Чарли',
    // type: 'Собака',
    // isDomestic: true,
    // makeSound() {
    // return 'Гав-Гав';
    //  }
    // };*/


    console.log(`
________________________ ЗАДАЧА 4 ________________________`)
const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Ворон',
    makeSound() {
        return 'Кар-кар';
    }
};
function makeDomestic(isDomestic) { 
    console.log(`${this.type} по имени ${this.name} говорит ${this.sound}`)
}
makeDomestic(dog)



/*______________________________________________ Дополнительное задание _______________________________________________________
Дополнительное задание
    Ваш друг Артем является владельцем автосервиса. Сейчас все заявки на ремонт машин обрабатывается вручную, что конечно же не очень удобно. Поэтому Артем попросил вас как веб-разработчика помочь в автоматизации данного процесса. Вам необходимо создать класс CarService, в конструктор которого будут переданы 2 параметра:
1. name - название автосервиса
2. workingHours - время работы автосервиса. 
    Объект, с ключами from и till. from - время начала рабочего дня till - время конца рабочего дня. Значения времени записываются в формате “h:mm” (например, 9:00)
    Инициализируйте данные параметры в конструкторе с помощью this. Также, параметр workingHours является необязательным. Поэтому задайте значение (тип данных object) по умолчанию. Данный объект должен называться DefaultWorkingHours и быть статическим (static). Если параметр workingHours не был передан, то подставьте в this.workingHours значение из DefaultWorkingHours, которое равно:
static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
};
    Добавьте в класс метод под названием repairCar, который будет чинить машину. Он должен принимать в себя 1 параметр carName - имя машины для ремонта (тип данных string). 
    Если carName не был передан, то отобразите ошибку “Вам необходимо указать название машины, чтобы ее отремонтировать” в консоли через console.error. На этом выполнение функции должно заканчиваться.
    Если же параметр carName был передан в repairCar, то вам необходимо сравнить текущее часы с временем работы автосервиса. Если текущее время (часы) не входит в диапазон работы автосервиса, то отобразите через alert сообщение “К сожалению, мы сейчас закрыты. Приходите завтра”. Иначе же выводите сообщение “Сейчас отремонтируем вашу машину carName! Ожидайте, пожалуйста” (carName - параметр метода repairCar).
    Примечание: при сравнении времени берите в учет только часы, на минуты не обращайте внимание. Пусть минуты всегда будут строкой “00”. Для теста работоспособности класса CarService используйте данный код:
const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');*/
/*
console.log(`
_________________ Дополнительное задание _________________`)
class CarService {
    constructor(name, workingHours) {
        this.name = name
        this.workingHours = workingHours
    }
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    repairCar(carName){

    }
}
const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');*/
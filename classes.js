class Person {
    constractor(name,age){
        this.name = name;
        this.age = age;

    }
    greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age}years old`);
    }
};
    const jane = new Person ('jane',30);
    console.log ({jane});
    jane.greet();
    console.log('prototype',Person.prototype)

    Person.prototype.nationality = 'Kenyan'
    console.log('nationality',jane.nationality)
    console.log(jane.hello)

    class student extends Person{
        constractor(name,age) {
        super(name,age);
        this.school = school;
        }
        proffesion(){
            console.log(`I am a student at $(this.school)`);
        }
        
    }
    const amanda= new  Student ('Amanda',19);
    console.log({amanda});
    console.log('nationality,amanda.nationality');
    amanda.greet();
    amanda.proffesion();
    
    

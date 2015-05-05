class Person {
    //Constructor +++++++++++++++++++++++++++++++++++++
    constructor() {
    }

    //Public Metods +++++++++++++++++++++++++++++++++++
    public saysHello() {
        console.log("Hello World!");
    }

}


function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}


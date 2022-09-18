// requerimiento 1

let Name: string = "Julian";
console.log(Name);

// requerimiento 2

let favoriteNumber: number= 4;
console.log(favoriteNumber);

//requerimiento 3

let animals: string[] = ["dog", "cat", "monkey","rat","rabit","leon","tiger","fish","bird","horse"];

//requerimiento 4

interface Organization {
	name: string;
	slogan: string;
	number_of_workers: number;
	office_hours:string;
	home_office: boolean;
	foundation_date:Date;
	work_saturday?:boolean;
}

const Organization: Organization = {
	name: "tienda de don pancho",
	slogan: "hoy no fio ,pregunte mañana",
	number_of_workers:10,
	office_hours:"lunes a viernes de 7:00 am - 17:00 pm",
	home_office:true,
	foundation_date:new Date('2022-09-17'),
	work_saturday:false,
}

//requerimiento 5

interface Students {
	name: string;
	age: number;
	grade: number;
	address?:string;
}

const Students: Students = {
	name: "pepito perez",
	age: 17,
	grade:4,
	address:"cuadra picha manzana 0 casa 1",
	
}

// requermiento 6

function areaCirculo(radio: number): number {
	return Math.PI*((radio)^2);
}

let Area: number = 0;

Area = areaCirculo(20)

console.log( Area );

//requerimiento 7

function higherNumber(a: number,b: number,c:number):number{

	return Math.max(a,b,c)
}

let result: number = 0;

result = higherNumber(5,2,5)

console.log( "the number higger is",result );

// requerimiento 8

function sayHello(myName: string):string{

	return myName;
}

Name = sayHello("carlos")

console.log( "hey, my name is",Name);


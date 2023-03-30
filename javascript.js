class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get fullName() {
		return `${this._firstName} ${this._lastName}`;
	}

	get birthYear() {
		return new Date().getFullYear() - this._age;
	}

	set firstName(firstName) {
		if (!firstName) {
			console.log("First name can't be empty.");
			return;
		}
		this._firstName = firstName;
	}

	set lastName(lastName) {
		if (!lastName) {
			console.log("Last name can't be empty.");
			return;
		}
		this._lastName = lastName;
	}

	set age(age) {
		this._age = age;
	}
}

class Teacher extends User {
	constructor(firstName, lastName, age, groups = [], yearsOfExperience) {
		super(firstName, lastName, age);
		this.groups = groups;
		this.yearsOfExperience = yearsOfExperience;
	}

	isGroupTeacher(groupName) {
		if (this.groups.includes(groupName)) 
			return true;
		return false;
	}
}


class Student extends User {
	static MIN_GRADE_FOR_SCHOLARSHIP = 4;

	constructor(firstName, lastName, age, group, averageGrade) {
		super(firstName, lastName, age);
		this.group = group;
		this.averageGrade = averageGrade;
	}

	isEligibleForScholarship() {
		if (this.averageGrade > Student.MIN_GRADE_FOR_SCHOLARSHIP)
			return true;
		return false;
	}
}

/*
const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41); 
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9); 
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);  
console.log(student1.fullName); // Tom Cruise 
console.log(student2.birthYear); // 1975 
console.log(student1.isEligibleForScholarship()); // true 
console.log(student2.isEligibleForScholarship()); // false 
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4  
*/

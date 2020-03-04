const names = ['Alex', 'Olga', 'Paul', 'Nata', 'Bob', 'Mary', 'Jeck'];
const persons = [];
const timeFrom = new Date('1980-01-01').getTime();
const timeTill = new Date('1995-12-31').getTime();
const N = + prompt("Enter amount ");

for (let i = 0; i < N; i++) {
    const nameIndex = Math.floor(Math.random() * names.length);
    const birthTime = Math.round(Math.random() * (timeFrom - timeTill) + timeFrom);

    persons.push({
        name: names[nameIndex],
        salary: Math.round(Math.random() * 500),
        Bday: new Date(birthTime),
        age: Math.round(Math.random() * 30 + 30),

    });
}
let sum = 0;
for (let i = 0; i < N; i++) {
    sum += persons[i].age;
}
const averAge = sum / persons.length;
console.log(averAge);
console.table(persons);

let maxSalary = -Infinity;
for (let i = 0; i < persons.length; i++) {
    if (persons[i].salary > maxSalary) {
        maxSalary = persons[i].salary;
    }

}
console.log(maxSalary);


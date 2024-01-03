let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
function averageAge(students){
    let sum=0;
    for(i=0; i<students.length; i++){
        sum+=students[i].age;
    }
    let average=sum/students.length
    return average;
}
result=averageAge(students);
console.log(result);

const countGender = (array) =>{
    let male=0;
    let female=0;
    for(i=0; i<array.length; i++){
        if("male"===students[i].gender){
            male++;
        }else{
            female++;
    }
}
return{male:male, female:female}
};
console.log(countGender(students));

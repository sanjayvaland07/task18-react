
// question 1

const arr = [1,2,3,4,5,6,7];

const square = arr.map((value)=>{
    return value*value;
});

console.log("square = ",square);

// question2

function getGrade(marks)
{
  return marks>90 ? 'A' :
          marks>=80 ? 'B' :
          marks>=70 ? 'C' :
          marks>=60 ? 'D' : 'F';
}

const grade = getGrade(50);
console.log(grade);

// question3

let car = {
  name : "Audi",
  model : "A4",
  year : 2012
};

function changeYear(car,year)
{
  car.year = year;
}

console.log(car);

changeYear(car,2015);

console.log(car);

const {model,year} = car;

console.log("model name = ",model," year = ",year);

// question 4 

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const prime = array.filter((value)=>{
  let isPrime = true;
  for(let i=2;i<value;i++)
  {
    if(value%i==0)
    {
      isPrime = false;
      break;
      
    }
    
    return isPrime;
  }
  
  
});

console.log("prime numbers = ",prime);

//question 5

const arr2 = [1,2,3,4,5,6,7,8,9,10];

const sum = arr2.reduce((e1,e2)=>{
  return e1 + e2;
});

console.log("sum of array = ",sum);


//question 6

async function getData()
        {
            let x = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            return data;
        });

        console.log(x);
    
        }

       getData();


// question 7

const person = {
  name : "hero",
  age : 30,
  address : "usa",
  contact : {
    email : "hero@email.com",
    number : "+1 123-456",
    address : {
      district : "jamnapar",
      state : "delhi"
    }
  }
};

console.log(person.contact.address.state);






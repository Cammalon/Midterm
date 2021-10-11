var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

var boxEle = document.body.querySelector(".box");

for(var i=0; i<list.length; i++) {

    let counterDisplayElem = document.querySelector('.counter');
    let counterPlusElem = document.querySelector('.counter-plus');

    let count = 5;

    updateDisplay();

    counterPlusElem.addEventListener("click",()=>{
        count++;
        updateDisplay();
    }) ;

    function updateDisplay(){
        counterDisplayElem.innerHTML = count;
    };


    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var ageEle = document.createElement("h2");

    nameEle.innerHTML = "Name: " + list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;

    if(list[i].age>24){
        ageEle.style.color = "green";
    }


    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    boxEle.appendChild(ele);

}


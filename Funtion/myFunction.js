
function sayHello (name, age) {

    if(name == "" || age == "")
    return;
    document.getElementById('message').innerText = (name + ' is ' + age + ' years old.');
}


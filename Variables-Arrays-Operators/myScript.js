/*  ==================== 
    JavaScript Variables:
    ====================
*/
    var name = "Injamul";
    var age = 25;
    var occupation = "Front-end Developer";

    document.querySelector('.variables').innerHTML = ("NAME : "+ name +"</br>" + "AGE : "+ age +"</br>" + "Job: " +occupation);

/*  ==================
    JavaScript Arrays:
    ==================
*/
    var bubbleArr = new Array (7, 4, 9, 5, 2, 6);
    var x, y, z;
    let temp = "";

    document.querySelector('#beforeSort').innerHTML = "Before sorting: ";
   
    // console.log("Before sorting: ");

    for(x = 0; x < bubbleArr.length; x++) {
        temp += bubbleArr[x] + "<br>";
    }
    document.getElementById('beforeSorting').innerHTML = temp;

    // Arranged into the ascending ordered:

    for (x = 0; x < 6; x++) {
        for (y = 0; y < 5; y++) {
            if(bubbleArr[y] > bubbleArr[y+1]) 
            // If we change the greater than '>' operator into the less than '<' operator, all of the array elements are sorted into descending order.
            {
                z = bubbleArr[y];
                bubbleArr[y] = bubbleArr[y+1];
                bubbleArr[y+1] = z;
            }
        }
    }

    document.getElementById("afterSort").innerHTML = "After sorting: ";

    // console.log('\n After Sort: ');
    let ascending = "";

    for(x = 0; x < bubbleArr.length; x++) {
        ascending += bubbleArr[x] + "<br>";
    }
    document.getElementById('afterSorting').innerHTML = ascending;


/*  =====================
    JavaScript Operators:
    =====================
*/ 
    var firstNumber = 30;
    var secondNumber = 15;

    // Arithmetic Operators:
    var additionOperator = firstNumber + secondNumber;
    var subtractionOperator = firstNumber - secondNumber;
    var multiplicationOperator = firstNumber * secondNumber;
    var divisionOperator = firstNumber / secondNumber;
    var modulusOperator = firstNumber % secondNumber;

    document.getElementById('addition').innerHTML = 'Using addition (+) operator: ' +additionOperator;
    document.getElementById('subtraction').innerHTML = 'Using subtraction (-) operator: ' +subtractionOperator;
    document.getElementById('multiplication').innerHTML = 'Using multiplication (*) operator: ' +multiplicationOperator;
    document.getElementById('division').innerHTML = 'Using division (/) operator: ' +divisionOperator;
    document.getElementById('modulus').innerHTML = 'Using modulus (%) operator or division remainder: ' +modulusOperator;

    // Comparison Operator:

    var number1 = 100;
    document.write('<br> <h3>Comparison Operator:</h3>');
    document.write(number1 == 10); // false
    document.write('<br>');
    document.write(number1 != 10); // true
    document.write('<br>');
    document.write(number1 >= 10); // true
    document.write('<br>');
    document.write(number1 <= 10); // false
    document.write('<br>');
    document.write(number1 > 10); // true
    document.write('<br>');
    document.write(number1 < 10); // false
    document.write('<br>');

    // Logical Operator:

    // document.getElementById('logical').innerHTML = "Logical Operators:";

    var uid = prompt("Enter User Id", "User Id");
    var pwd = prompt("Enter Password", "Password");

    var message = (uid == "Injamul" && pwd == "123456") ? "Welcome" : "Invalid User";
    // This is AND(&&) logical operator
    alert(message);
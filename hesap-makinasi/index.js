
var keys=document.querySelectorAll('#calculator span');
var operators= ['+', '-', 'x', '/'];
var decimalAdded = false;

for( var i=0; i<keys.length; i++) {
    keys[i].onclick=function(e) {
        var input = document.querySelector('.scree');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if(btnVal == 'C') {
            input.innerHTML ='';
            decimalAdded=false;
        }

        else if(btnVal== '=') {
            var equation = inputVal;
            var lastchar= equation[equation.length -1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if(equation)
                input.innerHTML = eval(equation);

            decimalAdded=false;
            
        }

        else if (operators.indexOf(btnVal)>-1){
            var lastchar= inputVal[inputVal.length - 1 ];
            if(inputVal != '' && operators.indexOf(lastchar) == -1)
                input.innerHTML += btnVal;

            else if(inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;
            if (operators.indexOf(lastchar) > -1 && inputVal.length > 1) {
                input.innerHTML = input.replace(/.$/,btnVal);
            }
            decimalAdded = false;
        }

        else if (btnVal == '.') {
            if(!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        }
        else {
            input.innerHTML += btnVal;
        }
        e.preventDefault();
    }
}
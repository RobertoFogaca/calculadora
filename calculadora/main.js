let display = document.getElementById("display")

    function insert(value){
        display.value += value
    }

    function clearToDisplay(){
        display.value =' '
    }

    function calculate() {
        let expression = display.value;
        let result = eval(expression);
        display.value = result === undefined ? '' : (result === 0 ? '0' : result);
    }
var age=18
var answer= document.getElementById('pergjigjia')

if(age>=18){  
    answer.innerHTML='ti ki te drejt vote'

}

else{
    answer.innerHTML='ti ski te drejte vote'
}


var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');


button.onclick = function()
{
    if (input.value > 10)
    {
        text.innerHTML = "Input value is greater than 10";
    }
    else if (input.value < 10)
    {
        text.innerHTML = "Input value is less than 10";
    }
    else
    {
        text.innerHTML = "Input value is equal to 10";
    }
}
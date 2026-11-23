function validation(){

    var name= document.getElementById('name').value

    var valid_name_regex = /^[A-Za-z]+$/;

    var valid_age_regex=/^[0-9]+$/;

    var city = document.getElementById('city').value


}  


if(!(name.watch(valid_name_regex)) || (age.match(valid_age_regex)) || (city == '')){

  if(!(name.match(valid_name_regex))){

    document.getElementById('name_error').stylevisibility = 'visible' ;
    document.getElementById('name')style.bordercolor = 'red' ;

}else{
     document.getElementById('name_error').stylevisibility = 'hidden' ;
    document.getElementById('name')style.bordercolor = 'black' ;
}

}

if(!(age.match(valid_age_regex))){

     document.getElementById('age_error').stylevisibility = 'visible' ;
    document.getElementById('age')style.bordercolor = 'red' ;{

}

} else{
     document.getElementById('age_error').stylevisibility = 'hidden' ;
    document.getElementById('age')style.bordercolor = 'black' ;
}


if(city == ''){

     document.getElementById('city_error').stylevisibility = 'visible' ;
    document.getElementById('city')style.bordercolor = 'red' ;{

}

} else{
     document.getElementById('city_error').stylevisibility = 'hidden' ;
    document.getElementById('city')style.bordercolor = 'black' ;
}
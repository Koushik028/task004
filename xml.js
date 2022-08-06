var Flag=() =>{
    var request= new XMLHttpRequest();
    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
    request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<=result.length;i++){
        console.log(result[i].flag);
    }
    };
    };
    Flag();


var Countries=() =>{
    var request= new XMLHttpRequest();
    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
    request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<=result.length;i++){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
    };
    };
    Countries();

// compare two json 

    var obj1 = {
        name:"person 1",
        age:5,
      };
          
      var obj2 = {
        age:5,
        name:"person 1"
      };
          
      JSON.stringify(obj1) === JSON.stringify(obj2)
      // false
          
      _.isEqual(obj1, obj2)
      // true
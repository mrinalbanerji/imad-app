//Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the Response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //Not done yet
    };
    
    //Make the request
    request.open('GET', 'http://mrinalbanerji12.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name1 = nameInput.value;
var SuBmit = document.getElementById('submit_btn');

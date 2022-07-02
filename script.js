    
let inpute = document.getElementById('inputt');

let btn =document.getElementById('btn');

let unorderlist = document.getElementById('unorder');


let closebutton = document.getElementById('closebtn')

btn.addEventListener('click',()=>{



        let lists = document.createElement('li');

        let texts = document.createTextNode(inpute.value);

        let closebtn =document.createElement('button');

        closebtn.setAttribute('onclick', "removelist(event)" );

        let btncon =document.createTextNode('X');

        closebtn.className = 'closebtn';

        closebtn.append(btncon);

        lists.append(texts);

        inpute.value = '';


        lists.className = 'list';


        let newdiv = document.createElement('div');

         newdiv.className = 'divitem';

         newdiv.append(lists, closebtn);

         unorderlist.append(newdiv);


})


function removelist(event){


    let removeli = event.target.parentNode;

    removeli.remove()

}
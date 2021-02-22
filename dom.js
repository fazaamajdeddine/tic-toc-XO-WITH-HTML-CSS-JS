//restart button
var restart=document.querySelector("#b"); //appelle lil boutton elli leclass mte3ha "b" bech na3tiha function fi star 15
// grabs td 
var squares=document.querySelectorAll("td");//appelle lil tableau mte3i b "td" 


// clear all the squares bech les carreau yevdew fer8in melloul

function clearBoard(){
    for (var i = 0; i < squares.length;i++){
        squares[i].textContent = " ";
    }
}

restart.addEventListener("click",clearBoard);

//tawwa bch na3ti function li cellule mta3 tableau 3titha id "one" w bch n9oulilha kif na3ml click tekteb x donc chna32ml appele lil id "one" bil querryselector w na3tiha el function elli 7achti biha 

//bch nsammi el carreau elloul cellone kima cellule numero 1 :)

//var cellone = document.querySelector("#one") // fi star hetha jbedet el id"one" elli hiya el carreau elloul walla celulle elloula 

//cellone.addEventListener("click",function(){   //fi stoura  hethoumz (23 lil 29) 9otlou ki tickliki 3liha (el carraeu elloul) kenou fera8 ekteb x wa2illa kenou fih x ekteb o wa8illa kenou fih o raja3ha fer8a
   // if (cellone.textContent===" "){
        //cellone.textContent= "x";
  //  }else if (cellone.textContent==="x"){
      //  cellone.textContent= "o";
    //}else{
        //cellone.textContent = " ";
    //}

//})
//el methode elloula jarrabtha 3la carreau bark w najjm n7otha 3al les carreau lkoll just na3mel copier coller 8 marrat 5ater a7na 3andna 9 careauwet 
//tawwa famma methode o5ra chniktebha a9sar barcha 

function changemarker(){
    if(this.textContent=== " "){
        this.textContent= "x";
    }else if (this.textContent ==="x"){
        this.textContent= "o";
    }else{
        this.textContent=" ";
    }
}

for (var i = 0; i < squares.length;i++){
    squares[i].addEventListener("click",changemarker);
}

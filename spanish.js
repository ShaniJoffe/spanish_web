//SHANI JOFFE 319189627
//SHANI LAVAN 313549156

//**********************
//-Final challenge after each section
//-help button,score,challenges that finished
//-vocabolary before each section
//-what to do in the end
//-change to 3 bottons instead of 2
//-function to mix them
//**********************
var arr=[6];//array of quotes
var image=[2];
var index1;//random will be choose
var index2;//random will be choose
var flagC1=false;
var flagN1=false;
var flagP1=false;
var flagC2=false;
var flagN2=false;
var flagP2=false;
var score=0;
var start=false;
var level="/1800";
    arr[0]="rojo";
    arr[1]="azúl";
    arr[2]="verde";
    arr[3]="amarillo";
    arr[4]="negro";
    arr[5]="blanco";
var i=0; 
var ImageArray= new Array();
    image[0] = 'red.jpg';
    image[1] = 'blue.png';
    image[2] = 'green.gif';
    image[3] = 'yellow.png';
    image[4] = 'black.png';
    image[5] = 'white.jpg';
//new button  
function codeAddress() 
{
    if(start==false)
        {
          $('#game').hide(); 
          $('#done').hide();
          $('#text').show(); 
        }
    else{
          $('#game').show(); 
          $('#text').hide(); 
          $('#done').hide();
    }
    if(flagC1==false)
        document.getElementById("colors2").disabled=true;
    if(flagN1==false)
        document.getElementById("numbers2").disabled=true;
    if(flagP1==false)
        document.getElementById("animals2").disabled=true;
    if(flagC2==false)
        $('#colors').hide();
    if(flagN2==false)
        $('#num').hide();
    if(flagP2==false)
        $('#animals').hide();
    document.getElementById("pic").innerHTML = '<img name="pic" src="'+image[i]+'" height="200" width="200" border=0>';
    document.getElementById("myButton1").disabled=false; 
    document.getElementById("myButton2").disabled=false; 
        var rand=[2];
        rand[0]=arr[i];
        arr.splice(i,1);
        index2=Math.floor((Math.random() * arr.length) + 1)-1;
        rand[1]=arr[index2];
        var flag=Math.floor((Math.random() * rand.length) + 1)-1;
        if(flag==0)
            {
              document.getElementById("myButton2").value=rand[0]; 
              document.getElementById("myButton1").value=rand[1];
            }
        else
            {
              document.getElementById("myButton2").value=rand[1]; 
              document.getElementById("myButton1").value=rand[0];
            }
   arr.splice(i,0,rand[0]);
    if(i==6)
        {
        $('#game').hide(); 
        $('#text').hide();
        $('#done').show();
            if(flagC1==true)
                {
                    document.getElementById("colors2").disabled=false; 
                }
            if(flagN1==true)
                {
                    document.getElementById("numbers2").disabled=false; 
                }
            if(flagP1==true)
                {
                    document.getElementById("animals2").disabled=false; 
                }
            if(flagC2==true)
                {
                    $('#colors').show();
                }
            if(flagN2==true)
                {
                    $('#num').show();
                }
            if(flagP2==true)
                {
                    $('#animals').show();
                }
            if(flagC1==true)
               document.getElementById("colors1").disabled=true; 
            if(flagN1==true)
               document.getElementById("numbers1").disabled=true; 
            if(flagP1==true)
               document.getElementById("animals1").disabled=true; 
        }
}
function numbersCheck()
{
    i=0;
    arr=["uno","dos","tres","coatro","cinco","seis"];
    image=['one.png','two.jpg','three.png','four.jpg','five.png','six.jpg']
    codeAddress(); 
}
function animalsCheck()
{
    i=0;
    arr=["perro","gato","oso","vaca","pato","pescado"];
    image=['pupy.gif','cat.jpg','bear.jpg','cow.jpg','duck.jpg','fish1.jpg']
    codeAddress();
}
function colorsCheck()
{
    numbers=true;
    i=0;
    arr=["rojo","azúl","verde","amarillo","negro","blanco"];
    image=['red.jpg','blue.png','green.gif','yellow.png','black.png','white.jpg']
    codeAddress();
}
function clickListenerLeft()
{
    if(document.getElementById("myButton1").value != arr[i])
    {
       document.getElementById("myButton1").disabled=true;
       score-=100;
       document.getElementById("score").innerHTML =score+level;
    }
    else
    {
       i++; 
       codeAddress();
       score+=100;
       document.getElementById("score").innerHTML =score+level;
    }
}
//pause button
function clickListenerRight()
{  
    if(document.getElementById("myButton2").value != arr[i])
    {
       document.getElementById("myButton2").disabled=true; 
       score-=100;
       document.getElementById("score").innerHTML =score+level;
    }
    else
    {
       i++; 
       codeAddress();
       score+=100;
       document.getElementById("score").innerHTML =score+level;

    }
}
function clickListenerColors1()
{
    start=true;
    $('#game').show(); 
    $('#text').hide();
     $('#done').hide();
    colorsCheck();
    flagC1=true;
}
function clickListenerNumbers1()
{
    start=true;
    $('#game').show(); 
    $('#text').hide();
     $('#done').hide();
    numbersCheck();
    flagN1=true;
}
function clickListenerAnimals1()
{
    start=true;
    $('#game').show(); 
    $('#text').hide();
     $('#done').hide();
    animalsCheck();
    flagP1=true;
}
function clickListenerColors2()
{
     $('#colors').show();
}
function clickListenerNumbers2()
{
     $('#num').show();
}
function clickListenerAnimals2()
{
     $('#animals').show();
}

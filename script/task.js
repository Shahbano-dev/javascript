// Task 2 

var family_members =+ prompt("How many Family Members you are?")
var category =+ prompt("1.Wheat(Gandum)  2.Barley(Jau) 3.Dates(Khajoor) 4.Raisins(Kishmish)","Enter Your Method Number")
if(category==1){
    alert("Your Fitrah is" +" "+family_members*250)
}
else if(category==2){
    alert("Your Fitrah is" +" "+family_members*450)
}
else if(category==3){
    alert("Your Fitrah is" +" "+family_members*2100)
}
else if(category==4){
    alert("Your Fitrah is" +" "+family_members*2800)
}
else{
    alert("Please Enter number according to given category")    
}


// Task 03


var secret_number = 7
var guess = + prompt("Guess the Secret Number")

if(guess==secret_number){
    alert("Congratulations! You guessed the secret number")
}
else if(guess>secret_number){
    alert("sorry! Your guess is high. Try Again")
}
else{
  alert("sorry! Your guess is low. Try Again")
}



// Task 04


  var good_name = prompt("Your Name Please")
  var select_word = good_name[0].toUpperCase()
  var ur_name = good_name.slice(1).toLowerCase()
  alert(select_word+ur_name)

  
// Task 05

var contact_names = []
var contact_num = []
for(i=0;i<3;i++){
    var cont_names = prompt("Enter Your Name Please")
    var cont_num =+ prompt("Enter Your Number Please")
    contact_names.push(cont_names)
    contact_num.push(cont_num) 
}
document.write(contact_names[0]+" "+contact_num[0]);
document.write("<br><br>")
document.write(contact_names[1]+" "+contact_num[1]);
document.write("<br><br>")
document.write(contact_names[2]+" "+contact_num[2]);
 

 

// task 06

var products = ['juice','ice cream','cake','brownie','pastry','chocolate','biscuits',]
var select_product = + prompt("0.juice 1.ice cream  2.cake  3.brownie 4.pastry 5.chocolate 6.biscuits","Enter Product Number Here")
document.write("Your Selected Product")
document.write("<br>")
 document.write(products[select_product])
 document.write("<br><br>")
 document.write("Our Products")
 document.write("<br>")
 products.splice([select_product],1)
 document.write(products)
 document.write("<br><br>")
 document.write("Our Product Range")
 document.write("<br>")
  document.write(products.length)
 

// task 07

 var enter_nationality = prompt("enter nation")
 var gender = prompt("enter gender please")
 var age = prompt("enter age please")

if(enter_nationality.toLowerCase() == 'pakistani' || enter_nationality.toLowerCase() == 'indian' ){
    if(gender.toLowerCase()=='male' && age>=18){   
            alert("You are eligible for vote")    
    }
    else if(gender.toLowerCase()=='female' && age>=18){   
        var martial_status = prompt("Please Enter Your Martial Status","Married OR Single")
        if(martial_status.toLowerCase() == 'married'){
            
            alert("You are eligible for vote")
        }
        else{
            alert("You are not eligible for vote")
        }   
     }

    else{
    alert("You are not eligible for vote because of require age .")
   }
            
}
else{
    alert("You are not eligible for vote because of nationality.")
}
 

// Task 08


 var N_C_Team = ['Babar Azam', 'Shadab Khan','Asif Ali','Mohammad Rizwan','Shaheen Shah Afridi','Naseem Shah', 'Haris Rauf',' Haider Ali','Iftikhar Ahmed','Khushdil Shah','Mohammad Hasnain ', 'Mohammad Nawaz','Mohammad Wasim','Shan Masood','Usman Qadir']
 document.write("National Cricket Team ")
 document.write("<br><br>")
 document.write(N_C_Team)
 var world_cup_squad = N_C_Team.slice(0,11)
 document.write("<br><br>")
 document.write("World Cup Squad")
 document.write("<br><br>")
 document.write(world_cup_squad)

 

 
 




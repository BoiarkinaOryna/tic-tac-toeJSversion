let list_cells = document.querySelectorAll(".cell")
console.log("list_cells", list_cells)
let step = "x"
let victory = false

for (let count = 0; count < list_cells.length; count++){
    let cell = list_cells[count]
    console.log(1)
    cell.addEventListener(
        type = 'click',
        listener = (event) =>{
            if (step == "x" && cell.textContent == "" && victory == false){
                cell.textContent = "x"
                step = "o"
            }
            else if (step == "o" && cell.textContent == "" && victory == false){
                cell.textContent = "o"
                step = "x"
            }
            if (document.getElementById("1").textContent == "x" && document.getElementById("2").textContent == "x" && document.getElementById("3").textContent == "x"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("2").style.background = "green"  
                document.getElementById("3").style.background = "green" 
                victory = true 
            }                
            else if (document.getElementById("4").textContent == "x" && document.getElementById("5").textContent == "x" && document.getElementById("6").textContent == "x"){
                document.getElementById("4").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("6").style.background = "green"     
                victory = true    
            }
            else if (document.getElementById("7").textContent == "x" && document.getElementById("8").textContent == "x" && document.getElementById("9").textContent == "x"){
                document.getElementById("7").style.background = "green"          
                document.getElementById("8").style.background = "green"  
                document.getElementById("9").style.background = "green"    
                victory = true     
            }
            else if (document.getElementById("1").textContent == "x" && document.getElementById("4").textContent == "x" && document.getElementById("7").textContent == "x"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("4").style.background = "green"  
                document.getElementById("7").style.background = "green" 
                victory = true        
            }
            else if (document.getElementById("2").textContent == "x" && document.getElementById("5").textContent == "x" && document.getElementById("8").textContent == "x"){
                document.getElementById("2").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("8").style.background = "green"  
                victory = true       
            }
            else if (document.getElementById("3").textContent == "x" && document.getElementById("6").textContent == "x" && document.getElementById("9").textContent == "x"){
                document.getElementById("3").style.background = "green"          
                document.getElementById("6").style.background = "green"  
                document.getElementById("9").style.background = "green"
                victory = true         
            }
            else if (document.getElementById("3").textContent == "x" && document.getElementById("5").textContent == "x" && document.getElementById("7").textContent == "x"){
                document.getElementById("3").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("7").style.background = "green"  
                victory = true       
            }
            else if (document.getElementById("1").textContent == "x" && document.getElementById("5").textContent == "x" && document.getElementById("9").textContent == "x"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("9").style.background = "green"   
                victory = true      
            }


            else if (document.getElementById("1").textContent == "o" && document.getElementById("2").textContent == "o" && document.getElementById("3").textContent == "o"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("2").style.background = "green"  
                document.getElementById("3").style.background = "green" 
                victory = true 
            }                
            else if (document.getElementById("4").textContent == "o" && document.getElementById("5").textContent == "o" && document.getElementById("6").textContent == "o"){
                document.getElementById("4").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("6").style.background = "green"     
                victory = true    
            }
            else if (document.getElementById("7").textContent == "o" && document.getElementById("8").textContent == "o" && document.getElementById("9").textContent == "o"){
                document.getElementById("7").style.background = "green"          
                document.getElementById("8").style.background = "green"  
                document.getElementById("9").style.background = "green"    
                victory = true     
            }
            else if (document.getElementById("1").textContent == "o" && document.getElementById("4").textContent == "o" && document.getElementById("7").textContent == "o"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("4").style.background = "green"  
                document.getElementById("7").style.background = "green" 
                victory = true        
            }
            else if (document.getElementById("2").textContent == "o" && document.getElementById("5").textContent == "o" && document.getElementById("8").textContent == "o"){
                document.getElementById("2").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("8").style.background = "green"  
                victory = true       
            }
            else if (document.getElementById("3").textContent == "o" && document.getElementById("6").textContent == "o" && document.getElementById("9").textContent == "o"){
                document.getElementById("3").style.background = "green"          
                document.getElementById("6").style.background = "green"  
                document.getElementById("9").style.background = "green"
                victory = true         
            }
            else if (document.getElementById("3").textContent == "o" && document.getElementById("5").textContent == "o" && document.getElementById("7").textContent == "o"){
                document.getElementById("3").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("7").style.background = "green"  
                victory = true       
            }
            else if (document.getElementById("1").textContent == "o" && document.getElementById("5").textContent == "o" && document.getElementById("9").textContent == "o"){
                document.getElementById("1").style.background = "green"          
                document.getElementById("5").style.background = "green"  
                document.getElementById("9").style.background = "green"   
                victory = true      
            }
        }
    )
}

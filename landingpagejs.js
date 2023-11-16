const data = new Date();
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        document.getElementById("date").innerHTML = today.toDateString();
        
        function time() {  
              const data = new Date();   
               let h = data.getHours();    
               let m = data.getMinutes();    
               let s = data.getSeconds();    
               if(h < 10)       
                  h = "0" +h;    
                if(m < 10)        
                m = "0" + m;    
            if(s < 10)        
            s = "0" + s;    
        document.getElementById("hour").innerHTML = h +":"+ m + ":" + s;    
        setTimeout('time()', 500);
    }


        let inbox = document.querySelector('#inbox');
        let list = document.querySelector('#list');

  inbox.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inbox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inbox}<i></i>`;

listItem.addEventListener("click", function(){
    this.classList.toggle('done');
})
listItem.querySelector("i").addEventListener("click", function(){
    listItem.remove();
})
    list.appendChild(listItem);
}
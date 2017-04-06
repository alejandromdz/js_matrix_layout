this.boxChanger=(function(){
     
     function changeBox(){
        const div5=document.querySelector('#container>div:nth-child(5)');
        setTimeout(function(){div5.innerHTML='I did it!'},1000);  
    }
    changeBox();
    return changeBox; 
   
})()
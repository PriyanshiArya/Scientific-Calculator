var scren = document.querySelector('#screen')
var btn = document.querySelectorAll('.btn')

for (item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
       
        if (btntext == 'C'){
            
            scren.value = ''
        }
        else if(btntext == '='){
            scren.value = eval(scren.value)
        }
        else{
            scren.value += btntext
        }
    })
}
    

    function sin(){
        scren.value = Math.sin(scren.value)
    }
    function cos(){
        scren.value = Math.cos(scren.value)
    }
    function tan(){
        scren.value = Math.tan(scren.value)
    }
    function pow(){
        scren.value = Math.pow(scren.value,2)
    }
    function sqrt(){
        scren.value = Math.sqrt(scren.value,2)
    }
    function log(){
        scren.value = Math.log(scren.value)
    }
    function pi(){
        scren.value = 3.14159265359;
    }
    function e(){
        scren.value = 2.71828182846;
    }
    function fact(){
        var i=1,num,f;
        f =1
        num = scren.value
        console.log(num)
        for(;i<=num;i++){
            f = f*i;
            console.log(i)
        }
        scren.value = f;
        console.log(f)
    }
    function backspc(){
        scren.value = scren.value.substr(0,scren.value.length -1 )
    }

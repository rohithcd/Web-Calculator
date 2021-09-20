let txt_box = document.querySelector(".text-box");
let txt_box_top = document.querySelector(".text-box-top");
let btn_num = document.getElementsByClassName("btn-num");
let btn_opt = document.getElementsByClassName("btn-opt");
let clear = document.querySelector(".back");
let all_clear = document.querySelector(".all-clear");
let dot =  document.querySelector(".dot");
let result =  document.querySelector(".result");
let num_len = btn_num.length;
let opt_len = btn_opt.length;

/* For functioning of Numbers */
for(let i=0; i<num_len; i++) 
{
    btn_num[i].addEventListener("click", function (){
        if(txt_box.value.length === 1)
        {
           if(parseInt(txt_box.value) === 0 && parseInt(btn_num[i].value) !== 0)
           {
                txt_box.value = btn_num[i].value;
           }
           else if(parseInt(btn_num[i].value) === 0 && parseInt(txt_box.value) === 0)
           {
                txt_box.value = 0;
           }
           else
           {
               txt_box.value += btn_num[i].value;
           }
        }
        else if(txt_box.value.length <= 10)
        {
            txt_box.value += btn_num[i].value;
        }
    });
} 

clear.addEventListener("click", function(){
    txt_box.value = Math.floor(txt_box.value/10);
});

all_clear.addEventListener("click", function(){
    txt_box.value = 0;
    txt_box_top.value = " ";
});

dot.addEventListener("click", function(){
    (txt_box.value.includes(".")) ? txt_box.value : txt_box.value += dot.value;
});
for(let i=0; i<opt_len; i++)
{
    btn_opt[i].addEventListener("click", function(){
        if(txt_box.value.length === 1 && parseInt(txt_box.value) === 0)
        {
            if(btn_opt[i].value === "+" || btn_opt[i].value === "-")
            {
                txt_box_top.value = btn_opt[i].value;
            }
        }
        else {
        txt_box_top.value += txt_box.value + btn_opt[i].value;
        txt_box.value = 0
        }
    });
}

result.addEventListener("click", function(){

    if(parseInt(txt_box.value) !== 0)
    {
        let value = txt_box_top.value + txt_box.value;
        let result = eval(value);
        console.log(txt_box_top.value.slice(-1));
        if(isNaN(txt_box_top.value.slice(-1))) {
            txt_box_top.value += txt_box.value; 
            txt_box.value = result;
        } 
        else 
        {
            txt_box_top.value = txt_box_top.value;
        }
        
        
    }
});

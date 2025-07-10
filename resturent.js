const addd=document.querySelector('.add_to')
const adon=document.querySelector(".add_one")
const adtow=document.querySelector(".add_two")
const sel=document.querySelector('#sl')
const ord=document.querySelector('#ord')
const reorder=document.querySelector('#reord')
const ins=document.querySelector("#clickcount")
const inp=document.querySelector("#clickcount")
const sum=document.querySelector("#clicksum")
const pric=document.querySelectorAll('.price')

 let clickcount=0
 let clicksum=0
addd.addEventListener("click",function(){
  clickcount++
  ins.textContent=clickcount
 clicksum.textContent+=pric.value;
  

})
adon.addEventListener("click",function(){
  clickcount++
  ins.textContent=clickcount
 clicksum.textContent+=pric.value;

  

})
adtow.addEventListener("click",function(){
  clickcount++
  ins.textContent=clickcount
 clicksum.textContent+=pric.value;

  

})


ord.addEventListener("click",function(){
  alert("تم اضافة الطلب بنجاح")
  ins.textContent=clickcount-clickcount
})
reorder.addEventListener("click",function(){
  alert("تم ازالة الطلب بنجاح")
  clickcount--
  if(clickcount<0){
    return clickcount*0
  }
  ins.textContent=clickcount
  
})


const contenar=document.getElementById('resturntname');
const textpart1=document.createTextNode(' مطعم')
const textpart2=document.createElement('span');
textpart2.textContent=' الامير'
textpart2.className='princ-text'
contenar.appendChild(textpart1)
contenar.appendChild(textpart2)
contenar.style.textAlign='center'
function checkrezing(){
  const screenWidth=window.innerWidth
  if(screenWidth<=1024){
    contenar.style.flexDirection='column';
    textpart2.style.marginTop='5px';
    contenar.style.fontSize='larg'
  }
   if(screenWidth>1024){
    contenar.style.display='none';
  }
  window.addEventListener('load',checkrezing)
  window.addEventListener('resize',checkrezing)
}
document.getElementById
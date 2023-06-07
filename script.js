let count = 0;

function increment(s) {
    const obj= document.getElementById(s);
    count = count + 1;
    console.log(count);
    obj.innerText=count;
}

function decrement(s) {
    const obj= document.getElementById(s);
    if(count ==0) count =0;
    else count = count - 1;
    console.log(count);
    obj.innerText=count;
}

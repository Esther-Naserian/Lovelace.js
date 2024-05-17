const intership = false;
const ourPromise = new Promise((resolve,rejected)=>{
if(intership){
    resolve('I made it ');
}else{
rejected ('pray for me')
}
});

ourPromise.then(()=>{
console.log("I will still be confirmed");
})
.catch(() => {
    console.log("I will continue applying for jobs");

})
.finally(() =>{

});

console.log({ourPromise});
const successWish = async ()=>{

    try{
     await ourPromise;
     console.log('My successful wish');
}catch{
    console.log('My wish is not successful');
}
}
successWish();



const cup={
    color: 'red',
    size: 'small',
    shape: 'cylinder',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    design:['floral','polka','checked'],
    drink:function(){
        console.log('use me to drink tea');
        console.log(`My main use is to drink ${this.functionality.drinkType}`)
    }
    
}
console.log('size',cup.size);
console.log({design: cup.design[0]});
console.log('shape',cup['shape']);
console.log('drinkType',cup.functionality.drinkType);
cup.drink();

delete cup.color;
console.log({cup});

const values=Object.values(cup);
console.log({values});

const keys= Object.keys(cup);
console.log({keys});

Object.keys(cup).forEach(item=> {
    console.log({key: item ,value: cup[item]});
})

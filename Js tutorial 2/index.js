var handset={
    Color:'red',
    weight :'450gm',
    ram :'4 gb',
    camera:'48mp', 
    battry: '4800mah',
    storage :'40gb',
    price :'6000rs',
    fingerlock :'yes',
    rom :'128gb',
    sim :"dual sim",
}

handset.memory='dual';
handset.cost='4500';

handset.color='green';


delete handset.storage;

for(var key in handset){
console.log(key,handset[key]);}
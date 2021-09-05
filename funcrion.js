function getObjectProperty(obj,path,defaultValue=undefined){
    let keys=path.match(/^([a-z]+\.?)+$/gi)[0].split('.')
     result = obj;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] in result) {
        result = result[keys[i]];
      } else {
        result = defaultValue;
        break;
      }
    }
    console.log(result);
}

const obj={
    id:87272,
    user:{
        name:'Maxim',
        age:23,
        LikeColors:['red','black'],
        adress:{
            contry: 'Belarus',
            city:'Gomel'
        }
    },
    level: 'Junior'
   
}
getObjectProperty(obj, 'user.name')
getObjectProperty(obj, 'user.age',false)
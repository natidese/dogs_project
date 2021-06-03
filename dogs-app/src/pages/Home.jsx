import Dog_card from '../featurs/Dog_card'

const dogs = [
    {firstName:"rexi",race:"pitbull",age:8},
    {firstName: "Ice",race:"dubarman",age:2},
    {firstName:"haz",race:"amastef",age:1},
    {firstName:"rico",race:"bulltrerr",age:9}];

export default function Home(){
   return(
   <div>  
    {dogs.map((dog)=>{
    if(dog.age >= 4){
      return(        
      <Dog_card firstName={dog.firstName} type={dog.type} age={dog.age} borderColor = "solid 8px green"/>)
    }
    else{
        return(        
      <Dog_card firstName={dog.firstName} type={dog.type} age={dog.age} borderColor = "solid 8px yellow"/>)
 }
  })}</div>)
}


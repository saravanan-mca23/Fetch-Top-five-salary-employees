import {boston} from "./boston.js"
var newboston=boston.data

for(let i=0;i<newboston.length;i++){
    for (let j=i+1;j<newboston.length;j++){
        if(newboston[i][11]<newboston[j][11]){
            let temp=newboston[i];
            newboston[i]=newboston[j]
            newboston[j]=temp
        }
    }
}
var ele=""

for(let i=0;i<5;i++){
    ele=ele+"<h1>"+newboston[i][8]+"</h1>"+"<h1>"+newboston[i][11]+"</h1>"
    console.log(newboston[i][8]+newboston[i][11])
}
document.getElementById("app").innerHTML=ele;
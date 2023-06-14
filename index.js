const findCopy=(n,answers)=>{
    let count =0
    let ans = answers.split(' ')
    for(let i=0;i<n-1;i++){
        if(ans[i][0]===ans[i+1][0] && ans[i][ans[i].length-1]===ans[i+1][ans[i+1].length-1]){
            count+=1
        }else{
            continue;
        }
    }
    console.log(count);
}

findCopy(4,'cdd ccfd csd csd')


const secreteMsg = (input)=>{
    let str = input.split(' ')
    let a = str[0]
    let b = str[1]
    let c = str[2]
    let d = str[3]
    if(a.length%2!==0){
        a=a.split('').reverse().join('')
    }
    if(b.length%2!==0){
        b=b.split('').reverse().join('')
    }
    if(c.length%2!==0){
        c=c.split('').reverse().join('')
    }
    if(d.length%2!==0){
        d=d.split('').reverse().join('')
    }
    console.log(a,b,c,d)
}

secreteMsg('One Two Three Four')
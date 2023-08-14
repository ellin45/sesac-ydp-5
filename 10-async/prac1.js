function call(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000);
    })
}

function back(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('back');
            resolve('back');
        },1000);
    })
}

function hell() {
    return new Promise(function(resolve, reject) {
            resolve('callback hell');
    },1000);
}

call('kim')
    .then(function(result){
        console.log(result + '반가워');
        return back(result);
    })
    .then(function(result){
        console.log(result + '을 실행햇구나');
        return hell(result);
    })
    .then(function(result){
        console.log('여기는' + result);
    })
    
async function exec() {
    let user = await login('kim');
    console.log(user + '반가워')
    let video = await login('back');
    console.log(video + '을 실행했구나')
    let title = await login('callback hell');
    console.log('여기는' + title);
}
exec();
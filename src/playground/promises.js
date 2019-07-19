const promise =  new Promise((resolve, reject) =>  {
    setTimeout(() => {
        resolve({
            name: 'Ankit',
            age: 26

        });
        // reject('Somethig went wrong');
    }, 2000);
});

console.log("before");

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            resolve('This is my another promise');
            
        }, 2000);
    });
}).then((str) => {
    console.log('does this change ?', str);
}).catch((error) => {
    console.log('The error is ', error);
});



console.log("after");
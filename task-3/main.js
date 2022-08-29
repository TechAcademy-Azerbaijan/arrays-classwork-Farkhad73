const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   for(let i = 0; i < 10; i+=2){
    console.log(i)
}
  
});

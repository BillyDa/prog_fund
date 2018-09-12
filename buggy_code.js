var items = ["purchase domain", "install SSL certificate", "deploy site", "celebrate success"];
for(var i = 0; i < items.length; i++){
  console.log("Todo:");
  console.log(i);
}

console.log("Todo:");
items.forEach(function(item, i){
  console.log((i + 1) + ': ' + item);
});

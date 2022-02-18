//https://teachablemachine.withgoogle.com/models/0GLqaV043/
function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0GLqaV043/model.json', modelReady);
}  
function modelReady(){
classifier.classify(gotresults);
}
function gotresults(error,results){
if (error){
console.error(error);
}
else{
console.log(results);
}
}
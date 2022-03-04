Webcam.set({
    width:450,
    height:350,
    image_format:'png',
    png_quality:100000
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function capture(){
    Webcam.snap(function(data_uri){

        document.getElementById('pic').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5.version')

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UDN92dKuC/model.json' , modelLoaded);

function modelLoaded(){
    console.log('modelloaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log('errror');
    }else{
        console.log('results');
        document.getElementById('result_object_name').innerHTML = results[0].label;
        document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(3);

    }
}
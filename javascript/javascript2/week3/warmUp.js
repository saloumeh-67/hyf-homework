function callString() {
    setTimeout(function(){(console.log("Called after 2.5 seconds")); },2500);
  };
  callString();
  function stringToLog(delay, stringToLog){
    setTimeout(function(){(console.log(stringToLog)); },delay* 1000);
  };
  stringToLog(3, "hey,it's working");

   //////////button
  const button=document.getElementById("#delay5Sec");
  document.addEventListener("delay5Sec",()=>{
    stringToLog(5,"you cliked 5 secound ago")
  });

  ////// earth
  const earthLogger =()=>{
    console.log("Earth");
  };
  const saturnLogger =()=>{
    console.log("Sautern");
  };
  const plantLogFunction=(x)=>{
    return x();
  };
  plantLogFunction(earthLogger);
  plantLogFunction(saturnLogger);

  ///////////make button for finding user Location 
  function locationUser() {

    let status = document.querySelector('#status');
    let mapLink = document.querySelector('#map-link');
    mapLink.href = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `This is  latitude: ${latitude}  This is  longitude: ${longitude} `;
    };

    function error() {
        status.textContent = 'Unable to retrieve your location';
    };
    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    };
};

document.querySelector('#find-me').addEventListener('click', locationUser);

///////////////Delay function 
function runAfterDelay(delay,callback) {
  setTimeout(()=>{
    return callback();
  }
  ,delay * 1000);
};
  runAfterDelay(3,function(){
 console.log ('it will run after 3 secound');
});

////////////dblclick

 document.addEventListener('dblclick', function () {
  const dclick = document.getElementById('#dclk');
         console.log('double click!');
 });
 //////////////////joking 
 function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if ([logFunnyJoke]){ console.log("funny joke")}        
  if ([logBadJoke] == false) { console.log("bad joke")} 
  shouldTellFunnyJoke == true || false
 };
  jokeCreator(true);
  jokeCreator(false);
 


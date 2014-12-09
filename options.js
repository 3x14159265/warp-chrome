window.addEventListener('load', function() {

  var chStr;
  try {
    chStr = localStorage.channels;
  } catch(error) {
    console.log(error);
    chStr = 'default,';
  }
  options.channels.value = chStr;
  
  if(!localStorage.host) {
   localStorage.host = 'localhost:9000'; 
  }
  options.host.value = localStorage.host;

  options.channels.onchange = function() {
    var channels = options.channels.value.replace(/ /ig,'');
    localStorage.channels = channels;
  };

  options.host.onchange = function() {
    localStorage.host = options.host.value.replace(/http:\/\//i,'').replace(/https:\/\//i,'');
  };
});

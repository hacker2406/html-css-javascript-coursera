(function () {

    var names = ["Ratul", "Sayantani", "Saunava", "Priyom", "Gourab", "Neel", "Ashish", "Abhishek", "amartya", "laura"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
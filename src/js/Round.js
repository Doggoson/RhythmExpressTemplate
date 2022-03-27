if(screen.width < 700) {
  document.write("Invalid Screen.")
}

const Elements = {
  Track1: document.getElementById("Track1"),
  Track2: document.getElementById("Track2"),
  Track3: document.getElementById("Track3"),
  Track4: document.getElementById("Track4"),
  Score: document.getElementById("Score")
};

var Score = 0;
var Sorted = [];

document.addEventListener("keydown", event => {
  //Sort all of the note positions to see which is the closest\\
    $("*").each(function() {
      Sorted.push([this.style.bottom, this.id, this]);
      Sorted.sort((a,b)=>{return a-b});
    });
  switch(event.key) {
    case 'a':
    Elements.Track1.style.backgroundColor = "#fe01b3"

    if(!Sorted[0]) {
      Score -= 125
      Elements.Score.innerHTML = "Score: " + Score;
    }

    if(parseInt(Sorted[0[0]], 10) <= 300 && Sorted[0[1]] === "ActiveNoteL") {
      Score += 50
      Elements.Score.innerHTML = "Score: " + Score
    }
    Sorted = [];
     break;
    case 's':
     Elements.Track2.style.backgroundColor = "#C800B4"
     break;
    case 'd':
     Elements.Track3.style.backgroundColor = "#9100B4"
     break;
    case 'f':
     Elements.Track4.style.backgroundColor = "#5A00B4"
  }
});

document.addEventListener("keyup", event => {
  switch(event.key) {
    case 'a':
    setTimeout(() => {
      Elements.Track1.style.backgroundColor = "transparent"
    }, 50);
      break;
    case 's':
    setTimeout(() => {
      Elements.Track2.style.backgroundColor = "transparent"
    }, 50);
      break;
    case 'd':
    setTimeout(() => {
      Elements.Track3.style.backgroundColor = "transparent"
    }, 50);
      break;
    case 'f':
    setTimeout(() => {
      Elements.Track4.style.backgroundColor = "transparent"
    }, 50);
      break;
  }
});

function SpawnNote(num) {
  if(num === 1) {
  var div = document.createElement('div');
  div.setAttribute('class', 'note -l');
  div.style = "left:750px;bottom:1250px;"
  div.id = "ActiveNoteL"

  document.body.appendChild(div);

  setInterval(() => {
    if(div.style.bottom != "-150px") {
      div.style.bottom = (parseInt(div.style.bottom, 10) - 10).toString() + "px"
    } else {
      $(div).remove();
    }
  },60)
  }

  if(num === 2) {
  var div = document.createElement('div');
  div.setAttribute('class', 'note -u');
  div.style = "left:855px;bottom:1250px;"
  div.id = "ActiveNoteU"

  document.body.appendChild(div);

  setInterval(() => {
    if(div.style.bottom != "-150px") {
      div.style.bottom = (parseInt(div.style.bottom, 10) - 10).toString() + "px"
    } else {
    $(div).remove();
    }
  },60)
  }

  if(num === 3) {
  var div = document.createElement('div');
  div.setAttribute('class', 'note -d');
  div.style = "left:960px;bottom:1250px;"
  div.id = "ActiveNoteD"

  document.body.appendChild(div);

  setInterval(() => {
    if(div.style.bottom != "-150px") {
      div.style.bottom = (parseInt(div.style.bottom, 10) - 10).toString() + "px"
    } else {
    $(div).remove();
    }
  },60)
  }

  if(num === 4) {
  var div = document.createElement('div');
  div.setAttribute('class', 'note -r');
  div.style = "left:1065px;bottom:1250px;"
  div.id = "ActiveNoteR"

  document.body.appendChild(div);

  setInterval(() => {
    if(div.style.bottom != "-150px") {
      div.style.bottom = (parseInt(div.style.bottom, 10) - 10).toString() + "px"
    } else {
    $(div).remove();
    
    }
  },60)
  }
}
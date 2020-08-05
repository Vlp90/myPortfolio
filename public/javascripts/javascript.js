// DATE

// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// var today = year + "-" + month + "-" + day;
// document.getElementById("creationDate").value = today;

// for (var i = 0; i < e.target.files.length; i++) {
//     var file = e.target.files[i];
//  }

//  document.getElementById('inp_img').value = dataURL;
// document.getElementById('inp_img').value += dataURL + '|';

let testVideoLink = document.getElementById("iframeTest").src;
let divVideo = document.getElementById("iframeDiv");

if (testVideoLink.includes("work")) {
  divVideo.style.display = "none";
}

console.log(testVideoLink);
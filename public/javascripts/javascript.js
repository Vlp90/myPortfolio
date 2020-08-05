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

// IF VIDEO SRC IS EMPTY

let videoLink = document.getElementById("iframeLink").src;
let divVideo = document.getElementById("iframeDiv");

if (videoLink.includes("work")) {
  divVideo.style.display = "none";
}
console.log(videoLink);

// IF IMAGE SRC IS EMPTY

// 1
let imageLink1 = document.getElementById("imageLink1").src;
let imageDiv1 = document.getElementById("imageDiv1");

if (imageLink1.includes("work")) {
  imageDiv1.style.display = "none";
}

// 2
let imageLink2 = document.getElementById("imageLink2").src;
let imageDiv2 = document.getElementById("imageDiv2");

if (imageLink2.includes("work")) {
  imageDiv2.style.display = "none";
}

// 3
let imageLink3 = document.getElementById("imageLink3").src;
let imageDiv3 = document.getElementById("imageDiv3");

if (imageLink3.includes("work")) {
  imageDiv3.style.display = "none";
}

// 4
let imageLink4 = document.getElementById("imageLink4").src;
let imageDiv4 = document.getElementById("imageDiv4");

if (imageLink4.includes("work")) {
  imageDiv4.style.display = "none";
}


console.log(imageLink1);
console.log(imageLink2);
console.log(imageLink3);
console.log(imageLink4);

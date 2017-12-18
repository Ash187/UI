function hideShow(event) {
    var classPresent = event.target.parentElement.querySelector('.content').className;
    var indexVal = classPresent.replace(/[\n\t]/g, " ").indexOf("hide");
    console.log(indexVal);
    if(indexVal == -1) {
        event.target.parentElement.querySelector('.content').classList.add('hide');
        event.target.innerHTML = 'Show';
    } else {
        console.log(event.target.parentElement.querySelector('.content').className);
        event.target.parentElement.querySelector('.content').classList.remove('hide');
        event.target.innerHTML = 'Hide';
    }
}

function colorChanger(event) {
    event.target;
    event.target.parentElement.querySelector('.content').style['color'] = "red";
}

function addElement() {
    var name = document.createElement("h1");
    name.innerText = "Ashish";

    var nameContainer = document.getElementById("name");
    nameContainer.appendChild(name);

    var address = document.createElement("p");
    address.innerText = "8, Spruce Street, 07306, jersey City";

    var addressContainer = document.getElementById("address");
    addressContainer.appendChild(address);

    var education = document.createElement("h3");
    education.innerHTML = "<a>B.Tech - Information technology</a>";

    var educationContainer = document.getElementById("education");
    educationContainer.appendChild(education);
}
addElement();

function showCollegePic() {
    var collegePic = document.getElementById('collegeLogo');
    collegeLogo.style['display'] = "block";
    collegePic.src = "college_pic.jpg";
}
function showcompanyPic() {
    var companyPic = document.getElementById('companyLogo');
    companyLogo.style['display'] = "block";
    companyPic.src = "Rajbhog_pic.jpg";
}
function check (inputvalue)
{
 var a= /^[A-Ha-h]+$/;
 var b= /^[I-Pi-p]+$/;
 var c= /^[Q-Zq-z]+$/;
 if (inputvalue.value.match(a))
 {
  alert("Ashish is Hardworking");
  }
  else if (inputvalue.value.match(b))
 {
  alert("Ashish is Creative");
  }
  else if(inputvalue.value.match(c))
 {
  alert("Ashish is Team Player");
  }
  else 
  {
  alert("Enter appropriate company name");
  }
  
  }
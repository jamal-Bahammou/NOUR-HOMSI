var zar = document.getElementById("zar");
var info = document.getElementById("info");
var pageNum = 1;

zar.addEventListener("click", function () {

    var xReq = new XMLHttpRequest();

    xReq.open('GET', 'js/cars_' + pageNum + '.json');
    xReq.onload = function () {
        var xData = JSON.parse(xReq.responseText);
        
        addHTML(xData);
    };
    xReq.send();
    pageNum++;
    
    if( pageNum > 3 ) {
        zar.classList.add("hide");
        zar.style.background = '#bdc3c7';
        zar.style.color = 'ligh';
    }

});

function addHTML(data) {
    var htmlText = "";
    
    for(i=0; i<data.length; i++) {
        htmlText += "<p><strong>" + data[i].name + " is a " + data[i].model + 
        
        "</strong><br><span class='red'> That has 4x4 cars like: ";
        for(j=0; j<data[i].type.four.length;j++) {
            if(j==0)
                htmlText += data[i].type.four[j];
            else
                htmlText += " and " + data[i].type.four[j];
        }
        
        htmlText += "</span><br><span class='orange'> and Salon cars like: ";
        for(j=0; j<data[i].type.salon.length;j++) {
            if(j==0)
                htmlText += data[i].type.salon[j];
            else
                htmlText += " and " + data[i].type.salon[j];
        }
        
        htmlText += "</span><br><span class='green'> Wich was made in the year: " + data[i].year + ".";
        htmlText += "</span><hr></p>";
    }
    info.insertAdjacentHTML('beforeend', htmlText);
}


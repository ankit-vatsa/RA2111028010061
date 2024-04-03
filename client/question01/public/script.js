{/* <script> */}
function fetchJson1() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var mobiles = JSON.parse(this.responseText);
      var tbody = document.querySelector("#mobiles-table tbody");
      mobiles.forEach(function (mobile) {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${mobile.productName}</td>
        <td>${mobile.price}</td>
        <td>${mobile.rating}</td>
        <td>${mobile.discount}</td>
        <td>${mobile.availability}</td>
        
      `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.open("GET", "AMZ.json", true);
  xhr.send();
}
function fetchJson2() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var mobiles = JSON.parse(this.responseText);
      var tbody = document.querySelector("#mobiles-table tbody");
      mobiles.forEach(function (mobile) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${mobile.productName}</td>
        <td>${mobile.price}</td>
        <td>${mobile.rating}</td>
        <td>${mobile.discount}</td>
        <td>${mobile.availability}</td>
      `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.open("GET", "AZO.json", true);
  xhr.send();
}
function fetchJson3() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var mobiles = JSON.parse(this.responseText);
      var tbody = document.querySelector("#mobiles-table tbody");
      mobiles.forEach(function (mobile) {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${mobile.productName}</td>
        <td>${mobile.price}</td>
        <td>${mobile.rating}</td>
        <td>${mobile.discount}</td>
        <td>${mobile.availability}</td>
        
      `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.open("GET", "FLP.json", true);
  xhr.send();
}
function fetchJson4() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var mobiles = JSON.parse(this.responseText);
      var tbody = document.querySelector("#mobiles-table tbody");
      mobiles.forEach(function (mobile) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${mobile.productName}</td>
        <td>${mobile.price}</td>
        <td>${mobile.rating}</td>
        <td>${mobile.discount}</td>
        <td>${mobile.availability}</td>
      `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.open("GET", "MYN.json", true);
  xhr.send();
}
function fetchJson5() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var mobiles = JSON.parse(this.responseText);
      var tbody = document.querySelector("#mobiles-table tbody");
      mobiles.forEach(function (mobile) {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${mobile.productName}</td>
        <td>${mobile.price}</td>
        <td>${mobile.rating}</td>
        <td>${mobile.discount}</td>
        <td>${mobile.availability}</td>
        
      `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.open("GET", "SNP.json", true);
  xhr.send();
}

{/* </script> */}
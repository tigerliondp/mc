// Original Author: Alisson Lauffer <alissonvitortc@gmail.com>
// This code is licensed under the MIT license.

var server_ip = "arm.eduu.ga";

function updateDetails(result){
    let status = document.getElementById("server__status");
    let info = document.getElementById("server__info");
    let version = document.getElementById("server__version");
    let ip = document.getElementById("server__ip");
    let motd = document.getElementById("server__motd");

    if (result.online) {
        status.innerText = "Server Online";
        status.classList.add("on");
        info.innerHTML = result.players.online + " players online.";
        ip.innerText = server_ip;
        
        version.innerText = result.version;
        motd.innerText = result.motd.clean
    }
    else {
        status.innerText = "Server Offline";
        status.classList.add("off");
        info.innerText = "Default IP:";
        ip.innerText = "mc.eduu.ga";

        version.innerText = "1.16.5";
    }
};


const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        updateDetails(response);
    }
};

xhr.open("GET", "https://api.mcsrvstat.us/2/" + server_ip);
xhr.send();

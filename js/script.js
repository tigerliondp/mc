var server_ip = "mc.amanoteam.com";

$.ajax({url: "https://api.mcsrvstat.us/2/" + server_ip, success: function(result){
    if (result.online) {
        $("#server__status").text("Server Online").addClass("on");
        $("#server__players").html(result.players.online + " players online.");
    }
    else {
        $("#server__status").text("Server Offline").addClass("off");
    }
}});
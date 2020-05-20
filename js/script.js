// Original Author: Alisson Lauffer <alissonvitortc@gmail.com>
// This code is licensed under the MIT license.

var server_ip = "mc.amanoteam.com";

$.ajax({url: "https://api.mcsrvstat.us/2/" + server_ip, success: function(result){
    if (result.online) {
    	$("#server__ip").text(server_ip)
        $("#server__status").text("Server Online").addClass("on");
        $("#server__info").html(result.players.online + " players online.");

    }
    else {
        $("#server__status").text("Server Offline").addClass("off");
        $("#server__info").text("Default IP:")
        $("#server__ip").text("mc.eduu.ga")
    }
}});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Initialize the Broadcaster's Device
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var broadcaster = PHONE({
    number        : "BROADCASTER",  // If you want more than one broadcaster, use unique ids
    publish_key   : 'pub-c-561a7378-fa06-4c50-a331-5c0056d0163c',
    subscribe_key : 'sub-c-17b7db8a-3915-11e4-9868-02ee2ddab7fe',
    ssl           : true
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Wait for New Viewers to Join
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
broadcaster.receive(function(new_viewer){
    new_viewer.connected(function(viewer){ /* ... */ }); // new viewer joined
    new_viewer.ended(function(viewer){ /* ... */ });  // viewer left
    //new_viewer.hangup();  // if you want to block the viewer
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Initialize the Viewer's Device
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var viewer = PHONE({
    number        : "VIEWER-"+new Date,
    publish_key   : 'pub-c-561a7378-fa06-4c50-a331-5c0056d0163c',
    subscribe_key : 'sub-c-17b7db8a-3915-11e4-9868-02ee2ddab7fe',
    ssl           : true
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Join a Broadcast as a Viewer
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
viewer.ready(function(){
    var broadcaster = phone.dial("BROADCASTER");
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Show Broadcast's Video Stream
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
viewer.receive(function(broadcaster){
    broadcaster.connected(function(broadcaster){
        document.body.appendChild(broadcaster.video);
    });
    broadcaster.ended(function(broadcaster){ /* broadcast ended */ });
});
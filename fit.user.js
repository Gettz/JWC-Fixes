// ==UserScript==
// @name JWChatMakeFit
// @namespace http://localhost
// @version 0.2
// @description JW fix iframe size
// @author Tom L
// @match https://tracker.telenetwork.com/tnichat/*
// @grant window.focus
// @updateURL https://raw.githubusercontent.com/Gettz/JWC-Fixes/master/fit.user.js
// @downloadURL https://raw.githubusercontent.com/Gettz/JWC-Fixes/master/fit.user.js
// ==/UserScript==

(function() {
'use strict';
    //var frame = document.getElementById('groupchatIChat');
    //frame.style.height = '94%';
    var frame2 = document.getElementsByClassName('rosterInnerElement')[1];
    frame2.style.height = '75%'
    //var frame = document.getElementById('chat');
    //frame.style.height = '80%';
}
)();

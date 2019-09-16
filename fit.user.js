// ==UserScript==
// @name JWChatMakeFit
// @namespace http://localhost
// @version 0.1
// @description JW fix iframe size
// @author Tom L
// @match https://tracker.telenetwork.com/tnichat/*
// @grant window.focus
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

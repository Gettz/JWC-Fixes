// ==UserScript==
// @name JWChat Fixes
// @namespace https://github.com/Gettz/
// @version 1.0
// @description JW fix iframe size
// @author Tom L
// @match https://tracker.telenetwork.com/tnichat/*
// @grant window.focus
// @updateURL https://raw.githubusercontent.com/Gettz/JWC-Fixes/master/fit.user.js
// @downloadURL https://raw.githubusercontent.com/Gettz/JWC-Fixes/master/fit.user.js
// ==/UserScript==

(function() {
'use strict';
    var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    try {
        var frame = document.getElementById('chat');
        frame.style.height = '80%';
    }
    catch(err) {
    }
    });

    // define what element should be observed by the observer
    // and what types of mutations trigger the callback
    observer.observe(document, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });

    //var frame = document.getElementById('groupchatIChat');
    //frame.style.height = '94%';
    try {
        var frame2 = document.getElementsByClassName('rosterInnerElement')[1];
        frame2.style.height = '75%'
    }
    catch(err) {
    }
})();

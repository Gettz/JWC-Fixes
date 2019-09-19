// ==UserScript==
// @name JWChat Fixes
// @namespace https://github.com/Gettz/
// @version 1.5
// @description JW fix iframe size
// @author Tom L
// @match https://tracker.telenetwork.com/tnichat/*
// @grant window.focus
// @grant GM_addStyle
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
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
    });

    try {
        var frame2 = document.getElementsByClassName('rosterInnerElement')[1];
        frame2.style.height = '75%'
    }
    catch(err) {
    }

    waitForKeyElements(".chatbox", function(node) {
        function scroll() {
            var chatframe = document.getElementsByClassName('chatbox')[0];
            var smallchange = chatframe.scrollHeight - chatframe.scrollTop
            if (smallchange <= 300) {
                chatframe.scrollTo(0,chatframe.scrollHeight);
            }
        }
        node.off();
        setTimeout(function() {
            setInterval(scroll, 1000);
            node.off();
        }, 1000);
    });
})();

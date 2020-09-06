if ("serviceWorker"in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(swsource, {
            scope: 'https://education.portaltonepal.com/'
        }).then(function(reg) {
            console.log('Congratulations!!Service Worker Registered ServiceWorker scope: ', reg.scope);
        }).catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
        var deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e)=>{
            deferredPrompt = e;
            if (deferredPrompt != null || deferredPrompt != undefined) {
                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                if (a2hsviashortcode !== null) {
                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display = "inline-block";
                    }
                }
                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (a2hsviashortcode !== null && checkbarClosedOrNot() && (typeof pwa_cta_assets !== 'undefined') && (pwa_cta_assets.a2h_sticky_on_desktop_cta == 1 || isMobile)) {
                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display = "flex";
                    }
                }
            }
        }
        );
        function checkbarClosedOrNot() {
            var closedTime = PWAforwpreadCookie("pwaforwp_prompt_close")
            if (closedTime) {
                var today = new Date();
                var closedTime = new Date(closedTime);
                var diffMs = (today - closedTime);
                var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
                if (diffMs) {
                    return false;
                }
            }
            return true;
        }
        var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
            return p.toString() === "[object SafariRemoteNotification]";
        }
        )(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        if (isSafari) {
            var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
            if (a2hsviashortcode !== null) {
                for (var i = 0; i < a2hsviashortcode.length; i++) {
                    a2hsviashortcode[i].style.display = "inline-block";
                }
            }
            var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (a2hsviashortcode !== null && checkbarClosedOrNot() && (typeof pwa_cta_assets !== 'undefined') && (pwa_cta_assets.a2h_sticky_on_desktop_cta == 1 || isMobile)) {
                for (var i = 0; i < a2hsviashortcode.length; i++) {
                    a2hsviashortcode[i].style.display = "flex";
                }
            }
        }
        var a2hsBtn = document.getElementsByClassName("Query selector (.element)");
        if (a2hsBtn !== null) {
            for (var i = 0; i < a2hsBtn.length; i++) {
                a2hsBtn[i].addEventListener("click", addToHome);
            }
        }
        var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
        if (a2hsviashortcode !== null) {
            for (var i = 0; i < a2hsviashortcode.length; i++) {
                a2hsviashortcode[i].addEventListener("click", addToHome);
            }
        }
        window.addEventListener('appinstalled', (evt)=>{
            var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
            if (a2hsviashortcode !== null) {
                for (var i = 0; i < a2hsviashortcode.length; i++) {
                    a2hsviashortcode[i].style.display = "none";
                }
            }
            var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
            if (a2hsviashortcode !== null) {
                for (var i = 0; i < a2hsviashortcode.length; i++) {
                    a2hsviashortcode[i].style.display = "none";
                }
            }
            var addtohomeBtn = document.getElementById("pwaforwp-add-to-home-click");
            if (addtohomeBtn !== null) {
                addtohomeBtn.style.display = "none";
            }
        }
        );
        function addToHome() {
            if (!deferredPrompt) {
                return;
            }
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult)=>{
                if (choiceResult.outcome === "accepted") {
                    document.getElementById("pwaforwp-add-to-home-click").style.display = "none";
                    var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                    if (a2hsviashortcode !== null) {
                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                            a2hsviashortcode[i].style.display = "none";
                        }
                    }
                    var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                    if (a2hsviashortcode !== null) {
                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                            a2hsviashortcode[i].style.display = "none";
                        }
                    }
                    console.log("User accepted the prompt");
                } else {
                    console.log("User dismissed the prompt");
                }
                deferredPrompt = null;
            }
            );
        }
        window.addEventListener("offline", pwaforwpOnNetworkChange);
        function pwaforwpOnNetworkChange(event) {
            if (!navigator.onLine) {
                var a2hsdesk = document.getElementById("pwaforwp-add-to-home-click");
                if (a2hsdesk !== null) {
                    a2hsdesk.style.display = "none";
                }
            }
        }
    });
}
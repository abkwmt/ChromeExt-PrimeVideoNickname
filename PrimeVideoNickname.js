(function (){
    const observeNode = document.getElementsByClassName("DVWebNode");
    if (observeNode.length != 1)
    { return; }

    const config = {childList: true, subtree: true };

    const callback = function(mutationList, observer) {
        var input = document.getElementById("participant-name-input");
        if (input == null)
        { return; }

        chrome.storage.local.get('nickname', function (items) {
            if (items.nickname == null)
            { input.value = ""; }
            else
            { input.value = items.nickname; }

            observer.disconnect();
        });

    };

    const observer = new MutationObserver(callback);
    observer.observe(observeNode[0], config);
})();
(function(){
    album_util = window.album_util||{};
    album_util.isEmpty = function(inputString) {
        return (!inputString || 0 === inputString.length);
    }
})();
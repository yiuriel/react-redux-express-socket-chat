function Storage () {}

Storage.prototype = {
    setItem : function (key, obj) {
        try {
            var serialized = JSON.stringify(obj);
            localStorage.setItem(key, serialized);
            return true;
        } catch (e) {
            return false;
        }
    },
    getItem : function (key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return e;
        }
    }
}

module.exports = new Storage();
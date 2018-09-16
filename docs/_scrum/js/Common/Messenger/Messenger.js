/////////////////////////////////////////
//Eric Filonowich - Scrum Alliance
//Messaging controller class
////////////////////////////////////////
var Messenger = function () {
    /*
    Send function

    */
    Send = function (referenceObjFunction, instanceObj) {
        if (this[referenceObjFunction]) {
            for (var i = 0; i < this[referenceObjFunction].length; i++) {
                this[referenceObjFunction][i](instanceObj);
            }
        }
    };

    /*
    Subscribe function

    */
    Subscribe = function (referenceObjFunction, implementationFunction) {
        if (!this[referenceObjFunction]) {
            this[referenceObjFunction] = [];
        }
        this[referenceObjFunction].push(implementationFunction);
    };

    return {
        Send: Send,
        Subscribe: Subscribe
    };

}();

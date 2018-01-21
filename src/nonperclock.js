/*
 (c) 2018, Olaf T.A. Janssen
 A proposal for a personal non-linear clock system

 https://github.com/olafjanssen/nonperclock (TODO)
*/

(function () {
    'use strict';


    /**
     * Gives the current time
     *
     * @returns {string} time as a string
     */
    function getFormattedTime(){

    }

    /**
     * Public interface
     */
    var NonPerClock = {
        getFormattedTime: getFormattedTime
    }

    // export as Node module / AMD module / browser variable
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = NonPerClock;
    }
    else if (typeof define === 'function' && define.amd) {
        define(NonPerClock);
    }
    else {
        window.NonPerClock = NonPerClock;
    }

})();
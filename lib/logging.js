"use strict";

module.exports = {

    /**
     * Cover for console.log
     * @param {...any} args The elements to log.
     * @returns {void}
     */
    info(...args) {
        console.log(...args);
    },

    /**
     * Cover for console.error
     * @param {...any} args The elements to log.
     * @returns {void}
     */
    error(...args) {
        console.error(...args);
    }
};
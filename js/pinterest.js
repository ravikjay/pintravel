// Described Pinterest JS SDK here to get better understanding of abilities
var Const = require('./const');

// Initialize once with app id
PDK.init({ appId: Const.PIN_APP, cookie: true });

/*
 *  Wrapper for all SDK actions
 */
var Pinterest = {
    /*
     *  login to Pinterest
     *  @param {Function} callback - function fired on completion
     */
    login: function(callback) {
        PDK.login({ scope : Const.PIN_SCOPE }, callback);
    },
    /*
     *  Use the SDK to logout
     */
    logout: function() {
        PDK.logout();
    },
    /*
     *  Determine auth state of user
     *  @returns {Boolean}
     */
    loggedIn: function() {
        return !!PDK.getSession();
    },
    /*
     *  Use SDK to create a new Pin
     *  @param {Object}   data     - {board, note, link, image_url}
     *  @param {Function} callback - function fired on completion
     */
    createPin: function(data, callback) {
        PDK.request('/pins/', 'POST', data, callback);
    },
    /*  Use SDK to GET a pin
	 *	@param {Object} data 		- {pin ID}
	 *	@param {Function} callback  - function is fired on completion
     */
    getPin: function(data, callback) {
    	PDK.request('/pins/', 'GET', data, callback);
    },
    /*
     *  Use SDK to request current users boards
     *  @param {Function} callback - function fired on completion
     */
    myBoards: function(callback) {
        PDK.me('boards', { fields: Const.PIN_FIELDS }, callback);
    }
};

module.exports = Pinterest;
'use strict';
const transits=require('./transits.json');
const moment=require('moment');
const randomstring = require('randomstring');
const isJSON = require('is-json');
/**
 * @param {String} transitId
 * @returns {Bool}
*/
exports.isValidTransit=function(transitId){
    return Boolean(transits[transitId] && transits[transitId]!=={});
};

exports.getTransitFare=function(transitId){
    return transits[transitId].Fare;
};


exports.getTransitTransferFare=function(transitId){
    return transits[transitId].TransferFare;
};

exports.getCurrentTimestamp=function(){
    return moment().format('YYYY-MM-DDTHH:mm:ss');
};



exports.isValidTransfer=function(timestamp){
    return Boolean(moment.duration(moment().diff(moment(timestamp))).asMinutes() < 120);
};



exports.getUniqueFareId=function(){
    return randomstring.generate();
};

exports.isJSON = function(jsonObj) {
    return isJSON(jsonObj);
};
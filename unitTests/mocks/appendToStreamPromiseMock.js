/**
 * Created by rharik on 6/12/15.
 */

var Promise = require('bluebird');
var streamName='';
var appendData={};
module.exports = {
    mock:function(_streamName, _appendData) {
        streamName = _streamName;
        appendData = _appendData;
        return Promise.resolve({
            streamName: streamName,
            appendData: appendData
        })
    },
    appendedData:  {streamName:streamName, appendData: appendData}
};
'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ServiceSchema = new Schema({
    name: {
        type: String,
        required: 'Please fill a Service name',
    },
    price:{
      type:Number
    },
    currency: {
        type:String
    },
    image: {
      type: String
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});
ServiceSchema.pre('save', function(next){
    let Service = this;
    const model = mongoose.model("Service", ServiceSchema);
    if (Service.isNew) {
        // create
        next();
    }else{
        // update
        Service.updated = new Date();
        next();
    }


})
mongoose.model("Service", ServiceSchema);

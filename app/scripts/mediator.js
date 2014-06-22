;(function(){
    Rogue.Mediator = function(){
        this.tasks = {};
    }
    Rogue.Mediator.prototype.subscribe = function(channel, callback){
        this.tasks[channel] = callback;
    };
    Rogue.Mediator.prototype.unsubscribe = function(channel){
        this.tasks[channel] = null;
    };
    Rogue.Mediator.prototype.publish = function(channel){
        if(!this.tasks[channel]){
            return false;
        }
        this.tasks[channel].apply();
    };
})();

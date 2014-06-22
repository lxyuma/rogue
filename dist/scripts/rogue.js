var Rogue = Rogue || {};

window.addEventListener('load', function(){
    Rogue.globalMediator = new Rogue.Mediator();
    new Rogue.Keyboard(Rogue.globalMediator);
});

;(function(){
    Rogue.Keyboard = function(mediator){
        this.mediator = mediator;
        window.addEventListener("keydown", this.onKeydown);
    };
    Rogue.Keyboard.prototype.onKeydown = function(event){
        switch(event.keyCode){
            case 37:
                this.mediator.publish('input-left');
                break;
            case 38:
                this.mediator.publish('input-up');
                break;
            case 39:
                this.mediator.publish('input-right');
                break;
            case 40:
                this.mediator.publish('input-down');
                break;
            default:
                return;
        }
        event.preventDefault();
    };
})();


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

;(function(){
    Rogue.Stage = function(data){
        this.data = data;
        this.cursorX = 0;
        this.cursorY = 0;
    };
    Rogue.Stage.prototype.show = function(){
    };
})();

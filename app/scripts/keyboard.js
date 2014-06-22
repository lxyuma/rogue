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


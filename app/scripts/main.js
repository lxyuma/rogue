var Rogue = Rogue || {};

window.addEventListener('load', function(){
    Rogue.globalMediator = new Rogue.Mediator();
    new Rogue.Keyboard(Rogue.globalMediator);
});

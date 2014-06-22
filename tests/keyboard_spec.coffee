describe 'Keyboard', ->
  beforeEach ->
    this.mediator = new Rogue.Mediator()
    this.keyboard = new Rogue.Keyboard(this.mediator)
    #document.body.innerHTML = "<div id='fakedDiv'></div>"
    #this.fakedDiv = document.getElementById('fakedDiv')
    #this.fakedDiv.addEventListener('keydown', this.keyboard.onKeydown)

  it 'has left direction', (done) ->
    this.mediator.subscribe('input-left', done)
    this.keyboard.onKeydown(
      keyCode:37
      preventDefault: -> )
    #this.fakedDiv.keydown()


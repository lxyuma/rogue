describe "Mediator", ->
  beforeEach ->
    this.mediator = new Rogue.Mediator()
  it "publish subscribed tasks", (done) ->

    this.mediator.subscribe('jikken', done)
    this.mediator.publish('jikken')


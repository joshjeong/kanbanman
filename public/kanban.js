$(document).on('ready', function(){
  new Controller(View);
});

var Controller = function(view){
  this.view = new view(this);
  this.view.makeDraggable();
  this.view.makeDroppable();

  // this.view.makeDroppable();
};

var View = function(controller){
  this.controller = controller;

  this.makeDraggable= function() {
    $('table tr').draggable({
      containment: '.container',
      helper: 'clone',
      snap: true,
      snapMode: 'inner',
      snapTolerance: 32,
      revert: 'invalid'
    });
  }

  this.makeDroppable = function(){
    $('.col-md-4').droppable({
      drop: function(e, ui) {
        var drop= $(this),
            drag= $(ui.draggable),
            dropChildren= drop.children(),
            dragChildren= drag.children();
        if(drop.attr('id')=="done") {
          drag.appendTo(drop.children()).delay(1000).fadeOut(5000)
        } else {
          drag.appendTo(drop.children())
        }
      }
    });
  }

}

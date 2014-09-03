$(document).on('ready', function(){
  c = new Controller(View);
  c.bindListeners();
});

var Controller = function(view){
  self = this;
  this.view = new view(this);
  this.view.makeDraggable();
  this.view.makeDroppable();

  this.bindListeners = function(){
    this.addListener();
  };

  this.addListener = function(){
    this.addTask();
  };

  this.addTask = function(){
  $('#add-input').on('submit', function(e){
    e.preventDefault();
    self.view.appendTask();
    self.view.makeDraggable();
    self.view.makeDroppable();
    })
  };
}

var View = function(controller){
  this.controller = controller;

  this.makeDraggable= function() {
    $('table td').draggable({
      containment: '.container',
      helper: 'clone',
      snap: true,
      snapMode: 'inner',
      snapTolerance: 32,
      revert: 'invalid'
    });
  };

  this.makeDroppable = function(){
    $('.col-md-4').droppable({
      drop: function(e, ui) {
        var drop= $(this),
            drag= $(ui.draggable),
            dropChildren= drop.children(),
            dragChildren= drag.children();
        if(drop.attr('id')=="done") {
          drag.appendTo(drop.children()).delay(1000).fadeOut(500)
        } else {
          drag.appendTo(drop.children())
        };
      }
    });
  };

  this.appendTask = function(){
    var task= $('#task_action').val();
    $('#todo table tr:last').after('<tr class="ui-draggable ui-draggable-handle"><td>'+
      task+'</td></tr>');
    $( "#add-input" ).val('');
    $( "#add-input input")[0].value = ''
  }
};





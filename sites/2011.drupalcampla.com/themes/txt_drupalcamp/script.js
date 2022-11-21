Drupal.behaviors.testige = function() {

}

Drupal.behaviors.flag_update = function() {
  $(window).bind('flagGlobalAfterLinkUpdate', function(e, data) {
    if ( ! e.stop) {
      e.stop = true;
      var selector = '#node-' + data.contentId + ' .vote-count';
      var number = Number($(selector).html());
      if (data.flagStatus == 'flagged') {
        $(selector).html(number+1);
      }
      else {
        $(selector).html(number-1);
      }
    }
  });
}

Drupal.behaviors.initBetterSelect = function(context) {
  $('.better-select .form-checkboxes input[type="checkbox"]').click(function(){
    this.checked ? $(this).parent().parent().addClass('hilight') : $(this).parent().parent().removeClass('hilight');
  }).filter(":checked").parent().parent().addClass('hilight');
}

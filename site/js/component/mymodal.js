let body = $('body');

const modal = {
  "open": function(data){
    body.addClass('lock')
    body.append(
      '<div class="my-modal"><div class="close close-modal"></div>'+ data + '</div>'
    )
  },
  "close": function(){
    body.removeClass('lock');
    $('.my-modal').remove();
  }
};

$(body).on('click', '.close-modal', function () {
  modal.close();
});




export default modal;

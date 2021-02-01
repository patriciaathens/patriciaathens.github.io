$('#navbar ul li a').on('click', function() {
  $(this).parent().find('a').removeClass('active');
  $(this).addClass('active');
});

$(window).on('scroll', function() {
  $('.section').each(function() {
      if($(window).scrollTop() >= Math.floor($(this).position().top)) {
        var id = $(this).attr('id');
        $('#navbar ul li a').removeClass('active');
        $('#navbar ul li a[href=#'+ id +']').addClass('active');
      }
  });
});
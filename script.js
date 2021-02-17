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

async function parseProjects() { 
  let projects = [];
  $.getJSON("projects.json", function(data){
    console.log("data");
    console.log(data);
    // data.projects.forEach(project => {
    //   projects = project.concat(project);
    // }) 
    // $.each( data, function( i, val ) {
    //   projects.concat(i);
    // });
    // projects = data;
  })
  console.log("length:", projects.length)

  let content = '';

  // generate HTML from items in chunks
  for (let i = 0; i < projects.length; i++) {
    content += `<div class="card"><div class="card-header">`;

    project = projects[i]
    content += `
      ${project.status}</div>
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <h6 class="card-text">${project.role}</h6>
        <p class="card-text">${project.desc}</p>
        <a href="#" class="btn btn-primary">${project.link}</a>
        </div>
      </a>`;

    content += `</div>`;
  }

  // insert content and start carousel
  $('#projectContainer').html(content);
}

$(function() {
  parseProjects();
});
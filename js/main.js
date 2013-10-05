'use strict';
var appendSlides = function (data) {
  var slides = data;
  var mdtemplate = $('#slide-template-markdown').html();
  var htmltemplate = $('#slide-template').html();
  var verticaltemplate = $('#vertical-template').html();
  var mdtempl = Handlebars.compile(mdtemplate);
  var htmltempl = Handlebars.compile(htmltemplate);
  var verticaltempl = Handlebars.compile(verticaltemplate);

  /*
   * Returns the template based on the file extension
   */
  var template = function(slide){
    var templ;
    if (slide.indexOf('.html') !== -1) {
      templ = htmltempl;
    } else if (slide.indexOf('.md') !== -1) {
      templ = mdtempl;
    }
    return templ;
  }

  slides.forEach(function (slide, index) {
    var templ;
    if (Object.prototype.toString.call(slide) === '[object Array]') {
      var verticalindex = 'vertical-' + index;
      $('.slides').append(verticaltempl({'ident': verticalindex}));

      slide.forEach(function (slide) {
        $('.vertical-' + index).append(template(slide)({'file': slide}));
      });

    } else {
      $('.slides').append(template(slide)({'file': slide}));
    }
  });
};


'use strict';
var appendSlides = function (data) {
  var slides           = data;
  var mdtemplate       = $('#slide-template-markdown').html();
  var htmltemplate     = $('#slide-template').html();
  var verticaltemplate = $('#vertical-template').html();
  var mdtempl          = Handlebars.compile(mdtemplate);
  var htmltempl        = Handlebars.compile(htmltemplate);
  var verticaltempl    = Handlebars.compile(verticaltemplate);

  /*
   * Returns the template based on the file extension
   */
  var getTemplate = function(slide){
    var templ;
    if (slide.indexOf('.html') !== -1) {
      templ = htmltempl;
    } else if (slide.indexOf('.md') !== -1) {
      templ = mdtempl;
    }
    
    var bgImage = '';
    var bgColor = '#ffffff';

    if (slide.indexOf('angular') !== -1) {;
      bgImage = "assets/angular-background-2.jpg";
      bgColor = "#bfd7e8";
    } else if (slide.indexOf('-ember') !== -1) {
      bgImage = "assets/ember-background.jpg";
      bgColor = "#faf4f1";
    }
    return templ({'file': slide, 'bgImage':bgImage, 'bgColor':bgColor});
  }

  slides.forEach(function (slide, index) {
    if (Object.prototype.toString.call(slide) === '[object Array]') {
      var verticalindex = 'vertical-' + index;
      $('.slides').append(verticaltempl({'ident': verticalindex}));

      slide.forEach(function (slide) {
        $('.vertical-' + index).append(getTemplate(slide));
      });
    } else {
      $('.slides').append(getTemplate(slide));
    }
  });
};


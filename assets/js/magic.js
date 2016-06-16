
// TAG CLOUD
$( document ).ready( function() {

      var entries = [ 

          { label: 'Back to top', url: 'http://www.jqueryscript.net/tags.php?/Back%20to%20top/', target: '_blank' },
          { label: 'Bootstrap', url: 'http://www.jqueryscript.net/tags.php?/Bootstrap/', target: '_blank' },
          { label: 'Carousel', url: 'http://www.jqueryscript.net/tags.php?/carousel/', target: '_blank' },
          { label: 'Countdown', url: 'http://www.jqueryscript.net/tags.php?/countdown/', target: '_blank' },
          { label: 'Dropdown Menu', url: 'http://www.jqueryscript.net/tags.php?/Drop%20Down%20Menu/', target: '_blank' },
          { label: 'CodePen', url: 'http://codepen.io/', target: '_blank' },
          { label: 'three.js', url: 'http://threejs.org/', target: '_blank' },
          { label: 'Form Validation', url: 'http://www.jqueryscript.net/tags.php?/form%20validation/', target: '_blank' },
          { label: 'JS Compress', url: 'http://jscompress.com/', target: '_blank' },
          { label: 'TinyPNG', url: 'https://tinypng.com/', target: '_blank' },
          { label: 'Can I Use', url: 'http://caniuse.com/', target: '_blank' },
          { label: 'URL shortener', url: 'https://goo.gl/', target: '_blank' },
          { label: 'Grid Layout', url: 'http://www.jqueryscript.net/tags.php?/grid%20layout/', target: '_blank' },
          { label: 'Twitter', url: 'https://twitter.com/NaiRobley', target: '_blank' },
          { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_blank' },
          { label: 'Gulp', url: 'http://gulpjs.com/', target: '_blank' },
          { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_blank' },
          { label: 'GitHub', url: 'https://github.com/', target: '_blank' },
          { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_blank' },
          { label: 'Tree View', url: 'http://www.jqueryscript.net/tags.php?/tree%20view/', target: '_blank' },
          { label: 'jsPerf', url: 'http://jsperf.com/', target: '_blank' },
          { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_blank' },
          { label: 'CreateJS', url: 'http://createjs.com/', target: '_blank' },
          { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_blank' },
          { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_blank' },
          { label: 'jQuery', url: 'https://jquery.com/', target: '_blank' },
          { label: 'Notification', url: 'http://www.jqueryscript.net/tags.php?/Notification/', target: '_blank' },
          { label: 'Parallax', url: 'http://www.jqueryscript.net/tags.php?/parallax/', target: '_blank' }

      ];

      var settings = {

          entries: entries,
          width: 480,
          height: 480,
          radius: '65%',
          radiusMin: 75,
          bgDraw: true,
          bgColor: 'transparent',
          opacityOver: 1.00,
          opacityOut: 0.05,
          opacitySpeed: 6,
          fov: 800,
          speed: 0.5,
          fontFamily: 'Oswald, Arial, sans-serif',
          fontSize: '15',
          fontColor: '#ffeb3b',
          fontWeight: 'normal',//bold
          fontStyle: 'normal',//italic 
          fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
          fontToUpperCase: true

      };

                  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
 $( '#tag-cloud' ).svg3DTagCloud( settings );
          } );

       var _gaq = _gaq || [];
       _gaq.push(['_setAccount', 'UA-36251023-1']);
       _gaq.push(['_setDomainName', 'jqueryscript.net']);
       _gaq.push(['_trackPageview']);

       (function() {
         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
         ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
       })();

// SLIDER

  $('.slider').slider({
      full_width: true,
      interval: 3000
  });

  $('.slider').slider('pause');

  $('#nextBtn').click(function(){
      $('.slider').slider('start');
      setTimeout(function(){
          console.log('of');
          $('.slider').slider('pause');
      },3000);
  });         
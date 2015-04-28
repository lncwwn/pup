/**
 * configure requireJs
 *
 * @author victor li
 * @date 2015/04/28
 */

require.config({
    baseUrl: '/',
    paths: {
        'jquery': '/jquery/dist/jquery.min',
        'bootstrap': '/bootstrap/dist/js/bootstrap.min',
        'index': '/js/index'
    }
});

define(['jquery'], function($) {
    var modules = $('script[data-module]');
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i],
            name = $(module).attr('data-module');
        require([name], function(m) {
            if (m&&m.init) {
                m.init();
            }
        });
    }
});

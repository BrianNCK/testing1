define(['brease/core/Utils'], function (Utils) {

    'use strict';

    var settings = {},
        devicePixelRatio = (window.devicePixelRatio > 1) ? window.devicePixelRatio : 1;

    Utils.defineProperty(settings, 'noKeyValue', '');
    Utils.defineProperty(settings, 'noValueString', 'XX');
    Utils.defineProperty(settings, 'globalContent', '0global');
    Utils.defineProperty(settings, 'swipe', {});
    Utils.defineProperty(settings, 'cachingSlotsMax', 200);
    Utils.defineProperty(settings, 'cachingSlotsDefault', 25);

    settings.swipe.maxFingerDistance = 120 * devicePixelRatio;
    settings.swipe.moveThreshold = 150 * devicePixelRatio;
    settings.swipe.velocity = 1.3;

    return settings;
});

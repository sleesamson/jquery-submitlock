/*
 * jQuery SubmitLock Plugin v1.1.0
 * https://github.com/twigtek/jquery-submitlock
 */

'use strict';

(function($) {
    $.fn.submitLock = function(options) {
        var settings = {
            // Whether or not to lock <button> and <input type="button"> elements.
            includeButtons: true,

            // Whether or not to lock <input type="reset"> elements.
            includeResets: true,

            // The class(es) to add to the elements being locked.
            classes: 'submitLockDisabled',

            // Whether or not to set the 'disabled' attribute on the elements being locked.
            // This is optional because setting this prevents some browsers from sending the value
            // of the input button along with the rest of the form data.
            disable: false
        };

        if (options) {
            $.extend(settings, options);
        }

        function lock($buttons) {
            // Tag them with the classes.
            $buttons.addClass(settings.classes);

            // Remove any events that may have been attached to them.
            $buttons.off('click');

            // Prevent the default browser processing of the event.
            $buttons.on('click', false);

            if (settings.disable) {
                $buttons.attr('disabled', 'true');
            }
        }

        return this.each(function() {
            var $form = $(this);

            if (!$form.is('form')) { return; }

            $form.one('submit', function(event) {
                lock($form.find('input[type=submit], input[type=image]'));

                if (settings.includeButtons) {
                    var $buttons = $form.find('button, input[type=button]');

                    lock($buttons);

                    // Sometimes <button>s get wrapped in an <a> to just act as a link.
                    // Take care of these, too.
                    $buttons.parents('a')
                        .off('click')
                        .on('click', false)
                        ;
                }

                if (settings.includeResets) {
                    lock($form.find('input[type=reset]'));
                }

                $form.trigger('locked');
            });
        });
    };
}(jQuery));

/*
 * Copyright (c)2012 TwigTek, Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/*
 * jQuery SubmitLock Plugin v1
 * https://bitbucket.org/twigtek/jquery-plugins
 */

(function($) {
    $.fn.submitLock = function(options) {
        var settings = {
            includeButtons: true, // Whether or not to lock <button /> and <input type="button" />.
            classes:        'submitLockDisabled', // The class(es) to add to the elements being locked.
            disable:        false // Whether or not to set the 'disabled' attribute on the elements being locked.
        };
        if (options) {
            $.extend(settings, options);
        }

        return this.each(function() {
            if ($(this).is('form')) {
                $(this).submit(function() {
                    $(this).find('input[type=submit]')
                        .addClass(settings.classes)
                        .click(function() {
                            return false;
                        });
                    if (settings.disable) {
                        $(this).find('input[type=submit]').attr('disabled', 'true');
                    }

                    if (settings.includeButtons) {
                        $(this).find('button,input[type=button]')
                            .addClass(settings.classes)
                            .click(function() {
                                return false;
                            })
                            .parents('a').click(function() {
                                return false;
                            });
                        if (settings.disable) {
                            $(this).find('button,input[type=button]').attr('disabled', 'true');
                        }
                    }
                });
            }
        });
    };
})(jQuery);

/*
 * Copyright (c)2011 TwigTek, Inc
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


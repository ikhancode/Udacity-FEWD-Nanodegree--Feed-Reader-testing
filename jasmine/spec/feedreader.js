/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has urls defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {

                //Not expects url to be undefined
                expect(allFeeds[i].url).toBeDefined();

                //Expects url to be not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has names defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {

                //Not expects name to be undefined
                expect(allFeeds[i].name).toBeDefined();

                //Expects name to be not empty
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function() {
            /* The jQuery method .hasClass simply checks if there
            exists a class .menu-hidden in index.html */
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('changing visibility', function() {
            /* Executes the event type (i.e. click) to the matched
            element on the left (i.e. ".menu-icon-link") */
            $(".menu-icon-link").trigger('click');

            /* Disappearing of '.menu-hidden' class from the body is
            expected. Menu visible in the browser. */
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Click triggers again on the same element
            $(".menu-icon-link").trigger('click');

            /* Now '.menu-hidden' class is visible in the body
            is expected with menu not visible in the browswer */
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
            // Atleast one entry is loaded before the test is carried out
            loadFeed(0, function() {
                done();
            });
        });

        it('are loaded', function() {
            expect($('.feed .entry').size).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('News Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var nextContent;
        beforeEach(function(done) {
        /* Before testing, let the loadFeed() load atleast two entries
        to determine they are two different entries */
            loadFeed(1, function() {
                nextContent = $('.feed').html();
                done();
            });
        });

        it('is all different', function(done) {
            loadFeed(0, function() {
                //Expecting the second entry not to be same as first one
                expect($('.feed').html()).not.toEqual(nextContent);
                done();
            });
        });

    });

}());

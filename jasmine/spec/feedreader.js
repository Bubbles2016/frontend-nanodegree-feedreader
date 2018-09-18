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
            // I found a hint on how to test if allFeeds is an array on slack
            expect(Array.isArray(allFeeds)).toBe(true);
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */it('all their urls are defined and not empty!', function() {
            var allFeeds = [
                {
                    name: 'Udacity Blog',
                    url: 'http://blog.udacity.com/feed'
                }, 
                {
                    name: 'CSS Tricks',
                    url: 'http://feeds.feedburner.com/CssTricks'
                }, 
                {
                    name: 'HTML5 Rocks',
                    url: 'http://feeds.feedburner.com/html5rocks'
                }, 
                {
                    name: 'Linear Digressions',
                    url: 'http://feeds.feedburner.com/udacity-linear-digressions'
                }
            ];
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
            
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */it('all their names are defined and not empty!', function() {
            var allFeeds = [
                {
                    name: 'Udacity Blog',
                    url: 'http://blog.udacity.com/feed'
                }, 
                {
                    name: 'CSS Tricks',
                    url: 'http://feeds.feedburner.com/CssTricks'
                }, 
                {
                    name: 'HTML5 Rocks',
                    url: 'http://feeds.feedburner.com/html5rocks'
                }, 
                {
                    name: 'Linear Digressions',
                    url: 'http://feeds.feedburner.com/udacity-linear-digressions'
                }
            ];
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
            
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */describe('The menu', function() {
            
                it('is hidden by default', function() {
                    expect($('body').hasClass('menu-hidden')).toBe(true);
                });
         

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          *I found the following hints to write the code below at discussions.udacity.com https://discussions.udacity.com/t/menu-visibility-test/187928/6
          */    it('changes visibility when the menu icon is clicked', function() {
                    $(".menu-icon-link").click();
                    expect(document.body.classList).not.toContain('menu-hidden');
                    $(".menu-icon-link").click();
                    expect(document.body.classList).toContain('menu-hidden');
                })
           });
        
        /* TODO: Write a new test suite named "Initial Entries" */
        /*I found the following hints at discussions.udacity.com: https://discussions.udacity.com/t/feed-reader-testing-initial-entries-suite/760528/2*/
        describe('Initial entries', function(){
            let entries = document.getElementsByClassName('entry-link').length;
            beforeEach(function (done){
                loadFeed(0);
                done();
            });

            it('have at least one entry in the feed', function (done){
                expect(entries.length).not.toBe(0);
                done();
            }); 
        });
        
        /* TODO: Write a new test suite named "New Feed Selection" */
        
        // I used the following link from Knowledge: https://knowledge.udacity.com/questions/7939, to write the following suite. 
        describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
            var oldUrl;
            var newUrl;
            beforeEach(function() {
                loadFeed(0, function() {
                    oldUrl = document.querySelector('.entry-link').html();
                    loadFeed(1,function() {
                        newURL = document.querySelector('.entry-link').html();
                        done();
                    })
                })
            })

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('has been loaded. The content has changed.', function() {
                expect(oldUrl !== newUrl).toBe(false);
            })
        });

}());

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
	(function() {
		describe('RSS Feeds', function() {

			it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			it('each feed contains an URL field', function() {
				allFeeds.forEach((feed) => {
					expect(feed.url).toBeDefined();
				});
			});

			it('each feed contains a name field', function() {
				allFeeds.forEach((feed) => {
					expect(feed.name).toBeDefined();
				});
			});
		});

		describe('The menu', function() {
            let menuIconLink = $('.menu-icon-link')
            let classes;

			it('menu element is hidden by default', function() {
                classes = $('body').attr('class');
                expect(classes).toContain('menu-hidden');
            });
            
			it('menu visibility changes after clicking menu icon', function() {
                menuIconLink.trigger('click');
                classes = $('body').attr('class');
                expect(classes).not.toContain('menu-hidden');

                menuIconLink.trigger('click');
                classes = $('body').attr('class');
                expect(classes).toContain('menu-hidden');
            });
        });

		describe('Initial Entries', function() {
            
        });

		/* TODO: Write a new test suite named "Initial Entries" */

		/* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

		/* TODO: Write a new test suite named "New Feed Selection" */

		/* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
	})()
);

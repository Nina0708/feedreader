$(
	(function() {
		describe('RSS Feeds', function() {
			it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			it('contain valid feeds(with url)', function() {
				allFeeds.forEach((feed) => {
					// Neither undefined, null or empty string 
					// is helpful for loading rss feed
					expect(feed.url).toBeDefined();
					expect(feed.url).not.toBe(null);
					expect(feed.url).not.toBe('');
				});
			});

			it('contain valid feeds(with name)', function() {
				allFeeds.forEach((feed) => {
					// Neither undefined, null or empty string 
					// is helpful for loading rss feed
					expect(feed.name).toBeDefined();
					expect(feed.url).not.toBe(null);
					expect(feed.url).not.toBe('');
				});
			});
		});

		describe('The menu', function() {
			let menuIconLink = $('.menu-icon-link');
			let classes;

			it('should hide menu by default', function() {
                // the hiding of menu items is achieved by
                // applying menu-hidden class on document body
                classes = $('body').attr('class');
                // We use toContain not toEqual because
                // we can't be sure extra classes will be 
                // added to body in the future
				expect(classes).toContain('menu-hidden');
			});

			it('should change menu visibility after clicking menu icon', function() {
				menuIconLink.trigger('click'); // This emulate a click event
				classes = $('body').attr('class');
				expect(classes).not.toContain('menu-hidden');

				menuIconLink.trigger('click');
				classes = $('body').attr('class');
				expect(classes).toContain('menu-hidden');
			});
		});

		describe('Initial Entries', function() {
			beforeEach(done => {
                // loadFeed() function is async. We will catch the precise timing when
                // loading is finished by passing the done() function as a second argument.
                // The callback is defined in loadFeed function body and will be executed
                // when the ajax request is returned.

				loadFeed(0, done);
			});

			it('should load feed entries into feed container', function() {
				expect($('.feed .entry').length).toBeGreaterThan(0);
			});
		});

		describe('New Feed Selection', function() {
			beforeEach(done => {
				loadFeed(0, done);
			});

			it('should load new feed when feeds are updated', function(done) {
                // Similar to the usage in beforeEach, we pass a callback argument
                // to loadFeed function call. Only this time we write the entire
                // assertion inside of the callback. This way we can be sure 
                // our firstEntryCssTricks is assigned after new feeds are loaded
                // and still have access to variables (fistEntryUdacity, expect and done)
                // through the closure we just created.

				let firstEntryUdacity = $('.feed .entry h2').first().html();
				loadFeed(1, () => {
					let firstEntryCssTricks = $('.feed .entry h2').first().html();
					expect(firstEntryUdacity).not.toEqual(firstEntryCssTricks);
					done();
				});
			});
		});
	})()
);

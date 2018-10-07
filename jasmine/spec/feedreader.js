$(
	(function() {
		describe('RSS Feeds', function() {
			it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			it('contain valid feeds(with url)', function() {
				allFeeds.forEach((feed) => {
					expect(feed.url).toBeDefined();
				});
			});

			it('contain valid feeds(with name)', function() {
				allFeeds.forEach((feed) => {
					expect(feed.name).toBeDefined();
				});
			});
		});

		describe('The menu', function() {
			let menuIconLink = $('.menu-icon-link');
			let classes;

			it('should hide menu by default', function() {
				classes = $('body').attr('class');
				expect(classes).toContain('menu-hidden');
			});

			it('should change menu visibility after clicking menu icon', function() {
				menuIconLink.trigger('click');
				classes = $('body').attr('class');
				expect(classes).not.toContain('menu-hidden');

				menuIconLink.trigger('click');
				classes = $('body').attr('class');
				expect(classes).toContain('menu-hidden');
			});
		});

		describe('Initial Entries', function() {
			beforeEach((done) => {
				loadFeed(0, done);
			});

			it('should load feed entries into feed container', function() {
				expect($('.feed .entry').length).toBeGreaterThan(0);
			});
		});

		describe('New Feed Selection', function() {
			beforeEach((done) => {
				loadFeed(0, done);
			});

			it('should load new feed when feeds are updated', function(done) {
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

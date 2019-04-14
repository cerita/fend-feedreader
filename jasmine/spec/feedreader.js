
$(function () {
    //Check that feeds are defined and not empty
    describe('RSS Feeds', function () {
        it('feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //Check that each feed item has a URL
        it('url is defined', function () {
            for (let feed of allFeeds) {
                expect(feed).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // Check that each feed item has a defined name
        it('name is defined', function () {
            for (let feed of allFeeds) {
                expect(feed).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });


    describe("the menu", function () {

        //Check that menu is hidden by default
        it('menu is hidden', function () {
            const body = document.querySelector('body');
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });

        //Check that menu changes visibility when clicked
        it('menu toggles', function () {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains("menu-hidden")).toBe(false);

            menu.click();
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });

    });

    // Check that there is at least one entry
    describe("initial entries", function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('feed has at least one entry', function () {
            const feed = document.querySelectorAll('.feed .entry')
            expect(feed.length > 0).toBe(true);

        });
    });



    //Check that when new feed is loaded, the content changes
    describe('new feed selection', function () {

        const feed = document.querySelector(".feed");
        const firstFeed = [];
        const secondFeed = [];
        beforeEach(function (done) {
            loadFeed(0, function () {
                Array.from(feed.children).forEach(function (feedItem) {
                    firstFeed.push(feedItem.innerText);
                });
                loadFeed(1, done);
            });
        });


        it('new feed loads', function () {
            const feed = document.querySelector(".feed");
            expect(feed.children.length > 0).toBe(true);
        });

        it('content changes', function () {
            Array.from(feed.children).forEach(function (curr, index) {
                expect(curr.innerText === firstFeed[index]).toBe(false);
            });
        });


    })




}());
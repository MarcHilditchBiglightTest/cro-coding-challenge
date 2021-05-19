(function () {

    if (window.screen.width <= 414) {
        initialise();
    }

    function initialise() {
        waitForElement('.s-main-slot.s-search-results').then(function (el) {
            insertPromotion();
            observeSearchResults();
        });
    }

    function observeSearchResults() {
        const observer = new MutationObserver(function () {
            insertPromotion();
        });
        observer.observe(document.querySelector(".s-search-results"), { subtree: true, childList: true });
    }

    function insertPromotion() {
        waitForElement('.s-result-item[data-component-type="s-search-result"]').then(function (el) {
            if (!document.querySelector('.challenge-2__promotion')) {
                el.insertAdjacentHTML('afterend', `<div class="challenge-2__promotion">
                                                        <h4>Get 50% off <br> all Amazon products</h4>
                                                        <p>Use code: <em>AZ50</em></p>
                                                        <p>T&Cs Apply</p>
                                                    </div>`);
            }
        });
    }

    function waitForElement(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        });
    }

})();
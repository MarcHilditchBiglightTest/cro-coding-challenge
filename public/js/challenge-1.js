(function () {

    if (window.screen.width <= 414) {
        initialise();
    }

    function initialise() {
        waitForElement('#a-page').then(function () {
            insertAddToCartDialog();
        });
        waitForElement('#add-to-cart-button').then(function () {
            observeAddToCartButton();
        });
    }

    function observeAddToCartButton() {
        const observer = new window.IntersectionObserver(([entry]) => {
            toggleAddToCartDialog(entry.isIntersecting)
        }, {
            root: null,
            threshold: 0
        });

        observer.observe(document.querySelector('#add-to-cart-button'));
    }

    function insertAddToCartDialog() {
        let div = document.createElement('div');
        div.className = 'challenge-1__add-to-cart';
        div.innerHTML = `<div class='challenge-1__add-to-cart-inner'>
                        <select id='challenge-1__quantity-selector' class='challenge-1__quantity-selector'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                        <span id='challenge-1__add-to-cart-button' class='a-button a-button-primary a-button-icon'>
                            <span class='a-button-inner'>
                                <i class='a-icon a-icon-cart'></i>
                                <span class='a-button-text'>Add to Basket</span>
                            </span>    
                        </span>
                    </div>`;
        document.body.append(div);

        addDialogEventHandlers();
    }

    function addDialogEventHandlers() {
        document.querySelector('#challenge-1__quantity-selector').addEventListener('change', function (el) {
            const quantity = el.target.value;
            document.querySelector('#mobileQuantitySelection .a-dropdown-prompt').innerText = quantity;
            document.querySelector('#quantity').value = quantity;
        })

        document.querySelector('#challenge-1__add-to-cart-button').addEventListener('click', function () {
            document.querySelector('#add-to-cart-button').click();
        })
    }

    function toggleAddToCartDialog(isDialogHidden) {
        const dialog = document.querySelector('.challenge-1__add-to-cart');
        if (isDialogHidden) {
            dialog.classList.add('challenge-1__add-to-cart--hidden');
        } else {
            dialog.classList.remove('challenge-1__add-to-cart--hidden');
        }
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
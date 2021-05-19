# Biglight CRO coding challenge

## Installation

```
    git clone https://github.com/MarcHilditchBiglightTest/cro-coding-challenge.git
    cd cro-coding-challenge
    npm install
    node server
```

## Project Structure

```
 |--public\         # Public JS and CSS served by Express
 |--sass\           # SCSS (compiled into CSS in public folder)
 |--server.js       # Node (Express) server to serve JS and CSS from public folder
```

## Files served

The files served for each challenge are as follows:

### Challenge 1

```
http://localhost:7000/js/challenge-1.js
http://localhost:7000/css/challenge-1.css
```

### Challenge 2

```
http://localhost:7000/js/challenge-2.js
http://localhost:7000/css/challenge-2.css
```

## Approach

### Challenge 1

URL: <https://www.amazon.co.uk/Echo-Dot-3rd-Gen-Charcoal/dp/B07PJV3JPR/ref=sr_1_2>

* Wait for the main page to appear (class `a-page`) and append the new, fixed 'Add to cart' dialog to the `body`.
* Display the new 'Add to cart' dialog when the existing 'Add to cart' button is not in the viewport (using `IntersectionObserver`).
* When the quantity dropdown in the new 'Add to cart' dialog is changed:
  * Update existing quantity on page to match (path `#mobileQuantitySelection .a-dropdown-prompt`).
  * Update the hidden `#quantity` form field in form (id `buyNow`) to match.
* When the 'Add to basket' button is clicked in the new 'Add to cart' dialog, programmatically click the existing 'Add to basket' button.

### Challenge 2

URL: <https://www.amazon.co.uk/s?k=Amazon>

* Wait for the search results to appear (path `.s-main-slot.s-search-results`), then:
  * Wait for the first search result to appear (path `.s-result-item[data-component-type="s-search-result"]`) and append the promotion panel.
  * Watch for changes to the results (using `MutationObserver`) and re-append the promotion panel.

## Notes

* The changes have been tested on Chrome desktop only (mobile device widths <= 414px).
* The changes are only activated for initial device widths of <= 414px. In a production test, this might be determined by the test audience in an optimisation tool.
* The changes are only activated on the URLs listed in the instructions. In a production test, other variants of the URL might need to be taken into consideration.
* For challenge 1, changing the quantity using the existing drop down initiates a form post to update delivery details. For the purposes of this challenge, this functionality has not been implemented.
 
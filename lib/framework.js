var framework = {}; // Isolate the framework scope within an object.

// Returns an integer representing an elements position, either top or left.
framework.getElementPos = function (el, edge) {
    if (edge === 'top') {
        return el.style.top ? parseInt(el.style.top.substring(0, el.style.top.length - 2)) : 0;
    }

    if (edge === 'left') {
        return el.style.left ? parseInt(el.style.left.substring(0, el.style.left.length - 2)) : 0;
    }
}

/**
 * Check for a collision with {Element} el for a move to (x, y) with height h and width w.
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {Element} el
 */
framework.collides = function (x, y, w, h, el) {

    // {number} Relative y coordinate.
    var elY = framework.getElementPos(el, 'top');
    // {number} Relative x coordinate.
    var elX = framework.getElementPos(el, 'left');

    var elRect = el.getBoundingClientRect();
    var elW = elRect.width;
    var elH = elRect.height;

    var isCoordinatesAbove = y < elY; // Is an element at (x, y) to above el?
    var dy = Math.abs(y - elY); // Horizontal distance between an element at (x, y) and el.
    var isVerticalCollision = isCoordinatesAbove ? dy < h : dy < elH;

    var isCoordinatesLeft = x < elX; // Is an element at (x, y) to the left of el?
    var dx = Math.abs(x - elX); // Horizontal distance between an element at (x, y) and el.
    var isHorizontalCollision = isCoordinatesLeft ? dx < w : dx < elW;

    if (isHorizontalCollision && isVerticalCollision) {

        // A collision occurs with el at the coordinates (x, y).
        return true;
    }

    return false;
}

framework.map = function (e, x, y) {
    e.style.top = y + 'px';
    e.style.left = x + 'px';
}

/**
   * Validate a coordinate.
   * @returns {boolean}
   */
framework.isValidNextMove = function (x, y, w, h) {
    var walls = document.getElementsByClassName('wall');

    for (var i = 0; i < walls.length; i++) {

        if (framework.collides(x, y, w, h, walls[i])) {
            // Player collides with a wall at coordinates (x,y), this is not a valid move.
            return false;
        }
    }
    return true;
}



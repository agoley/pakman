
function Ghost() {
    var size = 20;
    var animationLoop;
    var name;
    var direction;
    var isTracking;
    var isReleased;

    this.generateDiv = function (n) {
        var div = document.createElement("div");
        div.id = n;
        div.classList.add('ghost');
        name = n;
        return div;
    }

    this.getNode = function () {
        return document.getElementById(name);
    }

    this.getName = function () {
        return name;
    }

    this.realease = function () {
        isReleased = true;
        framework.map(this.getNode(), 345, 45);
    }

    this.move = function () {

        var frame = function () {
            node = this.getNode();
            this.setDirection();
            
            if (direction === 'up') {

                var nextTop = framework.getElementPos(node, 'top') - size;
                node.style.top = nextTop + 'px'
            }

            if (direction === 'down') {

                var nextTop = framework.getElementPos(node, 'top') + size;
                node.style.top = nextTop + 'px'
            }

            if (direction === 'right') {

                var nextLeft = framework.getElementPos(node, 'left') + size;
                if (nextLeft >= 605) {

                    nextLeft = 5;
                }
                node.style.left = nextLeft + 'px'
            }

            if (direction === 'left') {

                var nextLeft = framework.getElementPos(node, 'left') - size;
                if (nextLeft <= 0) {

                    nextLeft = 585;
                }
                node.style.left = nextLeft + 'px'
            }
        }.bind(this)

        animationLoop = setInterval(frame, 300);
    }

    /**
     * Return all valid directions.
     * @return {string[]} directions[]
     */
    this.getValidDirections = function () {
        var node = this.getNode();
        var directions = [];

        // Check if 'up' is a valid direction.
        var nextTop = framework.getElementPos(node, 'top') - size;
        if (framework.isValidNextMove(framework.getElementPos(node, 'left'), nextTop, size, size)) {
            directions.push('up');
        }

        var nextTop = framework.getElementPos(node, 'top') + size;
        if (framework.isValidNextMove(framework.getElementPos(node, 'left'), nextTop, size, size)) {
            directions.push('down');
        }

        var nextLeft = framework.getElementPos(node, 'left') - size;
        if (framework.isValidNextMove(nextLeft, framework.getElementPos(node, 'top'), size, size) && isReleased) {
            directions.push('left');
        }

        var nextLeft = framework.getElementPos(node, 'left') + size;
        if (framework.isValidNextMove(nextLeft, framework.getElementPos(node, 'top'), size, size) && isReleased) {
            directions.push('right');
        }

        return directions;
    }

    this.setDirection = function () {
        var directions = this.getValidDirections();

        if (direction === 'up') {
            if (directions.indexOf('down') >= 0) {
                directions.splice(directions.indexOf('down'), 1);
            }

            if (directions.length === 0) {
                direction = 'down';
            }

            var maximum = directions.length - 1;
            var minimum = 0;
            var randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            direction = directions[randomIndex];
        }

        if (direction === 'down') {
            if (directions.indexOf('up') >= 0) {
                directions.splice(directions.indexOf('up'), 1);
            }

            if (directions.length === 0) {
                direction = 'up';
            }

            var maximum = directions.length - 1;
            var minimum = 0;
            var randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

            direction = directions[randomIndex];
        }

        if (direction === 'left') {
            if (directions.indexOf('right') >= 0) {
                directions.splice(directions.indexOf('right'), 1);
            }

            if (directions.length === 0) {
                direction = 'right';
            }

            var maximum = directions.length - 1;
            var minimum = 0;
            var randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

            direction = directions[randomIndex];
        }

        if (direction === 'right') {
            if (directions.indexOf('left') >= 0) {
                directions.splice(directions.indexOf('left'), 1);
            }

            if (directions.length === 0) {
                direction = 'left';
            }

            var maximum = directions.length - 1;
            var minimum = 0;
            var randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

            direction = directions[randomIndex];
        }

        var maximum = directions.length - 1;
        var minimum = 0;
        var randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        direction = directions[randomIndex];
    }
}

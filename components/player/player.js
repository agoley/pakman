/**
 * PLayer
 */
function Player() {
    var size = 20;
    var animationLoop = null;

    this.generateDiv = function () {
        var div = document.createElement("div");
        div.id = "player";
        return div;
    }

    /**
     * Get a refererence to the player element.
     * @returns {Element}
     */
    this.getNode = function () {
        return document.getElementById('player');
    }

    /**
     * Move the player in a direction.
     */
    this.move = function (direction) {
        var node = this.getNode();

        if (!node) {
            throw "Node is not initiated.";
        }

        clearInterval(animationLoop);
        this.setDirection(direction);

        var frame = function () {

            if (direction === 'UP') {
                var nextTop = framework.getElementPos(node, 'top') + size;
                if (framework.isValidNextMove(framework.getElementPos(node, 'left'), nextTop, size, size)) {

                    // Move the player up one unit.
                    node.style.top = nextTop + 'px'
                } else {
                    clearInterval(animationLoop);
                }
            }

            if (direction === 'DOWN') {
                var nextTop = framework.getElementPos(node, 'top') - size;
                if (framework.isValidNextMove(framework.getElementPos(node, 'left'), nextTop, size, size)) {

                    // Move the player down one unit.
                    node.style.top = nextTop + 'px'
                } else {
                    clearInterval(animationLoop);
                }
            }

            if (direction === 'RIGHT') {
                var nextLeft = framework.getElementPos(node, 'left') + size;
                if (nextLeft > 605) {
                    nextLeft = 5;
                }
                if (framework.isValidNextMove(nextLeft, framework.getElementPos(node, 'top'), size, size)) {

                    // Move the player down one unit.
                    node.style.left = nextLeft + 'px'
                } else {
                    clearInterval(animationLoop);
                }
            }

            if (direction === 'LEFT') {
                var nextLeft = framework.getElementPos(node, 'left') - size;
                if (nextLeft < 0) {
                    nextLeft = 605;
                }
                if (framework.isValidNextMove(nextLeft, framework.getElementPos(node, 'top'), size, size)) {

                    // Move the player down one unit.
                    node.style.left = nextLeft + 'px'
                } else {
                    clearInterval(animationLoop);
                }
            }

            if (this.getNode().children[0].classList.contains('rotated')) {
                this.getNode().children[0].classList.remove('rotated');
                this.getNode().children[1].classList.remove('rotated');
            } else {
                this.getNode().children[0].classList.add('rotated');
                this.getNode().children[1].classList.add('rotated');
            }

        }.bind(this);

        animationLoop = setInterval(frame, 300);
    }

    this.setDirection = function (direction) {
        this.getNode().children[0].classList.remove('up');
        this.getNode().children[0].classList.remove('down');
        this.getNode().children[0].classList.remove('left');
        this.getNode().children[0].classList.remove('right');

        this.getNode().children[1].classList.remove('up');
        this.getNode().children[1].classList.remove('down');
        this.getNode().children[1].classList.remove('left');
        this.getNode().children[1].classList.remove('right')

        this.getNode().children[0].classList.add(direction.toLowerCase());
        this.getNode().children[1].classList.add(direction.toLowerCase());
    }

    window.onkeyup = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key == 39) {
            this.move('RIGHT');
        } else if (key == 40) {
            this.move('UP');
        } else if (key == 37) {
            this.move('LEFT');
        } else if (key == 38) {
            this.move('DOWN');
        }
    }.bind(this)

}
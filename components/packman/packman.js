
function Packman() {
    var player;
    var map;
    var ghosts;

    this.constructor = function () {
        var div = document.createElement("div");
        div.id = "packman";
        document.body.appendChild(div);

        this.initMap();
        this.initPlayer();
        this.initGhosts();
    }

    this.getNode = function () {
        return document.getElementById('packman');
    }

    this.getPlayer = function () {
        return player;
    }

    this.getMap = function () {
        return map;
    }

    this.initMap = function () {
        map = new Map();
        this.getNode().appendChild(this.getMap().generateDiv());
        map.initWalls();
    }

    this.initPlayer = function () {
        player = new Player();
        map.getNode().appendChild(player.generateDiv());
        player.getNode().style.top = '5px';
        player.getNode().style.left = '5px';

        var playerTopHalf = document.createElement("div");
        playerTopHalf.classList.add('player-top-half');
        player.getNode().appendChild(playerTopHalf);

        var playerBottomHalf = document.createElement("div");
        playerBottomHalf.classList.add('player-bottom-half');
        player.getNode().appendChild(playerBottomHalf);
    }

    this.initGhosts = function () {
        ghosts = [];
        var g1 = new Ghost();
        map.getNode().appendChild(g1.generateDiv('g1'));
        framework.map(g1.getNode(), 345, 45);
        g1.realease();
        g1.move();

        var g2 = new Ghost();
        map.getNode().appendChild(g2.generateDiv('g2'));
        framework.map(g2.getNode(), 345, 85);
        g2.move();
        setTimeout(function() {g2.realease()}.bind(this), 5000);

        var g3 = new Ghost();
        map.getNode().appendChild(g3.generateDiv('g3'));
        framework.map(g3.getNode(), 325, 105);
        g3.move();
        setTimeout(function() {g3.realease()}.bind(this), 10000);

        var g4 = new Ghost();
        map.getNode().appendChild(g4.generateDiv('g4'));
        framework.map(g4.getNode(), 365, 105);
        g4.move();
        setTimeout(function() {g4.realease()}.bind(this), 15000);
    }

    this.constructor();
}
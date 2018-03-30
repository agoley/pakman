
function Packman() {
    var player;
    var map;

    this.constructor = function () {
        var div = document.createElement("div");
        div.id = "packman";
        document.body.appendChild(div);

        this.initMap();
        this.initPlayer();
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

    this.constructor();
}
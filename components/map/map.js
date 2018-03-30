
function Map() {
    var node;

    this.constructor = function() {}

    this.generateDiv = function() {
        var div = document.createElement("div");
        div.id = "map";
        return div;
    }

    this.getNode = function() {
        return document.getElementById('map');
    }

    this.initWalls = function() {
        this.generateWall(1, 0, 0, 5, 605);
        this.generateWall(2, 0, 0, 70, 5);
        this.generateWall(3, 65, 0, 5, 85);
        this.generateWall(4, 65, 80, 40, 5);
        this.generateWall(5, 100, 0, 5, 80);
        this.generateWall(6, 125, 0, 5, 80);
        this.generateWall(7, 125, 80, 40, 5);
        this.generateWall(8, 160, 0, 5, 85);
        this.generateWall(9, 160, 0, 70, 5);
        this.generateWall(10, 225, 5, 5, 600);
        this.generateWall(11, 0, 605, 70, 5);
        this.generateWall(12, 65, 525, 5, 85);
        this.generateWall(13, 65, 525, 40, 5);
        this.generateWall(14, 100, 525, 5, 85);
        this.generateWall(15, 125, 525, 5, 85);
        this.generateWall(16, 125, 525, 40, 5);
        this.generateWall(17, 160, 525, 5, 85);
        this.generateWall(18, 160, 605, 70, 5);
    }

    this.generateWall = function(id, top, left, height, width) {
        var html = document.createElement('div');
        html.classList.add('wall');
        html.classList.add('wall' + id);
        html.id = "wall-" + id;
        this.getNode().appendChild(html)
        var node = document.getElementById("wall-" + id);
        node.style.top = top + 'px';
        node.style.left = left + 'px'; 
        node.style.background = "#333333";
        node.style.height = height + 'px';
        node.style.width = width + 'px';
    }

    this.constructor();
}
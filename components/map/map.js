
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
        this.generateWall(19, 25, 25, 20, 60);
        this.generateWall(20, 25, 105, 20, 80);
        this.generateWall(21, 65, 105, 40, 80);
        this.generateWall(22, 65, 105, 100, 40);
        this.generateWall(23, 125, 105, 40, 80);
        this.generateWall(24, 185, 25, 20, 60);
        this.generateWall(25, 185, 105, 20, 80);
        this.generateWall(26, 65, 205, 20, 80);
        this.generateWall(27, 65, 205, 60, 20);
        this.generateWall(28, 105, 205, 20, 80);
        this.generateWall(29, 105, 265, 60, 20);
        this.generateWall(30, 145, 205, 20, 80);
        this.generateWall(31, 25, 205, 20, 80);
        this.generateWall(32, 185, 205, 20, 80);
        this.generateWall(33, 65, 305, 100, 20);
        this.generateWall(34, 65, 305, 20, 35);
        this.generateWall(48, 65, 370, 20, 35);
        this.generateWall(49, 70, 340, 10, 35);
        this.generateWall(35, 125, 305, 20, 100);
        this.generateWall(36, 65, 385, 80, 20);
        this.generateWall(37, 125, 345, 40, 20);   
        this.generateWall(38, 65, 425, 20, 80);
        this.generateWall(39, 105, 425, 20, 80);
        this.generateWall(40, 65, 425, 100, 20);
        this.generateWall(41, 65, 485, 60, 20);
        this.generateWall(42, 25, 305, 20, 200);
        this.generateWall(43, 185, 305, 20, 200);
        this.generateWall(44, 165, 385, 20, 20);
        this.generateWall(45, 145, 465, 20, 40);
        this.generateWall(46, 25, 525, 20, 60);
        this.generateWall(47, 185, 525, 20, 60);
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
class Tsunami {
    constructor(xObj, yObj, timeout) {
        this.x = xObj;
        this.y = yObj;
        this.timeout = timeout;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    

    chooseCell(ch) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    startFlood() {
        this.stanalNorKordinatner();
        var characters = this.chooseCell(2);
        var newCell = random(characters);
        if (newCell) {
            matrix[this.y][this.x] = 0; 
            if (this.x >= 0 && this.x < matrix[0].length && this.y >= 0 && this.y < matrix.length){
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 8;
                matrix[newCell[1] - 1][newCell[0] - 1] = 8;
                matrix[newCell[1] + 1][newCell[0] + 1] = 8;
            }   
            this.y = newCell[1];
            this.x = newCell[0];
            for (var i in mardik) {
                if (mardik[i].x == this.x && mardik[i].y == this.y) {
                    mardik.splice(i, 1);
                }
            }
        }
    }
}
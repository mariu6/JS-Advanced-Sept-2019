class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1,p2) {
        let x = p1.x - p2.x;
        let y = p1.y - p2.y;
        return Math.hypot(x,y);     //  Math.sqrt((x**2)+(y**2));    hypot - хипотенуза
    }
}



let point1 = new Point(5, 5);
let point2 = new Point(9, 8);
console.log(Point.distance(point1, point2));

let point3 = new Point(5, 0);
let point4 = new Point(10, 0);
console.log(Point.distance(point3, point4));

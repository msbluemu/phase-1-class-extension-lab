// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
      return this.sides.length;
    }

    get perimeter(){
        let perimeter = 0;
        for(let i = 0; i< this.sides.length; i++){
            perimeter+= this.sides[i];
        }
        return perimeter;
    }
}

class Triangle extends Polygon{
    constructor(sides){
        super(sides);
    }

    get isValid(){
        
        if (
            this.sides[0] + this.sides[1] > this.sides[2] &&
            this.sides[0] + this.sides[2] > this.sides[1] &&
            this.sides[1] + this.sides[2] > this.sides[0]
          ) {
            return true;
          } else {
            return false;
          }
        }
        
    }

    class Square extends Polygon{
      constructor(sides){
          super(sides);
      }
  
      get isValid(){
          const [a, b, c, d] = this.sides;
          return a === b && b=== c && c ===d;
      }


      get area (){
        let area = 0;
        for(let i = 0; i< this.sides.length; i++){
            area = this.sides[i] * this.sides[i];
        }
        return area;
      }
    }
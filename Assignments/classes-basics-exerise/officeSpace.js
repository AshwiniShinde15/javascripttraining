class OfficeSpace{
    constructor(lengthFt,widthFt)
    {
        this.lengthFt =lengthFt;
        this.widthFt=widthFt;
    }

    calculateFloorArea(){
        let area = this.lengthFt * this.widthFt;
        console.log("Area:",+area);
    }
    calculateWallPerimeter(){
        let Perimeter= 2 * (this.lengthFt + this.widthFt);
        console.log("Perimeter:",+Perimeter);
        
    }
}

let officespace = new OfficeSpace(5,3);
officespace.calculateFloorArea();
officespace.calculateWallPerimeter();
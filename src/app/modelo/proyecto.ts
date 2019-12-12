import { Empleado } from './empleado';

export class Proyecto {

    constructor(public id:number,
        public nombre:string,
        public responsable:Empleado){

    }
}

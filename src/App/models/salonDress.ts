import IClosingSaleOrder from "./closingSaleOrder";
import IRentOrder from "./rentOrders";

export default interface ISalonDress {
    id: string,
    name:string,
    producer:string,
    color:string,
    size:string,
    bustSize: number | null,
    waistSize: number | null,
    hipsSize: number | null,
    heightSize: number | null,
    availableColor:string,
    price: number,
    rentAgreement: IRentOrder[] | [],
    closingSalesAgrement: IClosingSaleOrder | null
}

export interface IPostSalonDress {
    id?: string,
    name?:string,
    producer?:string,
    color?:string,
    size?:string,
    availableColor?:string,
    bustSize?: number | null,
    waistSize?: number | null,
    hipsSize?: number | null,
    heightSize?: number | null,
    price?: number,
}
export class DressFormValues implements IPostSalonDress {
    id?: string = undefined;
    name: string = '';
    producer: string = '';
    color: string = '';
    size?: string = '';
    bustSize?: number | null = null;
    waistSize?: number | null = null;
    hipsSize?: number | null = null;
    heightSize?: number | null = null;
    availableColor:string = '';
    price?: number = undefined;
    constructor(init?: IPostSalonDress) {
        Object.assign(this, init);
    }
}

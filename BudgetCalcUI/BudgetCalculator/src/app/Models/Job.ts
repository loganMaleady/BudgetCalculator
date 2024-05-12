export class Job{
    name: string;
    payType: string;
    payTime: string;
    payRatePeriod: string;
    wage: number;
    id: number

    constructor(name: string, payType: string, payTime: string, payRatePeriod: string, wage: number, id: number){
        this.name = name;
        this.payType = payType;
        this.payTime = payTime;
        this.payRatePeriod = payRatePeriod;
        this.wage = wage;
        this.id = id;
    }
}
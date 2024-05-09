export class Job{
    name: string;
    payType: string;
    payTime: string;
    wage: number;

    constructor(name: string, payType: string, payTime: string, wage: number){
        this.name = name;
        this.payType = payType;
        this.payTime = payTime;
        this.wage = wage;
    }
}
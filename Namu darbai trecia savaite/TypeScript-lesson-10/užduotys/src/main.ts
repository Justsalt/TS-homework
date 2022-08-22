abstract class Person {
  protected id: string;

  protected name: string;

  protected surname: string;


  constructor(id:string,name:string,surname:string){
    this.id=id;
    this.name=name;
    this.surname=surname

  }
  public getPersonInfo = (): string => `${this.id}${this.name} ${this.surname}`

  
//   
  public abstract toString(): string;
}




abstract class  Employee extends Person{
    
    public abstract calcPay(): number;

}
class Job{
        private id: string;
    private finished: boolean = false;
    private payed: boolean = false;
    private dateFinished?: Date;



public completeJob = (): void=>;
public setJobPayed = (): void=>;
public getPay = (): number=>;
public isFinished = (): boolean=>;
public isPayed = (): boolean=>;
public toString = (): string=>;

}

 class BuisnessLicencePerson extends Employee{
    private jobs: Job[];

    public calcPay = (): number{

    }
public override toString(): string{

}
 }
 class SelfEmployedPerson extends Employee{
    private hourPay: number;
private hoursWorked: number;

public calcPay = (): number{

}
public override toString(): string{

}
 }
 class WorkPerson extends Employee{
    private hourPay: number;
private fullTimeEquivalent: number;

public calcPay = (): number{

}
public override toString(): string{

}
 }
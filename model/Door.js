export default class Door {
    constructor(id,Hasgift=false,select=false,openDoor=false){
        this.id = id,
        this.Hasgift = Hasgift,
        this.select = select,
        this.openDoor = openDoor
    }

    get close(){
      return !this.openDoor;
    }

    Markoff() {
        const select = false;
        return new Door(this.id, this.Hasgift, select, this.openDoor);
      }
    
    toggleSelection() {
        const select = !this.select
        return new Door(this.id, this.Hasgift, select, this.openDoor);
      }
    
    open() {
        const openDoor = true;
        return new Door(this.id, this.Hasgift, this.selecionada, openDoor);
      }
}

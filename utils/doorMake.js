import Door from '../model/Door';

export function doorMake(xDoor,xDoorGift){
    return Array.from({length:xDoor},(_,index)=>{
        const hasgift = index === xDoorGift
        return new Door(index,hasgift)
    })
}

export function updateDoors(objs, newObj){
    return objs.map(obj => {
      const sameDoor = obj.id === newObj.id
  
      if (sameDoor) {
        return newObj
      } else {
        // Se já abriu a porta modificada, não desselecione as demais portas
        return newObj.openDoor ? obj : obj.Markoff()
      }
    })
  }
// У нас есть универсальная функция, которая вернёт нам новый массив в котором, если
// найдет совпадения по objPropName из объекта (u) с таким itemId - создаст копию объекта и заменит старые свойства
// деструкцией новых свойств (нового объекта)

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
   return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    })
}
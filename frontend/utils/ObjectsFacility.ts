export default class ObjectsFacility {

    static classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    }

    static uniqueArrayElements = (array: string[]) => {
        const onlyUnique = (value: any, index: number, self: any) =>
            self.indexOf(value) === index
        return array.filter(onlyUnique)

    }


    static arraysAreEqual = (a1: any[], a2: any[]): boolean =>
        a1.length === a2.length && a1.every((o, idx) => ObjectsFacility.objectsAreEqual(o, a2[idx]));

    static objectsAreEqual = (o1: any[], o2: any[]): boolean =>
        typeof o1 === 'object' && Object.keys(o1).length > 0
            ? Object.keys(o1).length === Object.keys(o2).length
            && Object.keys(o1).every((p: any) => ObjectsFacility.objectsAreEqual(o1[p], o2[p]))
            : o1 === o2;

}
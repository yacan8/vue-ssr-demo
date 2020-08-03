
export function fetchItem(id) {
    const items = [
        { name: 'item1', id: 1 },
        { name: 'item2', id: 2 },
        { name: 'item3', id: 3 }
    ];
    const item = items.find(i => i.id == id);
    return Promise.resolve(item);
}
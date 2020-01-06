/**
 * Created by akhil on 6/1/20.
 */

function updateInventory(currentInventoryList, newInventoryList)
{
    let inventoryStore = new Map();
    currentInventoryList.forEach(item =>
    {
        inventoryStore.set(item[1], item[0]);
    });

    newInventoryList.forEach(item =>
    {
        inventoryStore.set(item[1], inventoryStore.has(item[1]) ? inventoryStore.get(item[1]) + item[0] : item[0]);
    });

    return [...inventoryStore].sort().map(row =>
    {
        return [row[1], row[0]];
    })

}

module.exports = updateInventory;
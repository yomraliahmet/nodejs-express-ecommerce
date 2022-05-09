
const generate = (data, parent_id = null) => {

    const newArr = [];

    const match = data.filter((filterData) => filterData.parent_id == parent_id);
    const noMatch = data.filter((filterData) => filterData.parent_id != parent_id);

    match.map((item) => {
        const filterData = noMatch.filter((data) => data.parent_id == item.id);
        if(filterData.length > 0) {
            item.subcategory = filterData;
            newArr.push(item);

            generate(noMatch, item.id);
        }
    });

    return newArr;
}


module.exports = {
    generate
}

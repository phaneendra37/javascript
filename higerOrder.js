const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Emily", age: 35 },
    { id: 5, name: "David", age: 40 },
    { id: 6, name: "Sophia", age: 22 },
    { id: 7, name: "Michael", age: 33 },
    { id: 8, name: "Emma", age: 27 },
    { id: 9, name: "Olivia", age: 29 },
    { id: 10, name: "James", age: 31 }
];

const rerender = (array, id) => {
    if (!array || !id) throw Error('Data and Id Must be specified');
    let parentElement = document.getElementById(id);
    parentElement.innerHTML = ''
    // Clear the parent element first
    array.forEach((item, index) => {
        const childElement = document.createElement('li');
        childElement.textContent = `${index}. My Name is ${item?.name}, Age is ${item?.age}`;
        childElement.style.fontFamily = 'sans-serif';
        childElement.style.marginBottom = '12px';

        let removeBtn = document.createElement('button');
        removeBtn.textContent = `Remove ${item?.name}`
        removeBtn.style.marginLeft = '12px';
        removeBtn.addEventListener('click', () => removeItem(users, item));

        // Append childElement to parentElement, and removeBtn to childElement
        childElement.appendChild(removeBtn);
        parentElement.appendChild(childElement);
    });
}

const removeItem = (array, item) => {
    let userIndex = array.findIndex(user => JSON.stringify(user) == JSON.stringify(item));
    if (userIndex >= 0) {
        console.log(userIndex);
        array.splice(userIndex, 1);
        rerender(users, 'user');
    }
};

rerender(users, 'user');
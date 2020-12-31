var obj = [
    { id: 6, name: "Tushar" },
    { id: 7, name: "Aman" },
    { id: 9, name: "Ayush" },
    { id: 3, name: "Shivam" },
    { id: 2, name: "Varun" },
    { id: 5, name: "Manish" },
]

obj.sort(function (a, b) {
    return (a.id - b.id);
}).sort(function (a, b) {
    return (a.name - b.name);
});

console.log(obj);
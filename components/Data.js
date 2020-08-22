const choose = [
	{id: 1, label: "Bunga"},
	{id: 2, label: "Hewan"}
];

const type = [
	{id: 1, label: "Mawar", parent: 1},
	{id: 2, label: "Melati", parent: 1},
	{id: 3, label: "Kucing", parent: 2},
	{id: 4, label: "Anjing", parent: 2}
];

const title = [
	{id: 1, label: "Mawar Merah", parent: 1},
	{id: 2, label: "Mawar Putih", parent: 1},
	{id: 3, label: "Melati Kuning", parent: 2},
	{id: 4, label: "Melati Putih", parent: 2},
	{id: 5, label: "Kucing Persia", parent: 3},
	{id: 6, label: "Kucing Garong", parent: 3},
	{id: 7, label: "Anjing Husky", parent: 4},
	{id: 8, label: "Anjing Jalanan", parent: 4}
];

export {choose, type, title};

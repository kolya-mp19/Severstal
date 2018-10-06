//наш блок div в котором таблица с данными
let root = document.getElementById("root");

//согдаем таблицу с id
let table = document.createElement("table");
table.id = "mainTable";
table.className = "mainTable";
root.appendChild(table);

//создаем заголовок таблицы
let caption = document.createElement("caption")
caption.id = "headTable";
caption.innerHTML = "<b>Таблица по данным из файла ТЗ</b>"
table.appendChild(caption);

//создаем head таблицы
let thead = document.createElement("thead");
thead.id = "nameColMain";
table.appendChild(thead);

//создаем в head таблицы название столбцов
let tr = document.createElement("tr");
thead.appendChild(tr);
for (let key in myDateFromTZ[0]) {
    tr.innerHTML +="<th> " + key + " </th>";
}

//создаем body таблицы
let tbody = document.createElement("tbody");
tbody.id = "tBody";
table.appendChild(tbody);

for (let i=0; i<myDateFromTZ.length; i++) {
    let trB = document.createElement("tr");
    trB.id = "trB" + i;


    //сортировка по дочерним элементам
    if (myDateFromTZ[i].parentId == 0) {
        tbody.appendChild(trB);
    } else {
        let j = myDateFromTZ[i].parentId - 1;
        $( trB ).insertAfter( "#trB" + j );
        trB.style.display = "";
        trB.style.background = "lightgreen";
    }
    
    //заполняем таблицу данными
    for (let key in myDateFromTZ[i]) {
        let tdB = document.createElement("td");
        trB.appendChild(tdB);
        tdB.innerHTML = myDateFromTZ[i][key];
    }
    
}


        
function LoadProjects(){
    let arrProjects = [];

    for(let i = 0; i < localStorage.length; i++) {
        var value = localStorage.getItem('PRJ0' + i)

        if (value != null){
            arrProjects.push(value);
        }
    }

    // Create Table from JSON object array
    let col = [];
    col.push('ID');
    col.push('NAME');

    // Create Table
    const table = document.createElement("table");

    // Create table header row using the extracted headers above
    let tr = table.insertRow(-1); // table row

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
  
      // add json data to the table as rows.
    for (let i = 0; i < arrProjects.length; i++) {
        tr = table.insertRow(-1);
        
        let tabCell1 = tr.insertCell(-1);
        tabCell1.innerHTML = 'PRJ0' + (i + 1);

        let tabCell2 = tr.insertCell(-1);
        tabCell2.innerHTML = arrProjects[i];
    }
  
    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById('showProjects');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}
function LoadUsers(){
    let arrUsers = JSON.parse(window.localStorage.getItem("users"));

    // Create Table from JSON object array
        let col = [];
        Object.keys(arrUsers[0]).forEach(function(key) {
            if (key !== "password" && key !== 'profilePicture'){
                col.push(key);
            }
        });

    // Create Table
    const table = document.createElement("table");
    table.setAttribute('class', 'MemberTable');

    // Create table header row using the extracted headers above
    let tr = table.insertRow(-1); // table row

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.setAttribute('class', 'HeaderColour1');
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
  
      // add json data to the table as rows.
    for (let i = 0; i < arrUsers.length; i++) {
  
        tr = table.insertRow(-1);
        
        if (i % 2 == 0)
        {
            tr.setAttribute('class', 'colour1');
        }
        else
        {
            tr.setAttribute('class', 'colour2');
        }

        for (key in arrUsers[i])
        {
            if (key !== "password" && key !== 'profilePicture'){
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = arrUsers[i][key];
            }
        }
    }
  
    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

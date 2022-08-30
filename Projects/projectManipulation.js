window.onload = LoadProjects();

function LoadProjects(){
    let arrProjects = JSON.parse(window.localStorage.getItem("projects"));
    if (arrProjects !== null) {
        // Create Table from JSON object array
        let col = [];
        Object.keys(arrProjects[0]).forEach(function(key) {
            col.push(key);
        });
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
            for (key in arrProjects[i])
            {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = key === "members" ? arrProjects[i][key].join(", ") : arrProjects[i][key];                             
            }                                    
        }
        // Now, add the newly created table with json data, to a container.
        const divShowData = document.getElementById("divShowData");
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
    }
}
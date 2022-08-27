window.onload = function(){ // Ensures the page is loaded before functions are executed.
    LoadUsers();
    LoadProjects();
    LoadBugs();

    var form = document.getElementById("bugForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    // MARKDOWN CODE - NOT WORKING YET, JS GIVING ISSUES!
    // md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
    // html_content = markdown.toHTML( md_content );

    // const divShowData = document.getElementById('TestMD');
    // divShowData.innerHTML = "";
    // divShowData.appendChild(html_content);
}
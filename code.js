
function ShowDate(){
    const now = new Date();
    const formatted = now.toDateString(); // Example: "Tue Aug 05 2025"
    document.getElementById('date').innerHTML = formatted;
}
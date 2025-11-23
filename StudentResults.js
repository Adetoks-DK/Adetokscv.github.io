<script>
function createInputs() {
    let count = document.getElementById("subjectCount").value;
    let container = document.getElementById("subjects");
    container.innerHTML = "";

    if (count <= 0) return;

    for (let i = 1; i <= count; i++) {
        container.innerHTML += `Subject ${i} Mark: <input type="number" id="mark${i}" min="0" max="100"><br><br>`;
    }

    container.innerHTML += `<button onclick="calculateResults()">Calculate Results</button>`;
}

function calculateResults() {
    let count = document.getElementById("subjectCount").value;
    let results = "<h3>Results:</h3>";

    for (let i = 1; i <= count; i++) {
        let mark = parseInt(document.getElementById(`mark${i}`).value);
        let grade = getGrade(mark);
        results += `Subject ${i}: ${mark}% - Grade: ${grade}<br>`;
    }

    document.getElementById("output").innerHTML = results;
}

function getGrade(mark) {
    if (mark >= 90) return "A";
    if (mark >= 80) return "B";
    if (mark >= 70) return "C";
    if (mark >= 60) return "D";
    if (mark >= 50) return "E";
    return "F";
}
</script>
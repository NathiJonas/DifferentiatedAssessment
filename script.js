function generatePlan() {
  const performance = document.querySelector('input[name="performance"]:checked');
  const learningStyles = [...document.querySelectorAll('.learningStyle:checked')].map(cb => cb.value);
  const otherStyle = document.getElementById("otherStyle").value.trim();
  if (otherStyle) learningStyles.push(otherStyle);

  const supports = [...document.querySelectorAll('.support:checked')].map(cb => cb.value);
  const otherSupport = document.getElementById("otherSupport").value.trim();
  if (otherSupport) supports.push(otherSupport);

  const format = document.getElementById("format").value.trim();
  const objectives = document.getElementById("objectives").value.trim();
  const providedSupports = document.getElementById("providedSupports").value.trim();
  const rubric = document.getElementById("rubric").value.trim();

  let assessmentOptions = [];
  if (performance?.value === "above") {
    assessmentOptions = [
      "Project-based assessment",
      "Oral presentation",
      "Choice board or menu assessment",
      "Peer teaching or mentoring",
      "Self-reflection / journaling"
    ];
  } else if (performance?.value === "below") {
    assessmentOptions = [
      "Scaffolded checklist or rubric",
      "Exit slips or daily formative checks",
      "Think-alouds or guided practice",
      "Visual supports (graphic organizers, diagrams)",
      "Physical/hands-on tasks",
      "Extra time or modified instructions"
    ];
  }

  const resultText = `
📄 Final Assessment Plan
-----------------------------
🧩 Performance Level: ${performance ? (performance.value === "above" ? "At/Above Grade Level" : "Below Grade Level") : "Not selected"}
🎨 Learning Styles: ${learningStyles.join(", ")}
🛠️ Support Needs: ${supports.join(", ")}
✅ Suggested Assessment Types:
  - ${assessmentOptions.join("\n  - ")}

📘 Assessment Format:
${format}

🎯 Learning Objective(s):
${objectives}

🔧 Supports Provided:
${providedSupports}

📏 Rubric/Criteria:
${rubric}
-----------------------------
  `;

  document.getElementById("results").innerText = resultText;
}
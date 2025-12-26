function selectCategory(category) {
    const title = document.getElementById("title");
    const output = document.getElementById("output");

    title.textContent = category.toUpperCase();

    if (category === "illegal") {
        output.textContent = `{
  "DFIntS2PhysicsSenderRate": "24",
  "FIntInterpolationAwareTargetTimeLerpHundredth": "60",
  "FIntInterpolationMaxDelayMSec": "100",
  "DFIntTargetTimeDelayFacctorTenths": "9"
}`;
    } else {
        output.textContent = `${category.toUpperCase()} FFlags\n\n(Text will be added later)`;
    }
}

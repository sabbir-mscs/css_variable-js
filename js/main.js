const inputs = document.querySelectorAll(".controls input");

document.querySelector('.body-bg').addEventListener('change', function(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  console.log(this.name);
})
document.querySelector('.body-bg').addEventListener('mousemove', function(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  console.log(this.name);
})

function handleUpdate() {
  // console.log(this.value);
  // console.log(this.dataset);
  const suffix = this.dataset.sizing || "";
  // console.log(suffix);
  // console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((inputs) => inputs.addEventListener("change", handleUpdate));
inputs.forEach((inputs) => inputs.addEventListener("mousemove", handleUpdate));

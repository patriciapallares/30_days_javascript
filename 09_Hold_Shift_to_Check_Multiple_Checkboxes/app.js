const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  // and check that they are checking it

  // variable to check if the checkbox is inBetween the two selected options
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // go ahed and do
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('starting to check');
      }

      if (inBetween){
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);

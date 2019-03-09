// Blox.JS:
// Every block needs its specified class and its unique id. Any id will work

// ===================================================================================
// TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES -
// ===================================================================================
function loadTemplates(blockType, templateFill) {
  if (blockType === "single") {
    var template =
      "<div class=\"singleContent\">" +
        "<div class=\"wsContainer\">" +
          templateFill
        "</div>" +
      "</div>";
  }

  return template
}

function throwError(errorCode) {
  switch (errorCode) {
    case 001:
      throw new Error("Blox.JS: The element \"" + element + "\"is required to have an Id.")
      break;
  }
}
// ===================================================================================
// MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN -
// ===================================================================================

function drawBlock(blockType, contents) {
  // If the block type is a single one:
  if (blockType === "single") {
    var blockDiv;

    blockDiv = document.createElement("div");
    blockDiv.setAttribute('class', "blok");
    document.body.appendChild(blockDiv);
    blockDiv.innerHTML = contents;
  }

}

// This function checks if a single block is wanted.
function checkSingle() {
  // Check every element if it has the class as 'blockSingle'...
  var blockSingleElements = document.getElementsByClassName("blockSingle");
  // For each block with 'blockSingle',
  // obtain its innerHTML and project it onto the 'block single' template
  // obtain its id to remove it.
  for (var i = 0; i < blockSingleElements.length; i++) {
    // 'element' is the current element.
    element = blockSingleElements[i];

    // get the elements id
    var elementId = element.id
    // If the element doesn't have an id, then throw an error.
    if (elementId == "") {
      throwError(001);
      break;
    }

    // Get the contains of the element:
    innerElement = element.innerHTML;
    // console.log(innerElement);
    // Draw the new template with the contains of the element.
    drawBlock("single", loadTemplates("single", innerElement));

    // remove the old element (by id, not by class name).
    document.getElementById(elementId).remove();


    // Now, we want to check if there's an image that has the 'background' id.
    // if it has that certain id, then we will set the style
    var parentDiv = element;
    var hasChild = parentDiv.querySelector("#background") != null;
    // hasChild returns 'true' if there's a child present with the background id.
    // If hasChild is true, then check which element has the background id.
    if (hasChild) {
      var possibleChild = document.getElementById("background");
      // If the possible child div is in the parent, then set the style of the image.
      if (parentDiv.contains(possibleChild)) {
        var image = possibleChild;
        console.log(image);
      }
    }
  }
}

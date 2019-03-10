// Blox.JS:
// Every block needs its specified class and its unique id. Any id will work

// ===================================================================================
// TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES -
// ===================================================================================
function loadTemplates(blockType, templateFill, givenElId, imgUrl) {
  if (blockType === "single") {

    var template =
      "<div class=\"singleContent\" id=\"" + givenElId + "\">" +
        "<div class=\"wsContainer\">" +
          templateFill +
        "</div>" +
      "</div>";

  } else if (blockType === "singleWallpaper") {

    var template =
      "<div class=\"singleContent\" id=\"" + givenElId + "\" style=\"background-image: url('" + imgUrl + "'); background-size: cover;\">" +
        "<div class=\"wsContainer\">" +
          templateFill +
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
// ===================================================================================
// MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN - MAIN -
// ===================================================================================
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

// =========================================================================================
// CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE -
// =========================================================================================

// This function checks if a single block is wanted.
function checkSingle() {
  // Check every element if it has the class as 'blockSingle'...
  var blockSingleElements = document.getElementsByClassName("blockSingle");
  // For each block with 'blockSingle',
  // obtain its innerHTML and project it onto the 'block single' template
  // obtain its id to remove it.
  // We want to count down instead of to count up, to avoid element shuffling around :D
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
    // Also set the new drawn block to have an id, so that we can find it latrer.
    var drawBackground = false;


    // remove the old element (by id, not by class name).
    document.getElementById(elementId).remove();

    // ==============================================================================
    // BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND -

    // Now, we want to check if there's an image that has the 'background' id.
    // if it has that certain id, then we will set the style
    var parentDiv = element;
    var hasChild = parentDiv.querySelector("#background") != null;

    // hasChild returns 'true' if there's a child present with the background id.
    // If hasChild is true, then check which element has the background id.
    var imageUrl

    if (hasChild) {
      var backgroundImage = parentDiv.querySelector("#background");
      // console.log(backgroundImage);

      // Now that we have found the image, we want to get its Url.
      imageUrl = backgroundImage.src;
      // console.log(imageUrl);

      // We set drawbackground to true, and just fill in the template with an extra image in it.
      drawBackground = true;
    }

    console.log(drawBackground);
    switch (drawBackground) {
      case true:
        drawBlock("single", loadTemplates("singleWallpaper", innerElement, elementId, imageUrl));

        // Now we remove the old image
        var singleContent = document.getElementById("BS1")
        var image = singleContent.querySelector("#background")
        image.remove();

        break;
      case false:
        drawBlock("single", loadTemplates("single", innerElement, elementId));
        break;

    }

  }
}

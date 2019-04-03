// Blox.JS:
// Every block needs its specified class and its unique id. Any id will work

// ===================================================================================
// TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES - TEMPLATES -
// ===================================================================================
function loadTemplates(blockType, templateFill, givenElId, imgUrl) {
  switch (blockType) {
    case "single":
    var template =
      "<div class=\"singleContent\" id=\"" + givenElId + "\">" +
        "<div class=\"wsContainer\">" +
          templateFill +
        "</div>" +
      "</div>";
      break;

    case "singleWallpaper":
    var template =
      "<div class=\"singleContent\" id=\"" + givenElId + "\" style=\"background-image: url('" + imgUrl + "'); background-size: cover;\">" +
        "<div class=\"wsContainer\">" +
          templateFill +
        "</div>" +
      "</div>";
      break;

    case "doubleWallpaper":
    var template =
    "<div class=\"doubleContent\" id=\"" + givenElId + "\" style=\"background-image: url('" + imgUrl + "'); background-size: cover;\">" +
      "<div class=\"wsContainer\">" +
        templateFill +
      "</div>" +
    "</div>";
    break;
  }

  return template
}

function throwError(errorCode, info) {
  switch (errorCode) {
    case 001:
      throw new Error("Blox.JS: The element \"" + info + "\"is required to have an Id.")
      break;

    case 002:
      throw new Error("Blox.JS: Your double element is required to have a background element in it.");
      break;

    case 003:
      throw new Error("I don't know how I got there, but something went wrong.");
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
  var blockDiv;

  switch (blockType) {
    case "single":
      blockDiv = document.createElement("div");
      blockDiv.setAttribute('class', "blok");
      document.body.appendChild(blockDiv);
      blockDiv.innerHTML = contents;
      break;

    case "double":
      blockDiv = document.createElement("div");
      blockDiv.setAttribute('class', "blok")
      document.body.appendChild(blockDiv);
      blockDiv.innerHTML = contents;
      break;

  }
}

// =========================================================================================
// CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE - CHECK SINGLE -
// =========================================================================================

var elements = document.getElementsByTagName('div');

// This function checks if a single block is wanted.
function checkSingle(element) {
  // We already have the element, so now we need to check if it is a blocksingle.
  if (element.className == "blockSingle") {
    // 'element' is the current element.
    // Dont understand completely how it works... but it works ok!
    // element = blockSingleElements[0];

    // get the elements id
    var elementId = element.id
    // If the element doesn't have an id, then throw an error.
      if (elementId == "" || !elementId || elementId == null) {
        throwError(001, element);
        // break;
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

    // Now to test if our boolean drawBackground is equal to true or false.
    // Pretty self explanatory
    switch (drawBackground) {
      case true:
        drawBlock("single", loadTemplates("singleWallpaper", innerElement, elementId, imageUrl));

        // Now we remove the old image
        var singleContent = document.getElementById(elementId)
        var image = singleContent.querySelector("#background")
        image.remove();
        break;

      case false:
        drawBlock("single", loadTemplates("single", innerElement, elementId));
        break;
    }

  }
}



// =========================================================================================
// CHECK DOUBLE - CHECK DOUBLE - CHECK DOUBLE - CHECK DOUBLE - CHECK DOUBLE - CHECK DOUBLE -
// =========================================================================================

function checkDouble(element) {
  if (element.className == "blockDouble") {

    // element = blockDoubleElements[0];

    var elementId = element.id;

      if (elementId == "" || !elementId || elementId == null) {
        throwError(001, element);
        // break;
      }


    innerElement = element.innerHTML;
    console.log(innerElement);

    // Drawbackground is set to true, because this block can only have an image
    // as a background. Nothing else will be allowed.

    var drawBackground = true;

    // remove the old element (by id, not by class name).
    document.getElementById(elementId).remove();

    // ==============================================================================
    // BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND - BACKGROUND -


    var parentDiv = element;
    var hasChild = parentDiv.querySelector("#background") != null;

    // If haschild is false, then we will throw an error. This block can't have
    // anything else but a background image.
    if (hasChild == false) {
      throwError(002);
      // break;
    }

    // We dont need to check if hasChild is true, because we already checked if false.
    var backgroundImage = parentDiv.querySelector("#background");

    var imageUrl = backgroundImage.src;


    switch (drawBackground) {
      case true:
        var contents = loadTemplates("doubleWallpaper", innerElement, elementId, imageUrl);
        drawBlock("double", contents);

        var doubleContent = document.getElementById(elementId);
        var image = doubleContent.querySelector("#background");
        image.remove();

        break;
      case false:
        // It shouldn't get here...
        throwError(003);
        break;
    }

  }
}


// For every element, check if it is a double or single:
for (var i = 0; i < elements.length; i++) {
  // console.log(elements[i]);
  // This is always a zero, because when the element is transformed,
  // then its first spot is lost and another element takes the zero.
  var currentEl = elements[0];
  checkSingle(currentEl);
  checkDouble(currentEl);
}

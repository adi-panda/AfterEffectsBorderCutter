(function (thisObj) {
  // Any code you write here will execute before the panel is built.

  buildUI(thisObj); // Calling the function to build the panel

  function buildUI(thisObj) {
    var windowName = "MangaPanel";

    var myPanel =
      thisObj instanceof Panel
        ? thisObj
        : new Window("window", windowName, undefined, {
            resizeable: true,
          });


    var mangaButton = myPanel.add("iconbutton", undefined, undefined, {
      name: "mangaButton",
      style: "toolbutton",
    });
    mangaButton.text = "mangaButton";
    mangaButton.onClick = function () {
      mangafy();
    };

    myPanel.onResizing = myPanel.onResize = function () {
      this.layout.resize();
    };
    if (myPanel instanceof Window) {
      myPanel.center();
      myPanel.show();
    } else {
      myPanel.layout.layout(true);
      myPanel.layout.resize();
    }
  }

  // Write your helper functions here

  function mangafy() {
    if (app.project.activeItem instanceof CompItem) {
      var comp = app.project.activeItem;
      var curr = comp.selectedLayers[0];
      var newLay = curr.duplicate();
      newLay.name = "mangaPanelDuplicate";
      newLay.moveAfter(curr);
      //set fill of current layer to black
      newLay.property("Contents").property(1).property("Contents").property("Fill 1").property("Opacity").setValue(100);
      newLay.property("Contents").property(1).property("Contents").property("Stroke 1").property("Opacity").setValue(0);
      newLay.blendingMode = BlendingMode.STENCIL_ALPHA;

    }
  }
})(this);

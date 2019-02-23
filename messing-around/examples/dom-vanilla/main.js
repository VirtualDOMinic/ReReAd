function randomlyUpdateBgPos() {
  var x = Math.floor(Math.random() * 10) * 10;
  var y = Math.floor(Math.random() * 10) * 10;
  return updateBgPos(x, y);
}

function updateBgPos(x, y) {
  if (arguments.length < 2) {
    return randomlyUpdateBgPos();
  }
  document.body.style.backgroundPosition = `${x}% ${y}%`;
  console.log(document.body.style.backgroundPosition);
}

const listenersToAdd = {
  "new-reflection": () => {
    updateBgPos(0, 100);
  },
  "settings-btn": () => {
    updateBgPos(100, 0);
  },
  title: () => {
    updateBgPos(0, 0);
  }
};

function addFunctions(id, fn, evt = "click") {
  return document.getElementById(id).addEventListener(evt, fn);
}

Object.keys(listenersToAdd).forEach(x => {
  console.log(`adding func ${listenersToAdd[x]} to ${x}`);
  addFunctions(x, listenersToAdd[x]);
});

// document.body.style.backgroundPosition.match(/([0-9]+)%/g).map(x => x.replace("%", ""))

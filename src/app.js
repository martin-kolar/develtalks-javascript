// pollyfils
import 'core-js/fn/object/assign';
import closestPolyfill from './functions/polyfills/closest';

//  ready
import ready from './functions/ready';

// modules
import firstScript from './scripts/firstScript';
import secondScript from './scripts/secondScript';

// pollyfils init
closestPolyfill();

// vytvorime mapu koli dynamickemu spustaniu modulov
let modulesMap = {
  firstScript: firstScript,
  secondScript: secondScript,
};

// load modulu
let load = function(modules) {
  ready(() => {
    if (!Array.isArray(modules)) {
      modules = [modules];
    }

    modules.forEach((module) => {
      if (typeof module == 'string') {
        modulesMap[module]({});
      } else {
        modulesMap[module.name](module.options);
      }
    });
  });
};

window.load = load;

// riesi docasny load nahrdeny asynchronne za full load
if (window.preload) {
  window.preload.forEach((args) => {
    load.apply(null, args);
  });
  delete window.preload;
}

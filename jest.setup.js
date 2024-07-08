// jest.setup.js
global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
global.clearImmediate = (id) => clearTimeout(id);
import "@testing-library/jest-dom/extend-expect";

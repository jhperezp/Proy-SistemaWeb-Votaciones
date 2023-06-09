import {
  __export
} from "./chunk-Y4AOG3KG.js";

// node_modules/sweetalert2/src/utils/utils.js
var consolePrefix = "SweetAlert2:";
var uniqueArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};
var capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var toArray = (nodeList) => Array.prototype.slice.call(nodeList);
var warn = (message) => {
  console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
};
var error = (message) => {
  console.error(`${consolePrefix} ${message}`);
};
var previousWarnOnceMessages = [];
var warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
var warnAboutDeprecation = (deprecatedParam, useInstead) => {
  warnOnce(
    `"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`
  );
};
var callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
var hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
var asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
var isPromise = (arg) => arg && Promise.resolve(arg) === arg;

// node_modules/sweetalert2/src/utils/params.js
var defaultParams = {
  title: "",
  titleText: "",
  text: "",
  html: "",
  footer: "",
  icon: void 0,
  iconColor: void 0,
  iconHtml: void 0,
  template: void 0,
  toast: false,
  showClass: {
    popup: "swal2-show",
    backdrop: "swal2-backdrop-show",
    icon: "swal2-icon-show"
  },
  hideClass: {
    popup: "swal2-hide",
    backdrop: "swal2-backdrop-hide",
    icon: "swal2-icon-hide"
  },
  customClass: {},
  target: "body",
  color: void 0,
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: void 0,
  preDeny: void 0,
  confirmButtonText: "OK",
  confirmButtonAriaLabel: "",
  confirmButtonColor: void 0,
  denyButtonText: "No",
  denyButtonAriaLabel: "",
  denyButtonColor: void 0,
  cancelButtonText: "Cancel",
  cancelButtonAriaLabel: "",
  cancelButtonColor: void 0,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: "&times;",
  closeButtonAriaLabel: "Close this dialog",
  loaderHtml: "",
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: void 0,
  imageWidth: void 0,
  imageHeight: void 0,
  imageAlt: "",
  timer: void 0,
  timerProgressBar: false,
  width: void 0,
  padding: void 0,
  background: void 0,
  input: void 0,
  inputPlaceholder: "",
  inputLabel: "",
  inputValue: "",
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: void 0,
  returnInputValueOnDeny: false,
  validationMessage: void 0,
  grow: false,
  position: "center",
  progressSteps: [],
  currentProgressStep: void 0,
  progressStepsDistance: void 0,
  willOpen: void 0,
  didOpen: void 0,
  didRender: void 0,
  willClose: void 0,
  didClose: void 0,
  didDestroy: void 0,
  scrollbarPadding: true
};
var updatableParams = [
  "allowEscapeKey",
  "allowOutsideClick",
  "background",
  "buttonsStyling",
  "cancelButtonAriaLabel",
  "cancelButtonColor",
  "cancelButtonText",
  "closeButtonAriaLabel",
  "closeButtonHtml",
  "color",
  "confirmButtonAriaLabel",
  "confirmButtonColor",
  "confirmButtonText",
  "currentProgressStep",
  "customClass",
  "denyButtonAriaLabel",
  "denyButtonColor",
  "denyButtonText",
  "didClose",
  "didDestroy",
  "footer",
  "hideClass",
  "html",
  "icon",
  "iconColor",
  "iconHtml",
  "imageAlt",
  "imageHeight",
  "imageUrl",
  "imageWidth",
  "preConfirm",
  "preDeny",
  "progressSteps",
  "returnFocus",
  "reverseButtons",
  "showCancelButton",
  "showCloseButton",
  "showConfirmButton",
  "showDenyButton",
  "text",
  "title",
  "titleText",
  "willClose"
];
var deprecatedParams = {};
var toastIncompatibleParams = [
  "allowOutsideClick",
  "allowEnterKey",
  "backdrop",
  "focusConfirm",
  "focusDeny",
  "focusCancel",
  "returnFocus",
  "heightAuto",
  "keydownListenerCapture"
];
var isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
var isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1;
};
var isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName];
};
var checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    warn(`Unknown parameter "${param}"`);
  }
};
var checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    warn(`The parameter "${param}" is incompatible with toasts`);
  }
};
var checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    warnAboutDeprecation(param, isDeprecatedParameter(param));
  }
};
var showWarningsForParams = (params) => {
  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }
  for (const param in params) {
    checkIfParamIsValid(param);
    if (params.toast) {
      checkIfToastParamIsValid(param);
    }
    checkIfParamIsDeprecated(param);
  }
};
var params_default = defaultParams;

// node_modules/sweetalert2/src/utils/classes.js
var swalPrefix = "swal2-";
var prefix = (items) => {
  const result = {};
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};
var swalClasses = prefix([
  "container",
  "shown",
  "height-auto",
  "iosfix",
  "popup",
  "modal",
  "no-backdrop",
  "no-transition",
  "toast",
  "toast-shown",
  "show",
  "hide",
  "close",
  "title",
  "html-container",
  "actions",
  "confirm",
  "deny",
  "cancel",
  "default-outline",
  "footer",
  "icon",
  "icon-content",
  "image",
  "input",
  "file",
  "range",
  "select",
  "radio",
  "checkbox",
  "label",
  "textarea",
  "inputerror",
  "input-label",
  "validation-message",
  "progress-steps",
  "active-progress-step",
  "progress-step",
  "progress-step-line",
  "loader",
  "loading",
  "styled",
  "top",
  "top-start",
  "top-end",
  "top-left",
  "top-right",
  "center",
  "center-start",
  "center-end",
  "center-left",
  "center-right",
  "bottom",
  "bottom-start",
  "bottom-end",
  "bottom-left",
  "bottom-right",
  "grow-row",
  "grow-column",
  "grow-fullscreen",
  "rtl",
  "timer-progress-bar",
  "timer-progress-bar-container",
  "scrollbar-measure",
  "icon-success",
  "icon-warning",
  "icon-info",
  "icon-question",
  "icon-error"
]);
var iconTypes = prefix(["success", "warning", "info", "question", "error"]);

// node_modules/sweetalert2/src/utils/dom/getters.js
var getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
var elementBySelector = (selectorString) => {
  const container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};
var elementByClass = (className) => {
  return elementBySelector(`.${className}`);
};
var getPopup = () => elementByClass(swalClasses.popup);
var getIcon = () => elementByClass(swalClasses.icon);
var getTitle = () => elementByClass(swalClasses.title);
var getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
var getImage = () => elementByClass(swalClasses.image);
var getProgressSteps = () => elementByClass(swalClasses["progress-steps"]);
var getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
var getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
var getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
var getInputLabel = () => elementByClass(swalClasses["input-label"]);
var getLoader = () => elementBySelector(`.${swalClasses.loader}`);
var getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
var getActions = () => elementByClass(swalClasses.actions);
var getFooter = () => elementByClass(swalClasses.footer);
var getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
var getCloseButton = () => elementByClass(swalClasses.close);
var focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
var getFocusableElements = () => {
  const focusableElementsWithTabindex = toArray(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  ).sort((a, b) => {
    const tabindexA = parseInt(a.getAttribute("tabindex"));
    const tabindexB = parseInt(b.getAttribute("tabindex"));
    if (tabindexA > tabindexB) {
      return 1;
    } else if (tabindexA < tabindexB) {
      return -1;
    }
    return 0;
  });
  const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(
    (el) => el.getAttribute("tabindex") !== "-1"
  );
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el) => isVisible(el));
};
var isModal = () => {
  return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
};
var isToast = () => {
  return getPopup() && hasClass(getPopup(), swalClasses.toast);
};
var isLoading = () => {
  return getPopup().hasAttribute("data-loading");
};

// node_modules/sweetalert2/src/utils/dom/domUtils.js
var states = {
  previousBodyPadding: null
};
var setInnerHtml = (elem, html) => {
  elem.textContent = "";
  if (html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, `text/html`);
    toArray(parsed.querySelector("head").childNodes).forEach((child) => {
      elem.appendChild(child);
    });
    toArray(parsed.querySelector("body").childNodes).forEach((child) => {
      elem.appendChild(child);
    });
  }
};
var hasClass = (elem, className) => {
  if (!className) {
    return false;
  }
  const classList = className.split(/\s+/);
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }
  return true;
};
var removeCustomClasses = (elem, params) => {
  toArray(elem.classList).forEach((className) => {
    if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
      elem.classList.remove(className);
    }
  });
};
var applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params);
  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
      return warn(
        `Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`
      );
    }
    addClass(elem, params.customClass[className]);
  }
};
var getInput = (popup, inputType) => {
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case "select":
    case "textarea":
    case "file":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputType]}`);
    case "checkbox":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
    case "radio":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
    case "range":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
    default:
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
  }
};
var focusInput = (input) => {
  input.focus();
  if (input.type !== "file") {
    const val = input.value;
    input.value = "";
    input.value = val;
  }
};
var toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === "string") {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach((className) => {
    if (Array.isArray(target)) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = (target, classList) => {
  toggleClass(target, classList, true);
};
var removeClass = (target, classList) => {
  toggleClass(target, classList, false);
};
var getDirectChildByClass = (elem, className) => {
  const childNodes = toArray(elem.childNodes);
  for (let i = 0; i < childNodes.length; i++) {
    if (hasClass(childNodes[i], className)) {
      return childNodes[i];
    }
  }
};
var applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value);
  }
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === "number" ? `${value}px` : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = (elem, display = "flex") => {
  elem.style.display = display;
};
var hide = (elem) => {
  elem.style.display = "none";
};
var setStyle = (parent, selector, property, value) => {
  const el = parent.querySelector(selector);
  if (el) {
    el.style[property] = value;
  }
};
var toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem);
};
var isVisible = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
var allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
var isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
var hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem);
  const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
  const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
  return animDuration > 0 || transDuration > 0;
};
var animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = getTimerProgressBar();
  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = "none";
      timerProgressBar.style.width = "100%";
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1e3}s linear`;
      timerProgressBar.style.width = "0%";
    }, 10);
  }
};
var stopTimerProgressBar = () => {
  const timerProgressBar = getTimerProgressBar();
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty("transition");
  timerProgressBar.style.width = "100%";
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
  timerProgressBar.style.removeProperty("transition");
  timerProgressBar.style.width = `${timerProgressBarPercent}%`;
};

// node_modules/sweetalert2/src/utils/isNodeEnv.js
var isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";

// node_modules/sweetalert2/src/constants.js
var RESTORE_FOCUS_TIMEOUT = 100;

// node_modules/sweetalert2/src/globalState.js
var globalState = {};
var globalState_default = globalState;
var focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
};
var restoreActiveElement = (returnFocus) => {
  return new Promise((resolve) => {
    if (!returnFocus) {
      return resolve();
    }
    const x = window.scrollX;
    const y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT);
    window.scrollTo(x, y);
  });
};

// node_modules/sweetalert2/src/utils/dom/init.js
var sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
var resetOldContainer = () => {
  const oldContainer = getContainer();
  if (!oldContainer) {
    return false;
  }
  oldContainer.remove();
  removeClass(
    [document.documentElement, document.body],
    [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]
  );
  return true;
};
var resetValidationMessage = () => {
  globalState_default.currentInstance.resetValidationMessage();
};
var addInputChangeListeners = () => {
  const popup = getPopup();
  const input = getDirectChildByClass(popup, swalClasses.input);
  const file = getDirectChildByClass(popup, swalClasses.file);
  const range = popup.querySelector(`.${swalClasses.range} input`);
  const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
  const select = getDirectChildByClass(popup, swalClasses.select);
  const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
  const textarea = getDirectChildByClass(popup, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;
  range.oninput = () => {
    resetValidationMessage();
    rangeOutput.value = range.value;
  };
  range.onchange = () => {
    resetValidationMessage();
    range.nextSibling.value = range.value;
  };
};
var getTarget = (target) => typeof target === "string" ? document.querySelector(target) : target;
var setupAccessibility = (params) => {
  const popup = getPopup();
  popup.setAttribute("role", params.toast ? "alert" : "dialog");
  popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
  if (!params.toast) {
    popup.setAttribute("aria-modal", "true");
  }
};
var setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === "rtl") {
    addClass(getContainer(), swalClasses.rtl);
  }
};
var init = (params) => {
  const oldContainerExisted = resetOldContainer();
  if (isNodeEnv()) {
    error("SweetAlert2 requires document to initialize");
    return;
  }
  const container = document.createElement("div");
  container.className = swalClasses.container;
  if (oldContainerExisted) {
    addClass(container, swalClasses["no-transition"]);
  }
  setInnerHtml(container, sweetHTML);
  const targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

// node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js
var parseHtmlToContainer = (param, target) => {
  if (param instanceof HTMLElement) {
    target.appendChild(param);
  } else if (typeof param === "object") {
    handleObject(param, target);
  } else if (param) {
    setInnerHtml(target, param);
  }
};
var handleObject = (param, target) => {
  if (param.jquery) {
    handleJqueryElem(target, param);
  } else {
    setInnerHtml(target, param.toString());
  }
};
var handleJqueryElem = (target, elem) => {
  target.textContent = "";
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

// node_modules/sweetalert2/src/utils/dom/animationEndEvent.js
var animationEndEvent = (() => {
  if (isNodeEnv()) {
    return false;
  }
  const testEl = document.createElement("div");
  const transEndEventNames = {
    WebkitAnimation: "webkitAnimationEnd",
    // Chrome, Safari and Opera
    animation: "animationend"
    // Standard syntax
  };
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") {
      return transEndEventNames[i];
    }
  }
  return false;
})();

// node_modules/sweetalert2/src/utils/dom/measureScrollbar.js
var measureScrollbar = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = swalClasses["scrollbar-measure"];
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js
var renderActions = (instance, params) => {
  const actions = getActions();
  const loader = getLoader();
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }
  applyCustomClass(actions, params, "actions");
  renderButtons(actions, loader, params);
  setInnerHtml(loader, params.loaderHtml);
  applyCustomClass(loader, params, "loader");
};
function renderButtons(actions, loader, params) {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  renderButton(confirmButton, "confirm", params);
  renderButton(denyButton, "deny", params);
  renderButton(cancelButton, "cancel", params);
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
  if (params.reverseButtons) {
    if (params.toast) {
      actions.insertBefore(cancelButton, confirmButton);
      actions.insertBefore(denyButton, confirmButton);
    } else {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    }
  }
}
function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
  }
  addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    addClass(confirmButton, swalClasses["default-outline"]);
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor;
    addClass(denyButton, swalClasses["default-outline"]);
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
    addClass(cancelButton, swalClasses["default-outline"]);
  }
}
function renderButton(button, buttonType, params) {
  toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
  setInnerHtml(button, params[`${buttonType}ButtonText`]);
  button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]);
  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, `${buttonType}Button`);
  addClass(button, params[`${buttonType}ButtonClass`]);
}

// node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js
function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === "string") {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
  }
}
function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}
function handleGrowParam(container, grow) {
  if (grow && typeof grow === "string") {
    const growClass = `grow-${grow}`;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}
var renderContainer = (instance, params) => {
  const container = getContainer();
  if (!container) {
    return;
  }
  handleBackdropParam(container, params.backdrop);
  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow);
  applyCustomClass(container, params, "container");
};

// node_modules/sweetalert2/src/privateProps.js
var privateProps_default = {
  awaitingPromise: /* @__PURE__ */ new WeakMap(),
  promise: /* @__PURE__ */ new WeakMap(),
  innerParams: /* @__PURE__ */ new WeakMap(),
  domCache: /* @__PURE__ */ new WeakMap()
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js
var inputTypes = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
var renderInput = (instance, params) => {
  const popup = getPopup();
  const innerParams = privateProps_default.innerParams.get(instance);
  const rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach((inputType) => {
    const inputClass = swalClasses[inputType];
    const inputContainer = getDirectChildByClass(popup, inputClass);
    setAttributes(inputType, params.inputAttributes);
    inputContainer.className = inputClass;
    if (rerender) {
      hide(inputContainer);
    }
  });
  if (params.input) {
    if (rerender) {
      showInput(params);
    }
    setCustomClass(params);
  }
};
var showInput = (params) => {
  if (!renderInputType[params.input]) {
    return error(
      `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`
    );
  }
  const inputContainer = getInputContainer(params.input);
  const input = renderInputType[params.input](inputContainer, params);
  show(input);
  setTimeout(() => {
    focusInput(input);
  });
};
var removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name;
    if (!["type", "value", "style"].includes(attrName)) {
      input.removeAttribute(attrName);
    }
  }
};
var setAttributes = (inputType, inputAttributes) => {
  const input = getInput(getPopup(), inputType);
  if (!input) {
    return;
  }
  removeAttributes(input);
  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr]);
  }
};
var setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input);
  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};
var setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};
var setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    input.id = swalClasses.input;
    const label = document.createElement("label");
    const labelClass = swalClasses["input-label"];
    label.setAttribute("for", input.id);
    label.className = labelClass;
    addClass(label, params.customClass.inputLabel);
    label.innerText = params.inputLabel;
    prependTo.insertAdjacentElement("beforebegin", label);
  }
};
var getInputContainer = (inputType) => {
  const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getDirectChildByClass(getPopup(), inputClass);
};
var renderInputType = {};
renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
  if (typeof params.inputValue === "string" || typeof params.inputValue === "number") {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn(
      `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`
    );
  }
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};
renderInputType.file = (input, params) => {
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  return input;
};
renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector("input");
  const rangeOutput = range.querySelector("output");
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  setInputLabel(rangeInput, range, params);
  return range;
};
renderInputType.select = (select, params) => {
  select.textContent = "";
  if (params.inputPlaceholder) {
    const placeholder = document.createElement("option");
    setInnerHtml(placeholder, params.inputPlaceholder);
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }
  setInputLabel(select, select, params);
  return select;
};
renderInputType.radio = (radio) => {
  radio.textContent = "";
  return radio;
};
renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = getInput(getPopup(), "checkbox");
  checkbox.value = "1";
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  const label = checkboxContainer.querySelector("span");
  setInnerHtml(label, params.inputPlaceholder);
  return checkboxContainer;
};
renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);
  setInputLabel(textarea, textarea, params);
  const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
  setTimeout(() => {
    if ("MutationObserver" in window) {
      const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      const textareaResizeHandler = () => {
        const textareaWidth = textarea.offsetWidth + getMargin(textarea);
        if (textareaWidth > initialPopupWidth) {
          getPopup().style.width = `${textareaWidth}px`;
        } else {
          getPopup().style.width = null;
        }
      };
      new MutationObserver(textareaResizeHandler).observe(textarea, {
        attributes: true,
        attributeFilter: ["style"]
      });
    }
  });
  return textarea;
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js
var renderContent = (instance, params) => {
  const htmlContainer = getHtmlContainer();
  applyCustomClass(htmlContainer, params, "htmlContainer");
  if (params.html) {
    parseHtmlToContainer(params.html, htmlContainer);
    show(htmlContainer, "block");
  } else if (params.text) {
    htmlContainer.textContent = params.text;
    show(htmlContainer, "block");
  } else {
    hide(htmlContainer);
  }
  renderInput(instance, params);
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js
var renderFooter = (instance, params) => {
  const footer = getFooter();
  toggle(footer, params.footer);
  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  }
  applyCustomClass(footer, params, "footer");
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js
var renderCloseButton = (instance, params) => {
  const closeButton = getCloseButton();
  setInnerHtml(closeButton, params.closeButtonHtml);
  applyCustomClass(closeButton, params, "closeButton");
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js
var renderIcon = (instance, params) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  const icon = getIcon();
  if (innerParams && params.icon === innerParams.icon) {
    setContent(icon, params);
    applyStyles(icon, params);
    return;
  }
  if (!params.icon && !params.iconHtml) {
    return hide(icon);
  }
  if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
    error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
    return hide(icon);
  }
  show(icon);
  setContent(icon, params);
  applyStyles(icon, params);
  addClass(icon, params.showClass.icon);
};
var applyStyles = (icon, params) => {
  for (const iconType in iconTypes) {
    if (params.icon !== iconType) {
      removeClass(icon, iconTypes[iconType]);
    }
  }
  addClass(icon, iconTypes[params.icon]);
  setColor(icon, params);
  adjustSuccessIconBackgroundColor();
  applyCustomClass(icon, params, "icon");
};
var adjustSuccessIconBackgroundColor = () => {
  const popup = getPopup();
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
  const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};
var successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
var errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
var setContent = (icon, params) => {
  icon.textContent = "";
  if (params.iconHtml) {
    setInnerHtml(icon, iconContent(params.iconHtml));
  } else if (params.icon === "success") {
    setInnerHtml(icon, successIconHtml);
  } else if (params.icon === "error") {
    setInnerHtml(icon, errorIconHtml);
  } else {
    const defaultIconHtml = {
      question: "?",
      warning: "!",
      info: "i"
    };
    setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
  }
};
var setColor = (icon, params) => {
  if (!params.iconColor) {
    return;
  }
  icon.style.color = params.iconColor;
  icon.style.borderColor = params.iconColor;
  for (const sel of [
    ".swal2-success-line-tip",
    ".swal2-success-line-long",
    ".swal2-x-mark-line-left",
    ".swal2-x-mark-line-right"
  ]) {
    setStyle(icon, sel, "backgroundColor", params.iconColor);
  }
  setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
};
var iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;

// node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js
var renderImage = (instance, params) => {
  const image = getImage();
  if (!params.imageUrl) {
    return hide(image);
  }
  show(image, "");
  image.setAttribute("src", params.imageUrl);
  image.setAttribute("alt", params.imageAlt);
  applyNumericalStyle(image, "width", params.imageWidth);
  applyNumericalStyle(image, "height", params.imageHeight);
  image.className = swalClasses.image;
  applyCustomClass(image, params, "image");
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js
var createStepElement = (step) => {
  const stepEl = document.createElement("li");
  addClass(stepEl, swalClasses["progress-step"]);
  setInnerHtml(stepEl, step);
  return stepEl;
};
var createLineElement = (params) => {
  const lineEl = document.createElement("li");
  addClass(lineEl, swalClasses["progress-step-line"]);
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }
  return lineEl;
};
var renderProgressSteps = (instance, params) => {
  const progressStepsContainer = getProgressSteps();
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }
  show(progressStepsContainer);
  progressStepsContainer.textContent = "";
  if (params.currentProgressStep >= params.progressSteps.length) {
    warn(
      "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
    );
  }
  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);
    if (index === params.currentProgressStep) {
      addClass(stepEl, swalClasses["active-progress-step"]);
    }
    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(params);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js
var renderTitle = (instance, params) => {
  const title = getTitle();
  toggle(title, params.title || params.titleText, "block");
  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }
  if (params.titleText) {
    title.innerText = params.titleText;
  }
  applyCustomClass(title, params, "title");
};

// node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js
var renderPopup = (instance, params) => {
  const container = getContainer();
  const popup = getPopup();
  if (params.toast) {
    applyNumericalStyle(container, "width", params.width);
    popup.style.width = "100%";
    popup.insertBefore(getLoader(), getIcon());
  } else {
    applyNumericalStyle(popup, "width", params.width);
  }
  applyNumericalStyle(popup, "padding", params.padding);
  if (params.color) {
    popup.style.color = params.color;
  }
  if (params.background) {
    popup.style.background = params.background;
  }
  hide(getValidationMessage());
  addClasses(popup, params);
};
var addClasses = (popup, params) => {
  popup.className = `${swalClasses.popup} ${isVisible(popup) ? params.showClass.popup : ""}`;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }
  applyCustomClass(popup, params, "popup");
  if (typeof params.customClass === "string") {
    addClass(popup, params.customClass);
  }
  if (params.icon) {
    addClass(popup, swalClasses[`icon-${params.icon}`]);
  }
};

// node_modules/sweetalert2/src/utils/dom/renderers/render.js
var render = (instance, params) => {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderProgressSteps(instance, params);
  renderIcon(instance, params);
  renderImage(instance, params);
  renderTitle(instance, params);
  renderCloseButton(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);
  if (typeof params.didRender === "function") {
    params.didRender(getPopup());
  }
};

// node_modules/sweetalert2/src/utils/DismissReason.js
var DismissReason = Object.freeze({
  cancel: "cancel",
  backdrop: "backdrop",
  close: "close",
  esc: "esc",
  timer: "timer"
});

// node_modules/sweetalert2/src/utils/aria.js
var setAriaHidden = () => {
  const bodyChildren = toArray(document.body.children);
  bodyChildren.forEach((el) => {
    if (el === getContainer() || el.contains(getContainer())) {
      return;
    }
    if (el.hasAttribute("aria-hidden")) {
      el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden"));
    }
    el.setAttribute("aria-hidden", "true");
  });
};
var unsetAriaHidden = () => {
  const bodyChildren = toArray(document.body.children);
  bodyChildren.forEach((el) => {
    if (el.hasAttribute("data-previous-aria-hidden")) {
      el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden"));
      el.removeAttribute("data-previous-aria-hidden");
    } else {
      el.removeAttribute("aria-hidden");
    }
  });
};

// node_modules/sweetalert2/src/utils/getTemplateParams.js
var swalStringParams = ["swal-title", "swal-html", "swal-footer"];
var getTemplateParams = (params) => {
  const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
  if (!template) {
    return {};
  }
  const templateContent = template.content;
  showWarningsForElements(templateContent);
  const result = Object.assign(
    getSwalParams(templateContent),
    getSwalButtons(templateContent),
    getSwalImage(templateContent),
    getSwalIcon(templateContent),
    getSwalInput(templateContent),
    getSwalStringParams(templateContent, swalStringParams)
  );
  return result;
};
var getSwalParams = (templateContent) => {
  const result = {};
  toArray(templateContent.querySelectorAll("swal-param")).forEach((param) => {
    showWarningsForAttributes(param, ["name", "value"]);
    const paramName = param.getAttribute("name");
    const value = param.getAttribute("value");
    if (typeof params_default[paramName] === "boolean" && value === "false") {
      result[paramName] = false;
    }
    if (typeof params_default[paramName] === "object") {
      result[paramName] = JSON.parse(value);
    }
  });
  return result;
};
var getSwalButtons = (templateContent) => {
  const result = {};
  toArray(templateContent.querySelectorAll("swal-button")).forEach((button) => {
    showWarningsForAttributes(button, ["type", "color", "aria-label"]);
    const type = button.getAttribute("type");
    result[`${type}ButtonText`] = button.innerHTML;
    result[`show${capitalizeFirstLetter(type)}Button`] = true;
    if (button.hasAttribute("color")) {
      result[`${type}ButtonColor`] = button.getAttribute("color");
    }
    if (button.hasAttribute("aria-label")) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
    }
  });
  return result;
};
var getSwalImage = (templateContent) => {
  const result = {};
  const image = templateContent.querySelector("swal-image");
  if (image) {
    showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
    if (image.hasAttribute("src")) {
      result.imageUrl = image.getAttribute("src");
    }
    if (image.hasAttribute("width")) {
      result.imageWidth = image.getAttribute("width");
    }
    if (image.hasAttribute("height")) {
      result.imageHeight = image.getAttribute("height");
    }
    if (image.hasAttribute("alt")) {
      result.imageAlt = image.getAttribute("alt");
    }
  }
  return result;
};
var getSwalIcon = (templateContent) => {
  const result = {};
  const icon = templateContent.querySelector("swal-icon");
  if (icon) {
    showWarningsForAttributes(icon, ["type", "color"]);
    if (icon.hasAttribute("type")) {
      result.icon = icon.getAttribute("type");
    }
    if (icon.hasAttribute("color")) {
      result.iconColor = icon.getAttribute("color");
    }
    result.iconHtml = icon.innerHTML;
  }
  return result;
};
var getSwalInput = (templateContent) => {
  const result = {};
  const input = templateContent.querySelector("swal-input");
  if (input) {
    showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
    result.input = input.getAttribute("type") || "text";
    if (input.hasAttribute("label")) {
      result.inputLabel = input.getAttribute("label");
    }
    if (input.hasAttribute("placeholder")) {
      result.inputPlaceholder = input.getAttribute("placeholder");
    }
    if (input.hasAttribute("value")) {
      result.inputValue = input.getAttribute("value");
    }
  }
  const inputOptions = templateContent.querySelectorAll("swal-input-option");
  if (inputOptions.length) {
    result.inputOptions = {};
    toArray(inputOptions).forEach((option) => {
      showWarningsForAttributes(option, ["value"]);
      const optionValue = option.getAttribute("value");
      const optionName = option.innerHTML;
      result.inputOptions[optionValue] = optionName;
    });
  }
  return result;
};
var getSwalStringParams = (templateContent, paramNames) => {
  const result = {};
  for (const i in paramNames) {
    const paramName = paramNames[i];
    const tag = templateContent.querySelector(paramName);
    if (tag) {
      showWarningsForAttributes(tag, []);
      result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
    }
  }
  return result;
};
var showWarningsForElements = (templateContent) => {
  const allowedElements = swalStringParams.concat([
    "swal-param",
    "swal-button",
    "swal-image",
    "swal-icon",
    "swal-input",
    "swal-input-option"
  ]);
  toArray(templateContent.children).forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    if (allowedElements.indexOf(tagName) === -1) {
      warn(`Unrecognized element <${tagName}>`);
    }
  });
};
var showWarningsForAttributes = (el, allowedAttributes) => {
  toArray(el.attributes).forEach((attribute) => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      warn([
        `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
        `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`
      ]);
    }
  });
};

// node_modules/sweetalert2/src/utils/defaultInputValidators.js
var defaultInputValidators_default = {
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
  },
  url: (string, validationMessage) => {
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
  }
};

// node_modules/sweetalert2/src/utils/setParameters.js
function setDefaultInputValidators(params) {
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators_default).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators_default[key];
      }
    });
  }
}
function validateCustomTargetElement(params) {
  if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = "body";
  }
}
function setParameters(params) {
  setDefaultInputValidators(params);
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn(
      "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
    );
  }
  validateCustomTargetElement(params);
  if (typeof params.title === "string") {
    params.title = params.title.split("\n").join("<br />");
  }
  init(params);
}

// node_modules/sweetalert2/src/utils/Timer.js
var Timer = class {
  constructor(callback, delay) {
    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.started = /* @__PURE__ */ new Date();
      this.id = setTimeout(this.callback, this.remaining);
    }
    return this.remaining;
  }
  stop() {
    if (this.running) {
      this.running = false;
      clearTimeout(this.id);
      this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
    }
    return this.remaining;
  }
  increase(n) {
    const running = this.running;
    if (running) {
      this.stop();
    }
    this.remaining += n;
    if (running) {
      this.start();
    }
    return this.remaining;
  }
  getTimerLeft() {
    if (this.running) {
      this.stop();
      this.start();
    }
    return this.remaining;
  }
  isRunning() {
    return this.running;
  }
};

// node_modules/sweetalert2/src/utils/scrollbarFix.js
var fixScrollbar = () => {
  if (states.previousBodyPadding !== null) {
    return;
  }
  if (document.body.scrollHeight > window.innerHeight) {
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
    document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
  }
};
var undoScrollbar = () => {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = `${states.previousBodyPadding}px`;
    states.previousBodyPadding = null;
  }
};

// node_modules/sweetalert2/src/utils/iosFix.js
var iOSfix = () => {
  const iOS = (
    // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
  );
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    const offset = document.body.scrollTop;
    document.body.style.top = `${offset * -1}px`;
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
    addBottomPaddingForTallPopups();
  }
};
var addBottomPaddingForTallPopups = () => {
  const ua = navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  if (iOSSafari) {
    const bottomPanelHeight = 44;
    if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
      getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
    }
  }
};
var lockBodyScroll = () => {
  const container = getContainer();
  let preventTouchMove;
  container.ontouchstart = (e) => {
    preventTouchMove = shouldPreventTouchMove(e);
  };
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
var shouldPreventTouchMove = (event) => {
  const target = event.target;
  const container = getContainer();
  if (isStylus(event) || isZoom(event)) {
    return false;
  }
  if (target === container) {
    return true;
  }
  if (!isScrollable(container) && target.tagName !== "INPUT" && // #1603
  target.tagName !== "TEXTAREA" && // #2266
  !(isScrollable(getHtmlContainer()) && // #1944
  getHtmlContainer().contains(target))) {
    return true;
  }
  return false;
};
var isStylus = (event) => {
  return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
};
var isZoom = (event) => {
  return event.touches && event.touches.length > 1;
};
var undoIOSfix = () => {
  if (hasClass(document.body, swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = "";
    document.body.scrollTop = offset * -1;
  }
};

// node_modules/sweetalert2/src/utils/openPopup.js
var SHOW_CLASS_TIMEOUT = 10;
var openPopup = (params) => {
  const container = getContainer();
  const popup = getPopup();
  if (typeof params.willOpen === "function") {
    params.willOpen(popup);
  }
  const bodyStyles = window.getComputedStyle(document.body);
  const initialBodyOverflow = bodyStyles.overflowY;
  addClasses2(container, popup, params);
  setTimeout(() => {
    setScrollingVisibility(container, popup);
  }, SHOW_CLASS_TIMEOUT);
  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
    setAriaHidden();
  }
  if (!isToast() && !globalState_default.previousActiveElement) {
    globalState_default.previousActiveElement = document.activeElement;
  }
  if (typeof params.didOpen === "function") {
    setTimeout(() => params.didOpen(popup));
  }
  removeClass(container, swalClasses["no-transition"]);
};
var swalOpenAnimationFinished = (event) => {
  const popup = getPopup();
  if (event.target !== popup) {
    return;
  }
  const container = getContainer();
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = "auto";
};
var setScrollingVisibility = (container, popup) => {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = "hidden";
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
  } else {
    container.style.overflowY = "auto";
  }
};
var fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  iOSfix();
  if (scrollbarPadding && initialBodyOverflow !== "hidden") {
    fixScrollbar();
  }
  setTimeout(() => {
    container.scrollTop = 0;
  });
};
var addClasses2 = (container, popup, params) => {
  addClass(container, params.showClass.backdrop);
  popup.style.setProperty("opacity", "0", "important");
  show(popup, "grid");
  setTimeout(() => {
    addClass(popup, params.showClass.popup);
    popup.style.removeProperty("opacity");
  }, SHOW_CLASS_TIMEOUT);
  addClass([document.documentElement, document.body], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses["height-auto"]);
  }
};

// node_modules/sweetalert2/src/staticMethods/showLoading.js
var showLoading = (buttonToReplace) => {
  let popup = getPopup();
  if (!popup) {
    new sweetalert2_default();
  }
  popup = getPopup();
  const loader = getLoader();
  if (isToast()) {
    hide(getIcon());
  } else {
    replaceButton(popup, buttonToReplace);
  }
  show(loader);
  popup.setAttribute("data-loading", true);
  popup.setAttribute("aria-busy", true);
  popup.focus();
};
var replaceButton = (popup, buttonToReplace) => {
  const actions = getActions();
  const loader = getLoader();
  if (!buttonToReplace && isVisible(getConfirmButton())) {
    buttonToReplace = getConfirmButton();
  }
  show(actions);
  if (buttonToReplace) {
    hide(buttonToReplace);
    loader.setAttribute("data-button-to-replace", buttonToReplace.className);
  }
  loader.parentNode.insertBefore(loader, buttonToReplace);
  addClass([popup, actions], swalClasses.loading);
};

// node_modules/sweetalert2/src/utils/dom/inputUtils.js
var handleInputOptionsAndValue = (instance, params) => {
  if (params.input === "select" || params.input === "radio") {
    handleInputOptions(instance, params);
  } else if (["text", "email", "number", "tel", "textarea"].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
    showLoading(getConfirmButton());
    handleInputValue(instance, params);
  }
};
var getInputValue = (instance, innerParams) => {
  const input = instance.getInput();
  if (!input) {
    return null;
  }
  switch (innerParams.input) {
    case "checkbox":
      return getCheckboxValue(input);
    case "radio":
      return getRadioValue(input);
    case "file":
      return getFileValue(input);
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};
var getCheckboxValue = (input) => input.checked ? 1 : 0;
var getRadioValue = (input) => input.checked ? input.value : null;
var getFileValue = (input) => input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
var handleInputOptions = (instance, params) => {
  const popup = getPopup();
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
  if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
    showLoading(getConfirmButton());
    asPromise(params.inputOptions).then((inputOptions) => {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (typeof params.inputOptions === "object") {
    processInputOptions(params.inputOptions);
  } else {
    error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
  }
};
var handleInputValue = (instance, params) => {
  const input = instance.getInput();
  hide(input);
  asPromise(params.inputValue).then((inputValue) => {
    input.value = params.input === "number" ? parseFloat(inputValue) || 0 : `${inputValue}`;
    show(input);
    input.focus();
    instance.hideLoading();
  }).catch((err) => {
    error(`Error in inputValue promise: ${err}`);
    input.value = "";
    show(input);
    input.focus();
    instance.hideLoading();
  });
};
var populateInputOptions = {
  select: (popup, inputOptions, params) => {
    const select = getDirectChildByClass(popup, swalClasses.select);
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach((inputOption) => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      if (Array.isArray(optionLabel)) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = optionValue;
        optgroup.disabled = false;
        select.appendChild(optgroup);
        optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
      } else {
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  },
  radio: (popup, inputOptions, params) => {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    inputOptions.forEach((inputOption) => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement("input");
      const radioLabelElement = document.createElement("label");
      radioInput.type = "radio";
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement("span");
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll("input");
    if (radios.length) {
      radios[0].focus();
    }
  }
};
var formatInputOptions = (inputOptions) => {
  const result = [];
  if (typeof Map !== "undefined" && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value;
      if (typeof valueFormatted === "object") {
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  } else {
    Object.keys(inputOptions).forEach((key) => {
      let valueFormatted = inputOptions[key];
      if (typeof valueFormatted === "object") {
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  }
  return result;
};
var isSelected = (optionValue, inputValue) => {
  return inputValue && inputValue.toString() === optionValue.toString();
};

// node_modules/sweetalert2/src/instanceMethods.js
var instanceMethods_exports = {};
__export(instanceMethods_exports, {
  _destroy: () => _destroy,
  close: () => close,
  closeModal: () => close,
  closePopup: () => close,
  closeToast: () => close,
  disableButtons: () => disableButtons,
  disableInput: () => disableInput,
  disableLoading: () => hideLoading,
  enableButtons: () => enableButtons,
  enableInput: () => enableInput,
  getInput: () => getInput2,
  getProgressSteps: () => getProgressSteps2,
  handleAwaitingPromise: () => handleAwaitingPromise,
  hideLoading: () => hideLoading,
  isAwaitingPromise: () => isAwaitingPromise,
  rejectPromise: () => rejectPromise,
  resetValidationMessage: () => resetValidationMessage2,
  showValidationMessage: () => showValidationMessage,
  update: () => update
});

// node_modules/sweetalert2/src/instanceMethods/hideLoading.js
function hideLoading() {
  const innerParams = privateProps_default.innerParams.get(this);
  if (!innerParams) {
    return;
  }
  const domCache = privateProps_default.domCache.get(this);
  hide(domCache.loader);
  if (isToast()) {
    if (innerParams.icon) {
      show(getIcon());
    }
  } else {
    showRelatedButton(domCache);
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute("aria-busy");
  domCache.popup.removeAttribute("data-loading");
  domCache.confirmButton.disabled = false;
  domCache.denyButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
var showRelatedButton = (domCache) => {
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
  if (buttonToReplace.length) {
    show(buttonToReplace[0], "inline-block");
  } else if (allButtonsAreHidden()) {
    hide(domCache.actions);
  }
};

// node_modules/sweetalert2/src/instanceMethods/getInput.js
function getInput2(instance) {
  const innerParams = privateProps_default.innerParams.get(instance || this);
  const domCache = privateProps_default.domCache.get(instance || this);
  if (!domCache) {
    return null;
  }
  return getInput(domCache.popup, innerParams.input);
}

// node_modules/sweetalert2/src/privateMethods.js
var privateMethods_default = {
  swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
  swalPromiseReject: /* @__PURE__ */ new WeakMap()
};

// node_modules/sweetalert2/src/staticMethods/dom.js
var isVisible2 = () => {
  return isVisible(getPopup());
};
var clickConfirm = () => getConfirmButton() && getConfirmButton().click();
var clickDeny = () => getDenyButton() && getDenyButton().click();
var clickCancel = () => getCancelButton() && getCancelButton().click();

// node_modules/sweetalert2/src/keydown-handler.js
var removeKeydownHandler = (globalState2) => {
  if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
    globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
      capture: globalState2.keydownListenerCapture
    });
    globalState2.keydownHandlerAdded = false;
  }
};
var addKeydownHandler = (instance, globalState2, innerParams, dismissWith) => {
  removeKeydownHandler(globalState2);
  if (!innerParams.toast) {
    globalState2.keydownHandler = (e) => keydownHandler(instance, e, dismissWith);
    globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
      capture: globalState2.keydownListenerCapture
    });
    globalState2.keydownHandlerAdded = true;
  }
};
var setFocus = (innerParams, index, increment) => {
  const focusableElements = getFocusableElements();
  if (focusableElements.length) {
    index = index + increment;
    if (index === focusableElements.length) {
      index = 0;
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }
    return focusableElements[index].focus();
  }
  getPopup().focus();
};
var arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
var arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
var keydownHandler = (instance, e, dismissWith) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  if (!innerParams) {
    return;
  }
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  }
  if (e.key === "Enter") {
    handleEnter(instance, e, innerParams);
  } else if (e.key === "Tab") {
    handleTab(e, innerParams);
  } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
    handleArrows(e.key);
  } else if (e.key === "Escape") {
    handleEsc(e, innerParams, dismissWith);
  }
};
var handleEnter = (instance, e, innerParams) => {
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return;
  }
  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (["textarea", "file"].includes(innerParams.input)) {
      return;
    }
    clickConfirm();
    e.preventDefault();
  }
};
var handleTab = (e, innerParams) => {
  const targetElement = e.target;
  const focusableElements = getFocusableElements();
  let btnIndex = -1;
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }
  if (!e.shiftKey) {
    setFocus(innerParams, btnIndex, 1);
  } else {
    setFocus(innerParams, btnIndex, -1);
  }
  e.stopPropagation();
  e.preventDefault();
};
var handleArrows = (key) => {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
    return;
  }
  const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
  let buttonToFocus = document.activeElement;
  for (let i = 0; i < getActions().children.length; i++) {
    buttonToFocus = buttonToFocus[sibling];
    if (!buttonToFocus) {
      return;
    }
    if (isVisible(buttonToFocus) && buttonToFocus instanceof HTMLButtonElement) {
      break;
    }
  }
  if (buttonToFocus instanceof HTMLButtonElement) {
    buttonToFocus.focus();
  }
};
var handleEsc = (e, innerParams, dismissWith) => {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

// node_modules/sweetalert2/src/instanceMethods/close.js
function removePopupAndResetState(instance, container, returnFocus, didClose) {
  if (isToast()) {
    triggerDidCloseAndDispose(instance, didClose);
  } else {
    restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
    removeKeydownHandler(globalState_default);
  }
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    container.setAttribute("style", "display:none !important");
    container.removeAttribute("class");
    container.innerHTML = "";
  } else {
    container.remove();
  }
  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    unsetAriaHidden();
  }
  removeBodyClasses();
}
function removeBodyClasses() {
  removeClass(
    [document.documentElement, document.body],
    [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]
  );
}
function close(resolveValue) {
  resolveValue = prepareResolveValue(resolveValue);
  const swalPromiseResolve = privateMethods_default.swalPromiseResolve.get(this);
  const didClose = triggerClosePopup(this);
  if (this.isAwaitingPromise()) {
    if (!resolveValue.isDismissed) {
      handleAwaitingPromise(this);
      swalPromiseResolve(resolveValue);
    }
  } else if (didClose) {
    swalPromiseResolve(resolveValue);
  }
}
function isAwaitingPromise() {
  return !!privateProps_default.awaitingPromise.get(this);
}
var triggerClosePopup = (instance) => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  const innerParams = privateProps_default.innerParams.get(instance);
  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return false;
  }
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  const backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(instance, popup, innerParams);
  return true;
};
function rejectPromise(error2) {
  const rejectPromise2 = privateMethods_default.swalPromiseReject.get(this);
  handleAwaitingPromise(this);
  if (rejectPromise2) {
    rejectPromise2(error2);
  }
}
var handleAwaitingPromise = (instance) => {
  if (instance.isAwaitingPromise()) {
    privateProps_default.awaitingPromise.delete(instance);
    if (!privateProps_default.innerParams.get(instance)) {
      instance._destroy();
    }
  }
};
var prepareResolveValue = (resolveValue) => {
  if (typeof resolveValue === "undefined") {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    };
  }
  return Object.assign(
    {
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    },
    resolveValue
  );
};
var handlePopupAnimation = (instance, popup, innerParams) => {
  const container = getContainer();
  const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  if (typeof innerParams.willClose === "function") {
    innerParams.willClose(popup);
  }
  if (animationIsSupported) {
    animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
  } else {
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
  }
};
var animatePopup = (instance, popup, container, returnFocus, didClose) => {
  globalState_default.swalCloseEventFinishedCallback = removePopupAndResetState.bind(
    null,
    instance,
    container,
    returnFocus,
    didClose
  );
  popup.addEventListener(animationEndEvent, function(e) {
    if (e.target === popup) {
      globalState_default.swalCloseEventFinishedCallback();
      delete globalState_default.swalCloseEventFinishedCallback;
    }
  });
};
var triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    if (typeof didClose === "function") {
      didClose.bind(instance.params)();
    }
    instance._destroy();
  });
};

// node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js
function setButtonsDisabled(instance, buttons, disabled) {
  const domCache = privateProps_default.domCache.get(instance);
  buttons.forEach((button) => {
    domCache[button].disabled = disabled;
  });
}
function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }
  if (input.type === "radio") {
    const radiosContainer = input.parentNode.parentNode;
    const radios = radiosContainer.querySelectorAll("input");
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}
function enableButtons() {
  setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
}
function disableButtons() {
  setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

// node_modules/sweetalert2/src/instanceMethods/validation-message.js
function showValidationMessage(error2) {
  const domCache = privateProps_default.domCache.get(this);
  const params = privateProps_default.innerParams.get(this);
  setInnerHtml(domCache.validationMessage, error2);
  domCache.validationMessage.className = swalClasses["validation-message"];
  if (params.customClass && params.customClass.validationMessage) {
    addClass(domCache.validationMessage, params.customClass.validationMessage);
  }
  show(domCache.validationMessage);
  const input = this.getInput();
  if (input) {
    input.setAttribute("aria-invalid", true);
    input.setAttribute("aria-describedby", swalClasses["validation-message"]);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}
function resetValidationMessage2() {
  const domCache = privateProps_default.domCache.get(this);
  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }
  const input = this.getInput();
  if (input) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    removeClass(input, swalClasses.inputerror);
  }
}

// node_modules/sweetalert2/src/instanceMethods/progress-steps.js
function getProgressSteps2() {
  const domCache = privateProps_default.domCache.get(this);
  return domCache.progressSteps;
}

// node_modules/sweetalert2/src/instanceMethods/update.js
function update(params) {
  const popup = getPopup();
  const innerParams = privateProps_default.innerParams.get(this);
  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn(
      `You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`
    );
  }
  const validUpdatableParams = filterValidParams(params);
  const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
  render(this, updatedParams);
  privateProps_default.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}
var filterValidParams = (params) => {
  const validUpdatableParams = {};
  Object.keys(params).forEach((param) => {
    if (isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn(
        `Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`
      );
    }
  });
  return validUpdatableParams;
};

// node_modules/sweetalert2/src/instanceMethods/_destroy.js
function _destroy() {
  const domCache = privateProps_default.domCache.get(this);
  const innerParams = privateProps_default.innerParams.get(this);
  if (!innerParams) {
    disposeWeakMaps(this);
    return;
  }
  if (domCache.popup && globalState_default.swalCloseEventFinishedCallback) {
    globalState_default.swalCloseEventFinishedCallback();
    delete globalState_default.swalCloseEventFinishedCallback;
  }
  if (globalState_default.deferDisposalTimer) {
    clearTimeout(globalState_default.deferDisposalTimer);
    delete globalState_default.deferDisposalTimer;
  }
  if (typeof innerParams.didDestroy === "function") {
    innerParams.didDestroy();
  }
  disposeSwal(this);
}
var disposeSwal = (instance) => {
  disposeWeakMaps(instance);
  delete instance.params;
  delete globalState_default.keydownHandler;
  delete globalState_default.keydownTarget;
  delete globalState_default.currentInstance;
};
var disposeWeakMaps = (instance) => {
  if (instance.isAwaitingPromise()) {
    unsetWeakMaps(privateProps_default, instance);
    privateProps_default.awaitingPromise.set(instance, true);
  } else {
    unsetWeakMaps(privateMethods_default, instance);
    unsetWeakMaps(privateProps_default, instance);
  }
};
var unsetWeakMaps = (obj, instance) => {
  for (const i in obj) {
    obj[i].delete(instance);
  }
};

// node_modules/sweetalert2/src/buttons-handlers.js
var handleConfirmButtonClick = (instance) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, "confirm");
  } else {
    confirm(instance, true);
  }
};
var handleDenyButtonClick = (instance) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, "deny");
  } else {
    deny(instance, false);
  }
};
var handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};
var handleConfirmOrDenyWithInput = (instance, type) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  if (!innerParams.input) {
    return error(
      `The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`
    );
  }
  const inputValue = getInputValue(instance, innerParams);
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type);
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else if (type === "deny") {
    deny(instance, inputValue);
  } else {
    confirm(instance, inputValue);
  }
};
var handleInputValidator = (instance, inputValue, type) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  instance.disableInput();
  const validationPromise = Promise.resolve().then(
    () => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage))
  );
  validationPromise.then((validationMessage) => {
    instance.enableButtons();
    instance.enableInput();
    if (validationMessage) {
      instance.showValidationMessage(validationMessage);
    } else if (type === "deny") {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  });
};
var deny = (instance, value) => {
  const innerParams = privateProps_default.innerParams.get(instance || void 0);
  if (innerParams.showLoaderOnDeny) {
    showLoading(getDenyButton());
  }
  if (innerParams.preDeny) {
    privateProps_default.awaitingPromise.set(instance || void 0, true);
    const preDenyPromise = Promise.resolve().then(
      () => asPromise(innerParams.preDeny(value, innerParams.validationMessage))
    );
    preDenyPromise.then((preDenyValue) => {
      if (preDenyValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        instance.closePopup({ isDenied: true, value: typeof preDenyValue === "undefined" ? value : preDenyValue });
      }
    }).catch((error2) => rejectWith(instance || void 0, error2));
  } else {
    instance.closePopup({ isDenied: true, value });
  }
};
var succeedWith = (instance, value) => {
  instance.closePopup({ isConfirmed: true, value });
};
var rejectWith = (instance, error2) => {
  instance.rejectPromise(error2);
};
var confirm = (instance, value) => {
  const innerParams = privateProps_default.innerParams.get(instance || void 0);
  if (innerParams.showLoaderOnConfirm) {
    showLoading();
  }
  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    privateProps_default.awaitingPromise.set(instance || void 0, true);
    const preConfirmPromise = Promise.resolve().then(
      () => asPromise(innerParams.preConfirm(value, innerParams.validationMessage))
    );
    preConfirmPromise.then((preConfirmValue) => {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
      }
    }).catch((error2) => rejectWith(instance || void 0, error2));
  } else {
    succeedWith(instance, value);
  }
};

// node_modules/sweetalert2/src/popup-click-handler.js
var handlePopupClick = (instance, domCache, dismissWith) => {
  const innerParams = privateProps_default.innerParams.get(instance);
  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith);
  } else {
    handleModalMousedown(domCache);
    handleContainerMousedown(domCache);
    handleModalClick(instance, domCache, dismissWith);
  }
};
var handleToastClick = (instance, domCache, dismissWith) => {
  domCache.popup.onclick = () => {
    const innerParams = privateProps_default.innerParams.get(instance);
    if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
      return;
    }
    dismissWith(DismissReason.close);
  };
};
var isAnyButtonShown = (innerParams) => {
  return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
};
var ignoreOutsideClick = false;
var handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function(e) {
      domCache.container.onmouseup = void 0;
      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};
var handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function(e) {
      domCache.popup.onmouseup = void 0;
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};
var handleModalClick = (instance, domCache, dismissWith) => {
  domCache.container.onclick = (e) => {
    const innerParams = privateProps_default.innerParams.get(instance);
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }
    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

// node_modules/sweetalert2/src/staticMethods.js
var staticMethods_exports = {};
__export(staticMethods_exports, {
  argsToParams: () => argsToParams,
  bindClickHandler: () => bindClickHandler,
  clickCancel: () => clickCancel,
  clickConfirm: () => clickConfirm,
  clickDeny: () => clickDeny,
  enableLoading: () => showLoading,
  fire: () => fire,
  getActions: () => getActions,
  getCancelButton: () => getCancelButton,
  getCloseButton: () => getCloseButton,
  getConfirmButton: () => getConfirmButton,
  getContainer: () => getContainer,
  getDenyButton: () => getDenyButton,
  getFocusableElements: () => getFocusableElements,
  getFooter: () => getFooter,
  getHtmlContainer: () => getHtmlContainer,
  getIcon: () => getIcon,
  getImage: () => getImage,
  getInputLabel: () => getInputLabel,
  getLoader: () => getLoader,
  getPopup: () => getPopup,
  getTimerLeft: () => getTimerLeft,
  getTimerProgressBar: () => getTimerProgressBar,
  getTitle: () => getTitle,
  getValidationMessage: () => getValidationMessage,
  increaseTimer: () => increaseTimer,
  isDeprecatedParameter: () => isDeprecatedParameter,
  isLoading: () => isLoading,
  isTimerRunning: () => isTimerRunning,
  isUpdatableParameter: () => isUpdatableParameter,
  isValidParameter: () => isValidParameter,
  isVisible: () => isVisible2,
  mixin: () => mixin,
  resumeTimer: () => resumeTimer,
  showLoading: () => showLoading,
  stopTimer: () => stopTimer,
  toggleTimer: () => toggleTimer
});

// node_modules/sweetalert2/src/staticMethods/argsToParams.js
var isJqueryElement = (elem) => typeof elem === "object" && elem.jquery;
var isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
var argsToParams = (args) => {
  const params = {};
  if (typeof args[0] === "object" && !isElement(args[0])) {
    Object.assign(params, args[0]);
  } else {
    ;
    ["title", "html", "icon"].forEach((name, index) => {
      const arg = args[index];
      if (typeof arg === "string" || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== void 0) {
        error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
      }
    });
  }
  return params;
};

// node_modules/sweetalert2/src/staticMethods/fire.js
function fire(...args) {
  const Swal2 = this;
  return new Swal2(...args);
}

// node_modules/sweetalert2/src/staticMethods/mixin.js
function mixin(mixinParams) {
  class MixinSwal extends this {
    _main(params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
    }
  }
  return MixinSwal;
}

// node_modules/sweetalert2/src/staticMethods/timer.js
var getTimerLeft = () => {
  return globalState_default.timeout && globalState_default.timeout.getTimerLeft();
};
var stopTimer = () => {
  if (globalState_default.timeout) {
    stopTimerProgressBar();
    return globalState_default.timeout.stop();
  }
};
var resumeTimer = () => {
  if (globalState_default.timeout) {
    const remaining = globalState_default.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
var toggleTimer = () => {
  const timer = globalState_default.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
var increaseTimer = (n) => {
  if (globalState_default.timeout) {
    const remaining = globalState_default.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
var isTimerRunning = () => {
  return globalState_default.timeout && globalState_default.timeout.isRunning();
};

// node_modules/sweetalert2/src/staticMethods/bindClickHandler.js
var bodyClickListenerAdded = false;
var clickHandlers = {};
function bindClickHandler(attr = "data-swal-template") {
  clickHandlers[attr] = this;
  if (!bodyClickListenerAdded) {
    document.body.addEventListener("click", bodyClickListener);
    bodyClickListenerAdded = true;
  }
}
var bodyClickListener = (event) => {
  for (let el = event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute(attr);
      if (template) {
        clickHandlers[attr].fire({ template });
        return;
      }
    }
  }
};

// node_modules/sweetalert2/src/SweetAlert.js
var currentInstance;
var SweetAlert = class {
  constructor(...args) {
    if (typeof window === "undefined") {
      return;
    }
    currentInstance = this;
    const outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    });
    const promise = this._main(this.params);
    privateProps_default.promise.set(this, promise);
  }
  _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));
    if (globalState_default.currentInstance) {
      globalState_default.currentInstance._destroy();
      if (isModal()) {
        unsetAriaHidden();
      }
    }
    globalState_default.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams);
    if (globalState_default.timeout) {
      globalState_default.timeout.stop();
      delete globalState_default.timeout;
    }
    clearTimeout(globalState_default.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps_default.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }
  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  then(onFulfilled) {
    const promise = privateProps_default.promise.get(this);
    return promise.then(onFulfilled);
  }
  finally(onFinally) {
    const promise = privateProps_default.promise.get(this);
    return promise.finally(onFinally);
  }
};
var swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve, reject) => {
    const dismissWith = (dismiss) => {
      instance.closePopup({ isDismissed: true, dismiss });
    };
    privateMethods_default.swalPromiseResolve.set(instance, resolve);
    privateMethods_default.swalPromiseReject.set(instance, reject);
    domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);
    domCache.denyButton.onclick = () => handleDenyButtonClick(instance);
    domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);
    domCache.closeButton.onclick = () => dismissWith(DismissReason.close);
    handlePopupClick(instance, domCache, dismissWith);
    addKeydownHandler(instance, globalState_default, innerParams, dismissWith);
    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    setupTimer(globalState_default, innerParams, dismissWith);
    initFocus(domCache, innerParams);
    setTimeout(() => {
      domCache.container.scrollTop = 0;
    });
  });
};
var prepareParams = (userParams, mixinParams) => {
  const templateParams = getTemplateParams(userParams);
  const params = Object.assign({}, params_default, mixinParams, templateParams, userParams);
  params.showClass = Object.assign({}, params_default.showClass, params.showClass);
  params.hideClass = Object.assign({}, params_default.hideClass, params.hideClass);
  return params;
};
var populateDomCache = (instance) => {
  const domCache = {
    popup: getPopup(),
    container: getContainer(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    denyButton: getDenyButton(),
    cancelButton: getCancelButton(),
    loader: getLoader(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps_default.domCache.set(instance, domCache);
  return domCache;
};
var setupTimer = (globalState2, innerParams, dismissWith) => {
  const timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);
  if (innerParams.timer) {
    globalState2.timeout = new Timer(() => {
      dismissWith("timer");
      delete globalState2.timeout;
    }, innerParams.timer);
    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
      setTimeout(() => {
        if (globalState2.timeout && globalState2.timeout.running) {
          animateTimerProgressBar(innerParams.timer);
        }
      });
    }
  }
};
var initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return;
  }
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }
  if (!focusButton(domCache, innerParams)) {
    setFocus(innerParams, -1, 1);
  }
};
var focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
    domCache.denyButton.focus();
    return true;
  }
  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    domCache.cancelButton.focus();
    return true;
  }
  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    domCache.confirmButton.focus();
    return true;
  }
  return false;
};
var blurActiveElement = () => {
  if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }
};
Object.assign(SweetAlert.prototype, instanceMethods_exports);
Object.assign(SweetAlert, staticMethods_exports);
Object.keys(instanceMethods_exports).forEach((key) => {
  SweetAlert[key] = function(...args) {
    if (currentInstance) {
      return currentInstance[key](...args);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = "11.4.8";
var SweetAlert_default = SweetAlert;

// node_modules/sweetalert2/src/sweetalert2.js
var Swal = SweetAlert_default;
Swal.default = Swal;
var sweetalert2_default = Swal;
export {
  sweetalert2_default as default
};
//# sourceMappingURL=sweetalert2.js.map

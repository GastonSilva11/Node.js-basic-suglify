const slugify = require("slugify");
const text = "¡Quiero viajar a Bélgica & España!😎✌️";
const result = slugify(text, {
  replacement: "-", // replace spaces with replacement character, defaults to `-`
  lower: true, // convert to lower case, defaults to `false`
  strict: true, // strip special characters except replacement, defaults to `false`
  locale: "es", // language code of the locale to use
  trim: true, // trim leading and trailing replacement chars, defaults to `true`
});

console.log(result);

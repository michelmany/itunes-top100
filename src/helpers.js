const toTitleCase = str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const truncateWithEllipses = (text, max) => {
  return text.substr(0, max - 1) + (text.length > max ? "..." : "");
};

const getFullYear = date => {
  const d = new Date(date);
  return d.getFullYear();
};

export { toTitleCase, truncateWithEllipses, getFullYear };

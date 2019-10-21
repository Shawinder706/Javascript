function valueIsNaN(v) { return v !== v; }
valueIsNaN(2);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
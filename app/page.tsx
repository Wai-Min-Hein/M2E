"use client";
import React, { useState } from "react";

const Home = () => {
  const unicodeToTyped: Record<string, string> = {
    // ` row (lowercase and uppercase)
    ၐ: "`",
    "၁": "1",
    "၂": "2",
    "၃": "3",
    "၄": "4",
    "၅": "5",
    "၆": "6",
    "၇": "7",
    "၈": "8",
    "၉": "9",
    "၀": "0",
    "-": "-",
    "=": "=",

    ဎ: "~",
    ဍ: "!",
    ၒ: "@",
    ဋ: "#",
    ၓ: "$",
    ၔ: "%",
    ၕ: "^",
    ရ: "&",
    "*": "*",
    "(": "(",
    ")": ")",
    _: "_",
    "+": "+",

    // Q row (lowercase and uppercase)
    ဆ: "q",
    တ: "w",
    န: "e",
    မ: "r",
    အ: "t",
    ပ: "y",
    က: "u",
    င: "i",
    သ: "o",
    စ: "p",
    ဟ: "[",
    ဩ: "]",
    "၏": '"',

    ဈ: "Q",
    ဝ: "W",
    ဣ: "E",
    "၎": "R",
    ဤ: "T",
    "၌": "Y",
    ဥ: "U",
    "၍": "I",
    ဿ: "O",
    ဏ: "P",
    ဧ: "{",
    ဪ: "}",
    ၑ: "|",

    // A row (lowercase and uppercase)
    "‌‌ေ": "a",
    "ျ": "s",
    "ိ": "d",
    "်": "f",
    "ါ": "g",
    "့": "h",
    "ြ": "j",
    "ု": "k",
    "ူ": "l",
    "း": ";",
    "'": "'",

    ဗ: "A",
    "ှ": "S",
    "ီ": "D",
    "္": "F",
    "ွ": "G",
    "ံ": "H",
    "ဲ": "J",
    ဒ: "K",
    ဓ: "L",
    ဂ: ":",
    '"': '"',

    // Z row (lowercase and uppercase)
    ဖ: "z",
    ထ: "x",
    ခ: "c",
    လ: "v",
    ဘ: "b",
    ည: "n",
    "ာ": "m",
    ယ: ",",
    ".": ".",
    "/": "/",

    ဇ: "Z",
    ဌ: "X",
    ဃ: "C",
    ဠ: "V",
    // ယ: "B",
    ဉ: "N",
    ဦ: "M",
    "၊": "<",
    "။": ">",
    "?": "?",
  };

  const typedToUnicode: Record<string, string> = {
    // ` row (lowercase and uppercase)
    "`": "ၐ",
    "1": "၁",
    "2": "၂",
    "3": "၃",
    "4": "၄",
    "5": "၅",
    "6": "၆",
    "7": "၇",
    "8": "၈",
    "9": "၉",
    "0": "၀",
    "-": "-",
    "=": "=",

    "~": "ဎ",
    "!": "ဍ",
    "@": "ၒ",
    "#": "ဋ",
    $: "ၓ",
    "%": "ၔ",
    "^": "ၕ",
    "&": "ရ",
    "*": "*",
    "(": "(",
    ")": ")",
    _: "_",
    "+": "+",

    // Q row (lowercase and uppercase)
    q: "ဆ",
    w: "တ",
    e: "န",
    r: "မ",
    t: "အ",
    y: "ပ",
    u: "က",
    i: "င",
    o: "သ",
    p: "စ",
    "[": "ဟ",
    "]": "ဩ",
    "\\": "၏",

    Q: "ဈ",
    W: "ဝ",
    E: "ဣ",
    R: "၎",
    T: "ဤ",
    Y: "၌",
    U: "ဥ",
    I: "၍",
    O: "ဿ",
    P: "ဏ",
    "{": "ဧ",
    "}": "ဪ",
    "|": "ၑ",

    // A row (lowercase and uppercase)
    a: "‌ေ",
    s: "ျ",
    d: "ိ",
    f: "်",
    g: "ါ",
    h: "့",
    j: "ြ",
    k: "ု",
    l: "ူ",
    ";": "း",
    "'": "'",

    A: "ဗ",
    S: "ှ",
    D: "ီ",
    F: "္",
    G: "ွ",
    H: "ံ",
    J: "ဲ",
    K: "ဒ",
    L: "ဓ",
    ":": "ဂ",
    '"': '"',

    // Z row (lowercase and uppercase)
    z: "ဖ",
    x: "ထ",
    c: "ခ",
    v: "လ",
    b: "ဘ",
    n: "ည",
    m: "ာ",
    ",": "ယ",
    ".": ".",
    "/": "/",

    Z: "ဇ",
    X: "ဌ",
    C: "ဃ",
    V: "ဠ",
    // B: "ယ",
    N: "ဉ",
    M: "ဦ",
    "<": "၊",
    ">": "။",
    "?": "?",
  };

  const [input, setInput] = useState<string>("");
  const [changedType, setchangedType] = useState<string>("m2e");
  const [convertedValue, setConvertedValue] = useState<string>("");

  const handleClick = () => {
    const convertedArray = [];
    for (let i = 0; i < input.length; i++) {
      let key = input[i].normalize("NFC"); // Normalize the character

      key = key.replace(/\u200C/g, "");
      const keyUnicode = [...key]
        .map((c) => c.charCodeAt(0).toString(16))
        .join(" ");

      let convertedChar;

      if (changedType === "m2e") {
        convertedChar = keyUnicode == "1031" ? "a" : unicodeToTyped[key] ?? key; // Keep original if not found
      } else {
        convertedChar = typedToUnicode[key] ?? key; // Keep original if not found
      }

      convertedArray.push(convertedChar);
    }
    // convert to pyidaungsu
    let convertedString = convertedArray.join("");

    // Swap 'jX' → 'Xj' and 'sX' → 'Xs' (X is any character except space)
    convertedString = convertedString.replace(/(.)(j)/g, "$2$1"); // Swap 'j' with the front character
    convertedString = convertedString.replace(/(.)(s)/g, "$2$1"); // Swap 's' with the front character
    convertedString = convertedString.replace(/(.)(a)/g, "$2$1"); // Swap 'a' with the front character
    convertedString = convertedString.replace(/(ေ)([က-အ])/g, "$2$1");

    setConvertedValue(convertedString);
    // convert to pyidaungsu
  };


  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide after 2 sec
  };

  return (
    <main className="w-screen relative h-screen overflow-hidden flex flex-col ">
      <section className="flex-1">
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-1">
            <input
              type="radio"
              id="m2e"
              className="cursor-pointer"
              name="type"
              value={"m2e"}
              onChange={(e) => setchangedType(e.target.value)}
              defaultChecked
            />
            <label htmlFor="m2e" className="cursor-pointer">
              Myanmar To English
            </label>
          </div>
          <div className="flex items-center justify-center gap-1">
            <input
              type="radio"
              id="e2m"
              className="cursor-pointer"
              name="type"
              value={"e2m"}
              onChange={(e) => setchangedType(e.target.value)}
            />
            <label htmlFor="e2m" className="cursor-pointer">
              English To Myanmar
            </label>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center gap-3">
          <textarea
            name=""
            id=""
            rows={8}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-200 px-4 py-3 rounded-md w-4/5 md:w-2/3 lg:w-1/2"
          ></textarea>
          <button
            onClick={handleClick}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
        {convertedValue && (
          <div className="flex flex-col items-center justify-center gap-3 w-4/5 mx-auto">
            <p className="w-full text-center">
              <span className="select-none block text-center my-4">
                Converted Text :
              </span>{" "}
              <strong className="relative w-full block break-words">
                {convertedValue}
              </strong>{" "}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
              onClick={handleCopy}
            >
              {copied? 'Copied': 'Copy'}
            </button>
          </div>
        )}
      </section>
      <footer className="mb-8 text-center flex flex-col items-center justify-center gap-2 w-full">
        <p className="">
          DEVELOP BY: <strong>Wai Min Hein</strong>{" "}
        </p>
        <p className="">
          IDEA BY: <strong>ORRE</strong>{" "}
        </p>
      </footer>
    </main>
  );
};

export default Home;

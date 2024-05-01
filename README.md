# PurifySentence

PurifySentence is a lightweight npm package designed to filter out sensitive words from a given sentence. It provides a simple yet effective solution to sanitize text inputs, ensuring that sensitive or inappropriate language is removed before further processing or display.

## Installation

You can install PurifySentence via npm:

```bash
npm install purifysentence
```

## Usage

To use PurifySentence, simply import the `purifysentence` function and call it with the sentence you want to purify and an array of words to filter out.

```javascript
import { purifysentence } from "purifysentence";

const sentence = "I don't like bad words in my main sentences.";
const sensitiveWords = ["bad", "main"];

const purifiedSentence = purifysentence({ sentence, words: sensitiveWords });

console.log(purifiedSentence);
// Output: "I don't like ***** words in my ***** sentences."
```

## Example

```javascript
import { purifysentence } from "purifysentence";

const sentence = "I can't believe he said those awful things!";
const sensitiveWords = ["awful"];

const purifiedSentence = purifysentence({ sentence, words: sensitiveWords });

console.log(purifiedSentence);
// Output: "I can't believe he said those ***** things!"
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/ezeigboemmanuel/purifysentence).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
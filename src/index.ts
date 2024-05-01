export * from "./types"
import { purifysentenceProps } from "./types";

export function purifysentence({
  sentence,
  words,
}: purifysentenceProps) {
  return sentence.replace(new RegExp(words.join("|"), "ig"), "*****");
}
export const SCRIPT_ACTIONS = [
  "PushButton",
  "Enter Data",
  "Click",
  "Enter Text",
] as const

export type ScriptAction = (typeof SCRIPT_ACTIONS)[number]

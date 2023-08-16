import * as Node from "./Nodes";

export const nodeTypes = {
  source: Node.Source,
  email: Node.Action,
  whatsapp: Node.Action,
  pushNotify: Node.Action,
  sms: Node.Action,
  waitThenCheck: Node.Condition,
  end: Node.End,
  empty: Node.Empty,
};

import * as Node from "./Nodes";
import ConditionTypeNode from "../flowcomponents/ConditionTypeNode"
import ButtonTypeNode from "../flowcomponents/ButtonTypeNode";

export const nodeTypes = {
  source: Node.Source,
  selectorNode: ButtonTypeNode,
  email: Node.Welemail,
  whatsapp: Node.Action,
  pushNotify: Node.Action,
  sms: Node.Action,
  waitThenCheck: Node.Condition,
  end: Node.End,
  empty: Node.Empty,
};

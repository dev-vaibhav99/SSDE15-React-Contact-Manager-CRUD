import { MutableRefObject } from "react";

export interface IFrom {
  action: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export interface IInput {
  // type: string;
  // name: string;
  // placeholder: string;
  // value: string | number | undefined;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // reference?: MutableRefObject<HTMLInputElement | null>;

  reference: MutableRefObject<HTMLInputElement | null>;
  type: "text";
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
  title: string;
  type: "button" | "reset" | "submit" | undefined;
}

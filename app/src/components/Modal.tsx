"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FormSelect } from "./FormSelect";
import * as Form from "@radix-ui/react-form";
import { createOneUser } from "@/lib/user";
import useSWR, { useSWRConfig } from "swr";

// { name, email, role }
const Modal = () => {
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    console.log("yo");
    e.preventDefault();
    const { email, name, role, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    createOneUser({
      name: String(name),
      password: String(password),
      email: String(email),
      role: String(role),
    })
      .then((res) => {
        console.log("USER CREATED !!!! YIIIPPIIIII");
        console.log(res);
        setOpen(false);
        mutate("/users/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Add a user
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Add user
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Add a user to database here, Click save when you're done.
          </Dialog.Description>
          <Form.Root className="w-full mx-auto" onSubmit={handleSubmit}>
            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
                  Name
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-grey opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter your name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-grey shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-grey selection:bg-blackA9 resize-none"
                  required
                  defaultValue={""}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
                  Email
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-grey opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter your email
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-grey opacity-[0.8]"
                  match="typeMismatch"
                >
                  Please provide a valid email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-grey shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-grey selection:bg-blackA9"
                  type="email"
                  required
                  defaultValue={""}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="password">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
                  Password
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-grey opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter a password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-grey shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-grey selection:bg-blackA9 resize-none"
                  required
                  defaultValue={""}
                  type="password"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="role">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
                  Role
                </Form.Label>
              </div>
              <Form.Control asChild>
                <FormSelect></FormSelect>
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button className="box-border w-full text-grey hover:bg-slate-100 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                Save change
              </button>
            </Form.Submit>
          </Form.Root>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
